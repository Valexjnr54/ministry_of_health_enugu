import { Request, Response } from "express";
import { Config } from "../../../config/config";
import { Prisma, PrismaClient, Status } from "../../../models";
import { body, validationResult } from "express-validator";
import { verifycac, verifynin } from "../../../services/verification";
import bcrypt from "bcrypt";
import {
  ShortCode,
  expiryDate,
  extractIdFromPrefixedString,
  renewal_expiryDate,
  uniqueSix,
} from "../../../utils/functions";
import uploadImage, { uploadFile } from "../../../utils/cloudinary";
import fs from "fs";
import {
  extractReferenceFromRequest,
  getInsightTagValue,
  initializeCompletePayment,
  initializeFacilityPayment,
  initializePayment,
  verifyPayment,
} from "../../../utils/credo";
import {
  sendCompletionEmail,
  sendCreateFacilityMail,
  sendReceiptEmail,
  sendRenewalFacilityEmail,
  sendSaveAndExitMail,
} from "../../../utils/emailSender";
import {
  generateResetCode,
  generateStrongPassword,
} from "../../../services/generatePassword";
import { facility_price_list_service } from "../../../services/calculatePrice";

const prisma = new PrismaClient();
// interface FileUploads {
//   [fieldname: string]: Express.Multer.File[];
// }

export async function createFacility(request: Request, response: Response) {
  const {
    facility_name,
    location,
    cac,
    owner_name,
    owner_phone_number,
    owner_contact_address,
    owner_nin,
    owner_email,
    owner_gender,
    facility_sector,
    facility_type,
    facility_level,
    services_offered,
    number_of_bed,
    source_of_water,
    method_of_disposal,
    facility_personnel,
    reference,
    lga,
    landmark,
    personnel_incharge,
    personnel_incharge_name,
    personnel_incharge_practice_id,
    supervising_doctor_name,
    supervising_doctor_practice_id,
  } = request.body;
  //  const files = request.files as FileUploads;
  //  const requiredImages = ['site_plan', 'owner_passport', 'cac_image', 'building_plan', 'tax_clearance_certificate'];
  //   for (let image of requiredImages) {
  //     if (!files[image] || files[image].length == 0) {
  //         return response.status(400).json({ message: `Please upload a ${image}` });
  //     }
  //   }
  let facilityPersonnel;

  try {
    const validationRules = [
      body("facility_name").notEmpty().withMessage("Facility Name is required"),
      body("location").notEmpty().withMessage("Location is required"),
      body("cac").notEmpty().withMessage("CAC number is required"),
      body("owner_email").isEmail().withMessage("Owner email address"),
      body("owner_name").notEmpty().withMessage("Owner Name is required"),
      body("owner_phone_number")
        .notEmpty()
        .withMessage("Owner Phone Number is required"),
      body("owner_contact_address")
        .notEmpty()
        .withMessage("Owner Contact Address is required"),
      body("owner_nin").notEmpty().withMessage("Owner NIN is required"),
      body("facility_sector")
        .notEmpty()
        .withMessage("Facility Sector is required"),
      body("facility_type").notEmpty().withMessage("Facility Type is required"),
      body("facility_level")
        .notEmpty()
        .withMessage("Facility Level is required"),
      body("services_offered")
        .notEmpty()
        .withMessage("Services Offered is required"),
      body("number_of_bed").notEmpty().withMessage("number Of Bed is required"),
      body("source_of_water")
        .notEmpty()
        .withMessage("Source of Water is required"),
      body("reference").notEmpty().withMessage("Payment Reference is required"),
      body("lga").notEmpty().withMessage("Local Government Area is required"),
      body("method_of_disposal")
        .notEmpty()
        .withMessage("Method of Disposal is required"),
      body("personnel_incharge")
        .notEmpty()
        .withMessage("Personnel In Charge is required"),
      body("personnel_incharge_name")
        .notEmpty()
        .withMessage("Name of Personnel In Charge is required"),
      body("personnel_incharge_practice_id")
        .notEmpty()
        .withMessage("Practice ID of Personnel In Charge is required"),
    ];

    // Apply validation rules to the request
    await Promise.all(validationRules.map((rule) => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    if (personnel_incharge === "Mid_wife") {
      const validationRules = [
        body("supervising_doctor_name")
          .notEmpty()
          .withMessage("Supervising Doctor Name is required"),
        body("supervising_doctor_practice_id")
          .notEmpty()
          .withMessage("Supervising Doctor Practice ID is required"),
      ];

      // Apply validation rules to the request
      await Promise.all(validationRules.map((rule) => rule.run(request)));

      const errors = validationResult(request);
      if (!errors.isEmpty()) {
        return response.status(400).json({ errors: errors.array() });
      }
    }

    let amount: number;
    const numberOfBed = parseInt(number_of_bed as string, 10);

    if (
      facility_type === "Specialist_hospital" ||
      facility_type === "Specialist_clinic"
    ) {
      if (number_of_bed > 10) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "above 10"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 6 && number_of_bed <= 10) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "6 to 10"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 1 && number_of_bed <= 5) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "1 to 5"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else {
        amount = 150000;
      }
    } else if (facility_type === "General_hospital") {
      if (number_of_bed > 50) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "above 50"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 31 && number_of_bed <= 50) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "30 to 50"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 10 && number_of_bed <= 30) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "10 to 30"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else {
        amount = 90000;
      }
    } else if (facility_type === "Maternity_home") {
      if (number_of_bed > 30) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "above 30"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 21 && number_of_bed <= 30) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "21 to 30"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 11 && number_of_bed <= 20) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "11 to 20"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else {
        amount = 30000;
      }
    } else if (
      facility_type === "Grade_1_medical_lab" ||
      facility_type === "Specialist_eye_hospital" ||
      facility_type === "Mortuary"
    ) {
      const verifyPrice = await facility_price_list_service(
        facility_type,
        null
      );
      if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
        amount = verifyPrice.firstTimeFee;
      } else {
        // Handle the case where firstTimeFee is not provided
        console.error("Failed to retrieve price information.");
        return response
          .status(500)
          .json({ message: "Failed to retrieve price information." });
      }
    } else if (
      facility_type === "Grade_2_medical_lab" ||
      facility_type === "Eye_clinic" ||
      facility_type === "Radiotherapy_center" ||
      facility_type === "Xray_center" ||
      facility_type === "Dental_clinic"
    ) {
      const verifyPrice = await facility_price_list_service(
        facility_type,
        null
      );
      if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
        amount = verifyPrice.firstTimeFee;
      } else {
        // Handle the case where firstTimeFee is not provided
        console.error("Failed to retrieve price information.");
        return response
          .status(500)
          .json({ message: "Failed to retrieve price information." });
      }
    } else if (
      facility_type === "Grade_3_medical_lab" ||
      facility_type === "Grade_4_medical_lab"
    ) {
      const verifyPrice = await facility_price_list_service(
        facility_type,
        null
      );
      if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
        amount = verifyPrice.firstTimeFee;
      } else {
        // Handle the case where firstTimeFee is not provided
        console.error("Failed to retrieve price information.");
        return response
          .status(500)
          .json({ message: "Failed to retrieve price information." });
      }
    } else if (
      facility_type === "Dental_center" ||
      facility_type === "Outpatient_medical_clinic" ||
      facility_type === "Eye_center"
    ) {
      const verifyPrice = await facility_price_list_service(
        facility_type,
        null
      );
      if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
        amount = verifyPrice.firstTimeFee;
      } else {
        // Handle the case where firstTimeFee is not provided
        console.error("Failed to retrieve price information.");
        return response
          .status(500)
          .json({ message: "Failed to retrieve price information." });
      }
    } else if (
      facility_type === "Physiotherapy_center" ||
      facility_type === "Ultrasound"
    ) {
      const verifyPrice = await facility_price_list_service(
        facility_type,
        null
      );
      if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
        amount = verifyPrice.firstTimeFee;
      } else {
        // Handle the case where firstTimeFee is not provided
        console.error("Failed to retrieve price information.");
        return response
          .status(500)
          .json({ message: "Failed to retrieve price information." });
      }
    } else {
      return response
        .status(400)
        .json({ message: "Unidentified Facility Type" });
    }

    const services_offered_array: string[] = services_offered.split(",");
    const service_offered = JSON.stringify(services_offered_array);
    // const facilityPersonnel = JSON.parse(facility_personnel);
    // Check if facility_personnel is a string and parse it
    if (typeof facility_personnel === "string") {
      facilityPersonnel = JSON.parse(facility_personnel);
    } else {
      // If it's already an object or in another format, handle accordingly
      facilityPersonnel = facility_personnel;
    }

    const check_payment = await prisma.facility_payment.findUnique({
      where: { reference },
    });
    if (!check_payment) {
      return response.status(400).json({
        message: "Invalid Payment Reference, Please Kindly make payment",
      });
    }

    const existingCAC = await prisma.facility.findUnique({ where: { cac } });
    if (existingCAC) {
      return response.status(400).json({ message: "CAC Already Exist" });
    }

    const check_reference_used = await prisma.facility_payment.findUnique({
      where: { reference, has_registered: true },
    });
    if (check_reference_used) {
      return response.status(400).json({
        message:
          "Payment Reference used by another user, Please Kindly make payment",
      });
    }

    if (
      !request.files ||
      !("site_plan" in request.files) ||
      !("owner_passport" in request.files) ||
      !("cac_image" in request.files) ||
      !("building_plan" in request.files) ||
      !("tax_clearance_certificate" in request.files)
    ) {
      return response
        .status(400)
        .json({ message: "Please provide all required images." });
    }
    let owner_passport;
    if (
      request.files["owner_passport"][0].mimetype == "image/png" ||
      request.files["owner_passport"][0].mimetype == "image/jpeg" ||
      request.files["owner_passport"][0].mimetype == "image/jpg" ||
      request.files["owner_passport"][0].mimetype == "image/gif"
    ) {
      // Upload Site Plan image to Cloudinary
      owner_passport = (await uploadImage(
        request.files["owner_passport"][0].path,
        "enugu_ministry_of_health/images/owner_passports"
      )) as string;
      fs.unlink(request.files["owner_passport"][0].path, (err) => {
        if (err) {
          console.error(`Error deleting Site Plan file`);
        } else {
          console.log(`Owner Passport File deleted`);
        }
      });
    } else {
      owner_passport = (await uploadFile(
        request.files["owner_passport"][0].path,
        "enugu_ministry_of_health/images/owner_passports"
      )) as string;
      fs.unlink(request.files["owner_passport"][0].path, (err) => {
        if (err) {
          console.error(`Error deleting Site Plan file`);
        } else {
          console.log(`Owner Passport File deleted`);
        }
      });
    }
    let cac_image;
    if (
      request.files["cac_image"][0].mimetype == "image/png" ||
      request.files["cac_image"][0].mimetype == "image/jpeg" ||
      request.files["cac_image"][0].mimetype == "image/jpg" ||
      request.files["cac_image"][0].mimetype == "image/gif"
    ) {
      // Upload Site Plan image to Cloudinary
      cac_image = (await uploadImage(
        request.files["cac_image"][0].path,
        "enugu_ministry_of_health/images/cac_images"
      )) as string;
      fs.unlink(request.files["cac_image"][0].path, (err) => {
        if (err) {
          console.error(`Error deleting Site Plan file`);
        } else {
          console.log(`CAC File deleted`);
        }
      });
    } else {
      // Upload Site Plan image to Cloudinary
      cac_image = (await uploadFile(
        request.files["cac_image"][0].path,
        "enugu_ministry_of_health/images/cac_images"
      )) as string;
      fs.unlink(request.files["cac_image"][0].path, (err) => {
        if (err) {
          console.error(`Error deleting Site Plan file`);
        } else {
          console.log(`CAC File deleted`);
        }
      });
    }

    let site_plan;
    if (
      request.files["site_plan"][0].mimetype == "image/png" ||
      request.files["site_plan"][0].mimetype == "image/jpeg" ||
      request.files["site_plan"][0].mimetype == "image/jpg" ||
      request.files["site_plan"][0].mimetype == "image/gif"
    ) {
      // Upload Site Plan image to Cloudinary
      site_plan = (await uploadImage(
        request.files["site_plan"][0].path,
        "enugu_ministry_of_health/images/site_plans"
      )) as string;
      fs.unlink(request.files["site_plan"][0].path, (err) => {
        if (err) {
          console.error(`Error deleting Site Plan file`);
        } else {
          console.log(`Site Plan File deleted`);
        }
      });
    } else {
      // Upload Site Plan image to Cloudinary
      site_plan = (await uploadFile(
        request.files["site_plan"][0].path,
        "enugu_ministry_of_health/images/site_plans"
      )) as string;
      fs.unlink(request.files["site_plan"][0].path, (err) => {
        if (err) {
          console.error(`Error deleting Site Plan file`);
        } else {
          console.log(`Site Plan File deleted`);
        }
      });
    }

    let building_plan;
    if (
      request.files["building_plan"][0].mimetype == "image/png" ||
      request.files["building_plan"][0].mimetype == "image/jpeg" ||
      request.files["building_plan"][0].mimetype == "image/jpg" ||
      request.files["building_plan"][0].mimetype == "image/gif"
    ) {
      // Upload Building Plan image to Cloudinary
      building_plan = (await uploadImage(
        request.files["building_plan"][0].path,
        "enugu_ministry_of_health/images/building_plans"
      )) as string;
      fs.unlink(request.files["building_plan"][0].path, (err) => {
        if (err) {
          console.error(`Error deleting Building Plan file`);
        } else {
          console.log(`Building Plan File deleted`);
        }
      });
    } else {
      // Upload Building Plan image to Cloudinary
      building_plan = (await uploadFile(
        request.files["building_plan"][0].path,
        "enugu_ministry_of_health/images/building_plans"
      )) as string;
      fs.unlink(request.files["building_plan"][0].path, (err) => {
        if (err) {
          console.error(`Error deleting Building Plan file`);
        } else {
          console.log(`Building Plan File deleted`);
        }
      });
    }

    let tax_clearance_certificate;
    if (
      request.files["tax_clearance_certificate"][0].mimetype == "image/png" ||
      request.files["tax_clearance_certificate"][0].mimetype == "image/jpeg" ||
      request.files["tax_clearance_certificate"][0].mimetype == "image/jpg" ||
      request.files["tax_clearance_certificate"][0].mimetype == "image/gif"
    ) {
      // Upload Tax Clearance Certificate image to Cloudinary
      tax_clearance_certificate = (await uploadImage(
        request.files["tax_clearance_certificate"][0].path,
        "enugu_ministry_of_health/images/tax_clearance_certificates"
      )) as string;
      fs.unlink(request.files["tax_clearance_certificate"][0].path, (err) => {
        if (err) {
          console.error(`Error deleting Tax Clearance Certificate Image file`);
        } else {
          console.log(`Tax Clearance Certificate Image File deleted`);
        }
      });
    } else {
      // Upload Tax Clearance Certificate image to Cloudinary
      tax_clearance_certificate = (await uploadFile(
        request.files["tax_clearance_certificate"][0].path,
        "enugu_ministry_of_health/images/tax_clearance_certificates"
      )) as string;
      fs.unlink(request.files["tax_clearance_certificate"][0].path, (err) => {
        if (err) {
          console.error(`Error deleting Tax Clearance Certificate Image file`);
        } else {
          console.log(`Tax Clearance Certificate Image File deleted`);
        }
      });
    }

    const ninResponse = await verifynin(owner_nin);
    if (ninResponse.response_code == "01") {
      return response.status(404).json({
        message:
          "Invalid Owner`s NIN, Please Check the NIN number and try again",
      });
    } else if (ninResponse.response_code == "02") {
      return response.status(400).json({
        message: `Your NIN could not be verified at this time, The NIN you provided could be wrong please check if you provided a correct NIN if this persists check back later. If you are no longer on this page click on the 'already started registration button' on the registration page and provide your payment reference to continue.`,
      });
    } else if (ninResponse.response_code == "03") {
      return response.status(400).json({
        message:
          "Not your fault we will look into the reason, Please contact support",
      });
    }

    const code = await uniqueSix();
    const short_code = await ShortCode(facility_name);
    const enugu_facility_id = `EN/${short_code}/${code}`;
    const reset_password_token = await generateResetCode(30);

    const company_type = await ShortCode(cac);
    const prefixes = ["BN-", "IT-", "RC-"];
    const rc_number = extractIdFromPrefixedString(cac, prefixes);
    const cacResponse = await verifycac(
      await rc_number,
      facility_name,
      company_type
    );
    if (cacResponse.response_code == "01") {
      return response.status(404).json({
        message: "Invalid CAC, Please Check the CAC number and try again",
      });
    } else if (cacResponse.response_code == "02") {
      return response.status(400).json({
        message: `Your CAC could not be verified at this time, The CAC you provided could be wrong please check if you provided a correct CAC if this persists check back later. If you are no longer on this page click on the 'already started registration button' on the registration page and provide your payment reference to continue.`,
      });
    } else if (cacResponse.response_code == "03") {
      return response.status(400).json({
        message:
          "Not your fault we will look into the reason, Please contact support.",
      });
    }

    const facility = await prisma.facility.create({
      data: {
        facility_name,
        location,
        cac,
        owner_name,
        owner_phone_number,
        owner_contact_address,
        owner_nin,
        owner_email,
        owner_gender,
        facility_sector,
        facility_type,
        facility_level,
        services_offered: service_offered,
        number_of_bed: numberOfBed,
        source_of_water,
        method_of_disposal,
        site_plan,
        building_plan,
        tax_clearance_certificate,
        owner_passport,
        cac_image,
        cac_status: "Approved",
        status: "Pending",
        reference,
        enugu_facility_id,
        reset_password_token,
        facility_personnel_count: facilityPersonnel.count,
        lga,
        landmark,
        personnel_incharge,
        personnel_incharge_name,
        personnel_incharge_practice_id,
        supervising_doctor_name,
        supervising_doctor_practice_id,
      },
    });

    facilityPersonnel.personnel.forEach(async (personnel: any) => {
      const type = personnel.type;
      const enugu_practice_id = personnel.enugu_practice_id;
      const user = await prisma.users.findUnique({
        where: { enugu_practice_id },
      });
      const user_id = user?.id;

      if (user_id === undefined) {
        console.error("User ID is undefined for personnel:", personnel);
        return; // Skip creating facility personnel if user ID is undefined
      }
      try {
        const createdPersonnel = await prisma.facility_personnel.create({
          data: {
            facility_id: facility.id,
            enugu_practice_id,
            user_id,
            type,
          },
        });
      } catch (error) {
        console.error("Error creating facility personnel:", error);
      }
    });

    const update = await prisma.facility_payment.update({
      data: { has_registered: true },
      where: { reference },
    });
    const type_of_payment = "Complete Registration of Health Care Facility";
    const payamount = amount * 100;
    const callback_url = Config.credoFacilityCompleteRegistrationCallback;
    if (!callback_url) {
      return response
        .status(400)
        .json({ message: "Callback Can't be undefined" });
    }

    await sendCreateFacilityMail(facility.owner_email, facility, amount);

    const paymentInfo = await initializeCompletePayment(
      facility_name,
      facility.id,
      owner_phone_number,
      payamount,
      owner_email,
      facility_type,
      type_of_payment,
      callback_url
    );
    response.json({ data: paymentInfo });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Internal Server Error" });
  }
}

export async function saveAndExit(request: Request, response: Response) {
  const {
    facility_name,
    location,
    cac,
    owner_name,
    owner_phone_number,
    owner_contact_address,
    owner_nin,
    owner_email,
    facility_sector,
    facility_type,
    facility_level,
    services_offered,
    number_of_bed,
    source_of_water,
    method_of_disposal,
    facility_personnel,
    reference,
    lga,
  } = request.body;

  try {
    const validationRules = [
      body("facility_name").notEmpty().withMessage("Facility Name is required"),
      body("location").notEmpty().withMessage("Location is required"),
      body("cac").notEmpty().withMessage("CAC number is required"),
      body("owner_email").isEmail().withMessage("Owner email address"),
      body("owner_name").notEmpty().withMessage("Owner Name is required"),
      body("owner_phone_number")
        .notEmpty()
        .withMessage("Owner Phone Number is required"),
      body("owner_contact_address")
        .notEmpty()
        .withMessage("Owner Contact Address is required"),
      body("owner_nin").notEmpty().withMessage("Owner NIN is required"),
      body("facility_sector")
        .notEmpty()
        .withMessage("Facility Sector is required"),
      body("facility_type").notEmpty().withMessage("Facility Type is required"),
      body("facility_level")
        .notEmpty()
        .withMessage("Facility Level is required"),
      body("services_offered")
        .notEmpty()
        .withMessage("Services Offered is required"),
      body("number_of_bed").notEmpty().withMessage("number Of Bed is required"),
      body("source_of_water")
        .notEmpty()
        .withMessage("Source of Water is required"),
      body("facility_personnel")
        .notEmpty()
        .withMessage("Facility Personnel is required"),
      body("reference").notEmpty().withMessage("Payment Reference is required"),
      body("lga").notEmpty().withMessage("Local Government Area is required"),
      body("method_of_disposal")
        .notEmpty()
        .withMessage("Method of Disposal is required"),
    ];

    // Apply validation rules to the request
    await Promise.all(validationRules.map((rule) => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    let amount: number;
    const numberOfBed = parseInt(number_of_bed as string, 10);

    if (
      facility_type === "Specialist_hospital" ||
      facility_type === "Specialist_clinic"
    ) {
      if (number_of_bed > 10) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "above 10"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 6 && number_of_bed <= 10) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "6 to 10"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 1 && number_of_bed <= 5) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "1 to 5"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else {
        amount = 150000;
      }
    } else if (facility_type === "General_hospital") {
      if (number_of_bed > 50) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "above 50"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 31 && number_of_bed <= 50) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "30 to 50"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 10 && number_of_bed <= 30) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "10 to 30"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else {
        amount = 90000;
      }
    } else if (facility_type === "Maternity_home") {
      if (number_of_bed > 30) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "above 30"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 21 && number_of_bed <= 30) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "21 to 30"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 11 && number_of_bed <= 20) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "11 to 20"
        );
        if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
          amount = verifyPrice.firstTimeFee;
        } else {
          // Handle the case where firstTimeFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else {
        amount = 30000;
      }
    } else if (
      facility_type === "Grade_1_medical_lab" ||
      facility_type === "Specialist_eye_hospital" ||
      facility_type === "Mortuary"
    ) {
      const verifyPrice = await facility_price_list_service(
        facility_type,
        null
      );
      if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
        amount = verifyPrice.firstTimeFee;
      } else {
        // Handle the case where firstTimeFee is not provided
        console.error("Failed to retrieve price information.");
        return response
          .status(500)
          .json({ message: "Failed to retrieve price information." });
      }
    } else if (
      facility_type === "Grade_2_medical_lab" ||
      facility_type === "Eye_clinic" ||
      facility_type === "Radiotherapy_center" ||
      facility_type === "Xray_center" ||
      facility_type === "Dental_clinic"
    ) {
      const verifyPrice = await facility_price_list_service(
        facility_type,
        null
      );
      if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
        amount = verifyPrice.firstTimeFee;
      } else {
        // Handle the case where firstTimeFee is not provided
        console.error("Failed to retrieve price information.");
        return response
          .status(500)
          .json({ message: "Failed to retrieve price information." });
      }
    } else if (
      facility_type === "Grade_3_medical_lab" ||
      facility_type === "Grade_4_medical_lab"
    ) {
      const verifyPrice = await facility_price_list_service(
        facility_type,
        null
      );
      if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
        amount = verifyPrice.firstTimeFee;
      } else {
        // Handle the case where firstTimeFee is not provided
        console.error("Failed to retrieve price information.");
        return response
          .status(500)
          .json({ message: "Failed to retrieve price information." });
      }
    } else if (
      facility_type === "Dental_center" ||
      facility_type === "Outpatient_medical_clinic" ||
      facility_type === "Eye_center"
    ) {
      const verifyPrice = await facility_price_list_service(
        facility_type,
        null
      );
      if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
        amount = verifyPrice.firstTimeFee;
      } else {
        // Handle the case where firstTimeFee is not provided
        console.error("Failed to retrieve price information.");
        return response
          .status(500)
          .json({ message: "Failed to retrieve price information." });
      }
    } else if (
      facility_type === "Physiotherapy_center" ||
      facility_type === "Ultrasound"
    ) {
      const verifyPrice = await facility_price_list_service(
        facility_type,
        null
      );
      if (verifyPrice && verifyPrice.firstTimeFee !== undefined) {
        amount = verifyPrice.firstTimeFee;
      } else {
        // Handle the case where firstTimeFee is not provided
        console.error("Failed to retrieve price information.");
        return response
          .status(500)
          .json({ message: "Failed to retrieve price information." });
      }
    } else {
      return response
        .status(400)
        .json({ message: "Unidentified Facility Type" });
    }

    const services_offered_array: string[] = services_offered.split(",");
    const service_offered = JSON.stringify(services_offered_array);

    // const facilityPersonnel = facility_personnel;
    // Check if facility_personnel is a string and parse it
    let facilityPersonnel;
    if (typeof facility_personnel === "string") {
      facilityPersonnel = JSON.parse(facility_personnel);
    } else {
      // If it's already an object or in another format, handle accordingly
      facilityPersonnel = facility_personnel;
    }

    const check_payment = await prisma.facility_payment.findUnique({
      where: { reference },
    });
    if (!check_payment) {
      return response.status(400).json({
        message: "Invalid Payment Reference, Please Kindly make payment",
      });
    }

    const check_reference_used = await prisma.facility_payment.findUnique({
      where: { reference, has_registered: true },
    });
    if (check_reference_used) {
      return response.status(400).json({
        message:
          "Payment Reference used by another user, Please Kindly make payment",
      });
    }

    if (
      !request.files ||
      !("site_plan" in request.files) ||
      !("owner_passport" in request.files) ||
      !("cac_image" in request.files) ||
      !("building_plan" in request.files) ||
      !("tax_clearance_certificate" in request.files)
    ) {
      return response
        .status(400)
        .json({ message: "Please provide all required images." });
    }
    // Upload Site Plan image to Cloudinary
    const owner_passport = await uploadImage(
      request.files["owner_passport"][0].path,
      "enugu_ministry_of_health/images/owner_passports"
    );
    fs.unlink(request.files["owner_passport"][0].path, (err) => {
      if (err) {
        console.error(`Error deleting Site Plan file`);
      } else {
        console.log(`Owner NIN File deleted`);
      }
    });
    // Upload Site Plan image to Cloudinary
    const cac_image = await uploadImage(
      request.files["cac_image"][0].path,
      "enugu_ministry_of_health/images/cac_images"
    );
    fs.unlink(request.files["cac_image"][0].path, (err) => {
      if (err) {
        console.error(`Error deleting Site Plan file`);
      } else {
        console.log(`CAC File deleted`);
      }
    });
    // Upload Site Plan image to Cloudinary
    const site_plan = await uploadImage(
      request.files["site_plan"][0].path,
      "enugu_ministry_of_health/images/site_plans"
    );
    fs.unlink(request.files["site_plan"][0].path, (err) => {
      if (err) {
        console.error(`Error deleting Site Plan file`);
      } else {
        console.log(`Site Plan File deleted`);
      }
    });

    // Upload Building Plan image to Cloudinary
    const building_plan = await uploadImage(
      request.files["building_plan"][0].path,
      "enugu_ministry_of_health/images/building_plans"
    );
    fs.unlink(request.files["building_plan"][0].path, (err) => {
      if (err) {
        console.error(`Error deleting Building Plan file`);
      } else {
        console.log(`Building Plan File deleted`);
      }
    });

    // Upload Tax Clearance Certificate image to Cloudinary
    const tax_clearance_certificate = await uploadImage(
      request.files["tax_clearance_certificate"][0].path,
      "enugu_ministry_of_health/images/tax_clearance_certificates"
    );
    fs.unlink(request.files["tax_clearance_certificate"][0].path, (err) => {
      if (err) {
        console.error(`Error deleting Tax Clearance Certificate Image file`);
      } else {
        console.log(`Tax Clearance Certificate Image File deleted`);
      }
    });

    // // Upload compliance_certificate image to Cloudinary
    // const compliance_certificate = await uploadImage(request.files['compliance_certificate'][0].path, 'enugu_ministry_of_health/images/compliance_certificates');
    // fs.unlink(request.files['compliance_certificate'][0].path, (err) => {
    //   if (err) {
    //     console.error(`Error deleting Compliance Certificate Image file`);
    //   } else {
    //     console.log(`Compliance Certificate Image File deleted`);
    //   }
    // });

    const code = await uniqueSix();
    const short_code = await ShortCode(facility_name);
    const enugu_facility_id = `EN/${short_code}/${code}`;
    const password = await generateStrongPassword(16);
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const facility = await prisma.facility.create({
      data: {
        facility_name,
        location,
        cac,
        owner_name,
        owner_phone_number,
        owner_contact_address,
        owner_nin,
        owner_email,
        facility_sector,
        facility_type,
        facility_level,
        services_offered,
        number_of_bed: numberOfBed,
        source_of_water,
        method_of_disposal,
        site_plan: site_plan || "", // Provide a default value if site_plan is undefined
        building_plan: building_plan || "", // Provide a default value if building_plan is undefined
        tax_clearance_certificate: tax_clearance_certificate || "", // Provide a default value if tax_clearance_certificate is undefined
        // compliance_certificate: compliance_certificate || "",
        owner_passport: owner_passport || "",
        cac_image: cac_image || "",
        cac_status: "Pending",
        status: "Pending",
        reference,
        enugu_facility_id,
        facility_personnel_count: facilityPersonnel.count,
        lga,
      },
    });

    facilityPersonnel.personnel.forEach(async (personnel: any) => {
      const type = personnel.type;
      const enugu_practice_id = personnel.enugu_practice_id;
      const user = await prisma.users.findUnique({
        where: { enugu_practice_id },
      });
      const user_id = user?.id;

      if (user_id === undefined) {
        console.error("User ID is undefined for personnel:", personnel);
        return; // Skip creating facility personnel if user ID is undefined
      }
      try {
        const createdPersonnel = await prisma.facility_personnel.create({
          data: {
            facility_id: facility.id,
            enugu_practice_id,
            user_id,
            type,
          },
        });
      } catch (error) {
        console.error("Error creating facility personnel:", error);
      }
    });

    const update = await prisma.facility_payment.update({
      data: { has_registered: true },
      where: { reference },
    });

    await sendSaveAndExitMail(facility.owner_email, facility);
    const lga_id = parseInt(facility.lga as string);
    const lga_detail = await prisma.local_government.findUnique({
      where: { id: lga_id },
    });

    return response.status(201).json({
      message: "Details Saved, Login to Complete Registration",
      user: facility,
      lga: lga_detail,
    });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Internal Server Error" });
  }
}

export async function verifyCompleteRegistrationPaymentHandler(
  request: Request,
  response: Response
) {
  try {
    const reference = extractReferenceFromRequest(request);
    if (typeof reference !== "string") {
      throw new Error("Reference is not a string");
    }

    const paymentDetails = await verifyPayment(reference);
    const paymentStatus = paymentDetails.status;
    const paymentReference = paymentDetails.transRef;
    const facility_name = await getInsightTagValue(
      "facility_name",
      paymentDetails.metadata
    );
    const email = await getInsightTagValue("email", paymentDetails.metadata);
    const paidamount = await getInsightTagValue(
      "amount",
      paymentDetails.metadata
    );
    const phone_number = await getInsightTagValue(
      "phone_number",
      paymentDetails.metadata
    );
    const type = await getInsightTagValue("type", paymentDetails.metadata);
    const type_of_payment = await getInsightTagValue(
      "type_of_payment",
      paymentDetails.metadata
    );
    const facility_id = parseInt(
      (await getInsightTagValue(
        "facility_id",
        paymentDetails.metadata
      )) as string
    );

    const amount = (paidamount / 100).toString();

    const expiry_date = (await expiryDate()).toString();
    const password = await generateStrongPassword(16);
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    const facility_complete = await prisma.facility_complete_payment.findUnique(
      { where: { reference } }
    );
    if (facility_complete) {
      const fetch_facility = await prisma.facility.findUnique({
        where: { id: facility_id },
      });
      return response.status(200).json({
        message: "Payment was Successful",
        facility: facility_complete,
      });
    }

    const payment = await prisma.facility_complete_payment.create({
      data: {
        facility_name,
        email,
        amount,
        phone_number,
        type,
        type_of_payment,
        reference: paymentReference,
        status: "Paid",
      },
    });

    const facility = await prisma.facility.update({
      data: {
        expiry_date,
        password: hashedPassword,
        current_reference: paymentDetails.transRef,
      },
      where: {
        id: facility_id,
      },
    });
    const lga_id = parseInt(facility.lga as string);
    const lga = await prisma.local_government.findUnique({
      where: { id: lga_id },
    });

    await sendCompletionEmail(
      facility.owner_email,
      facility,
      "facility",
      password
    );

    return response
      .status(200)
      .json({ message: "Payment was Successful", user: facility, lga });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ error: "Internal server error" });
  }
}

export async function initializeRenewalPaymentHandler(
  request: Request,
  response: Response
) {
  try {
    const { enugu_facility_id } = request.body;
    const validationRules = [
      body("enugu_facility_id")
        .notEmpty()
        .withMessage("Enugu State Facility Id is required"),
    ];

    // Apply validation rules to the request
    await Promise.all(validationRules.map((rule) => rule.run(request)));

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({ errors: errors.array() });
    }

    const facility = await prisma.facility.findUnique({
      where: {
        enugu_facility_id,
      },
    });

    if (!facility) {
      return response.status(400).json({ message: "Invalid Facility ID" });
    }

    if (facility.status !== "Approved") {
      return response
        .status(400)
        .json({ message: "Your Facility has not been approved yet" });
    }

    const facility_type = facility.facility_type;
    const facility_name = facility.facility_name;
    const number_of_bed = facility.number_of_bed;
    const email = facility.owner_email;
    let amount: number;

    if (
      facility_type === "Specialist_hospital" ||
      facility_type === "Specialist_clinic"
    ) {
      if (number_of_bed > 10) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "above 10"
        );
        if (verifyPrice && verifyPrice.renewalFee !== undefined) {
          amount = verifyPrice.renewalFee;
        } else {
          // Handle the case where renewalFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 6 && number_of_bed <= 10) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "6 to 10"
        );
        if (verifyPrice && verifyPrice.renewalFee !== undefined) {
          amount = verifyPrice.renewalFee;
        } else {
          // Handle the case where renewalFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 1 && number_of_bed <= 5) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "1 to 5"
        );
        if (verifyPrice && verifyPrice.renewalFee !== undefined) {
          amount = verifyPrice.renewalFee;
        } else {
          // Handle the case where renewalFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else {
        amount = 150000;
      }
    } else if (facility_type === "General_hospital") {
      if (number_of_bed > 50) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "above 50"
        );
        if (verifyPrice && verifyPrice.renewalFee !== undefined) {
          amount = verifyPrice.renewalFee;
        } else {
          // Handle the case where renewalFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 31 && number_of_bed <= 50) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "30 to 50"
        );
        if (verifyPrice && verifyPrice.renewalFee !== undefined) {
          amount = verifyPrice.renewalFee;
        } else {
          // Handle the case where renewalFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 10 && number_of_bed <= 30) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "10 to 30"
        );
        if (verifyPrice && verifyPrice.renewalFee !== undefined) {
          amount = verifyPrice.renewalFee;
        } else {
          // Handle the case where renewalFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else {
        amount = 90000;
      }
    } else if (facility_type === "Maternity_home") {
      if (number_of_bed > 30) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "above 30"
        );
        if (verifyPrice && verifyPrice.renewalFee !== undefined) {
          amount = verifyPrice.renewalFee;
        } else {
          // Handle the case where renewalFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 21 && number_of_bed <= 30) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "21 to 30"
        );
        if (verifyPrice && verifyPrice.renewalFee !== undefined) {
          amount = verifyPrice.renewalFee;
        } else {
          // Handle the case where renewalFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else if (number_of_bed >= 11 && number_of_bed <= 20) {
        const verifyPrice = await facility_price_list_service(
          facility_type,
          "11 to 20"
        );
        if (verifyPrice && verifyPrice.renewalFee !== undefined) {
          amount = verifyPrice.renewalFee;
        } else {
          // Handle the case where renewalFee is not provided
          console.error("Failed to retrieve price information.");
          return response
            .status(500)
            .json({ message: "Failed to retrieve price information." });
        }
      } else {
        amount = 30000;
      }
    } else if (
      facility_type === "Grade_1_medical_lab" ||
      facility_type === "Specialist_eye_hospital" ||
      facility_type === "Mortuary"
    ) {
      const verifyPrice = await facility_price_list_service(
        facility_type,
        null
      );
      if (verifyPrice && verifyPrice.renewalFee !== undefined) {
        amount = verifyPrice.renewalFee;
      } else {
        // Handle the case where renewalFee is not provided
        console.error("Failed to retrieve price information.");
        return response
          .status(500)
          .json({ message: "Failed to retrieve price information." });
      }
    } else if (
      facility_type === "Grade_2_medical_lab" ||
      facility_type === "Eye_clinic" ||
      facility_type === "Radiotherapy_center" ||
      facility_type === "Xray_center" ||
      facility_type === "Dental_clinic"
    ) {
      const verifyPrice = await facility_price_list_service(
        facility_type,
        null
      );
      if (verifyPrice && verifyPrice.renewalFee !== undefined) {
        amount = verifyPrice.renewalFee;
      } else {
        // Handle the case where renewalFee is not provided
        console.error("Failed to retrieve price information.");
        return response
          .status(500)
          .json({ message: "Failed to retrieve price information." });
      }
    } else if (
      facility_type === "Grade_3_medical_lab" ||
      facility_type === "Grade_4_medical_lab"
    ) {
      const verifyPrice = await facility_price_list_service(
        facility_type,
        null
      );
      if (verifyPrice && verifyPrice.renewalFee !== undefined) {
        amount = verifyPrice.renewalFee;
      } else {
        // Handle the case where renewalFee is not provided
        console.error("Failed to retrieve price information.");
        return response
          .status(500)
          .json({ message: "Failed to retrieve price information." });
      }
    } else if (
      facility_type === "Dental_center" ||
      facility_type === "Outpatient_medical_clinic" ||
      facility_type === "Eye_center"
    ) {
      const verifyPrice = await facility_price_list_service(
        facility_type,
        null
      );
      if (verifyPrice && verifyPrice.renewalFee !== undefined) {
        amount = verifyPrice.renewalFee;
      } else {
        // Handle the case where renewalFee is not provided
        console.error("Failed to retrieve price information.");
        return response
          .status(500)
          .json({ message: "Failed to retrieve price information." });
      }
    } else if (
      facility_type === "Physiotherapy_center" ||
      facility_type === "Ultrasound"
    ) {
      const verifyPrice = await facility_price_list_service(
        facility_type,
        null
      );
      if (verifyPrice && verifyPrice.renewalFee !== undefined) {
        amount = verifyPrice.renewalFee;
      } else {
        // Handle the case where renewalFee is not provided
        console.error("Failed to retrieve price information.");
        return response
          .status(500)
          .json({ message: "Failed to retrieve price information." });
      }
    } else {
      return response
        .status(400)
        .json({ message: "Unidentified Facility Type" });
    }
    const type_of_payment = "Renewal Payment of Health Care Facility";
    const payamount = amount * 100;
    const callback_url = Config.credoVerifyFacilityRenewalCallback;
    if (!callback_url) {
      return response
        .status(400)
        .json({ message: "Callback Can't be undefined" });
    }

    const paymentInfo = await initializeFacilityPayment(
      facility.enugu_facility_id,
      facility.owner_phone_number,
      payamount,
      email,
      facility.facility_type,
      type_of_payment,
      callback_url
    );
    response.json({ data: paymentInfo, user: facility });
  } catch (error) {
    console.log(error);
  }
}

export async function verifyRenewalPaymentHandler(
  request: Request,
  response: Response
) {
  try {
    const reference = extractReferenceFromRequest(request);
    if (typeof reference !== "string") {
      throw new Error("Reference is not a string");
    }
    const paymentDetails = await verifyPayment(reference);
    const paymentStatus = paymentDetails.status;
    const paymentReference = paymentDetails.transRef;
    const enugu_facility_id = await getInsightTagValue(
      "facility_name",
      paymentDetails.metadata
    );
    const email = await getInsightTagValue("email", paymentDetails.metadata);
    const paidamount = await getInsightTagValue(
      "amount",
      paymentDetails.metadata
    );
    const phone_number = await getInsightTagValue(
      "phone_number",
      paymentDetails.metadata
    );
    const type = await getInsightTagValue("type", paymentDetails.metadata);
    const type_of_payment = await getInsightTagValue(
      "type_of_payment",
      paymentDetails.metadata
    );

    const fetchFacility = await prisma.facility.findUnique({
      where: { enugu_facility_id },
    });
    if (!fetchFacility) {
      return response.status(404).json({ message: " Facility Not Found" });
    }
    const facility_name = fetchFacility.facility_name;

    const amount = (paidamount / 100).toString();
    const expiry_date = (await renewal_expiryDate()).toString();

    const check_reference = await prisma.facility_payment.findUnique({
      where: { reference: paymentReference },
    });
    if (check_reference) {
      const check_facility = await prisma.facility.findUnique({
        where: { enugu_facility_id },
      });
      return response.status(200).json({
        message: "Renewal was Successful",
        user: check_facility,
        payment: check_reference,
      });
    }

    const payment = await prisma.facility_payment.create({
      data: {
        facility_name,
        email,
        amount,
        phone_number,
        type,
        type_of_payment,
        reference: paymentReference,
        status: "Paid",
        has_registered: true,
      },
    });

    const facility = await prisma.facility.update({
      where: { enugu_facility_id },
      data: { expiry_date },
    });

    const lga_id = parseInt(facility.lga as string);
    const lga = await prisma.local_government.findUnique({
      where: { id: lga_id },
    });

    sendRenewalFacilityEmail(
      email,
      paymentDetails,
      facility,
      paymentReference,
      facility.owner_name,
      facility.enugu_facility_id,
      facility.expiry_date
    );

    return response.status(200).json({
      message: "Renewal was Successful",
      user: facility,
      payment,
      lga,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function inspectionResult(request: Request, response: Response) {
  const id = parseInt(request.query.id as string);
  try {
    if (id == null) {
      return response.status(400).json({ message: "Facility ID is required" });
    }
    const result = await prisma.inspection_review.findFirst({
      where: { facility_id: id },
    });
    if (!result) {
      return response
        .status(404)
        .json({ message: "Inspection result does not exist" });
    }
    return response
      .status(200)
      .json({ message: "Inspection Result fetched successfully", result });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Internal Server Error" });
  }
}
