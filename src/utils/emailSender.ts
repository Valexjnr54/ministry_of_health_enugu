// src/utils/emailSender.ts
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import fs from "fs";
import { Prisma, PrismaClient, Status } from "../models";
import { Config, emailConfig } from "../config/config";
import {
  generateQRCode,
  makeCopyAndModifyPDF,
  makeIDCopyAndModifyPDF,
} from "../services/generateQrcode";
import { uploadFile } from "./cloudinary";

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST || "mail.enuguhealthverify.com",
  port: 465,
  auth: {
    user: process.env.MAIL_USER || "support@enuguhealthverify.com",
    pass: process.env.MAIL_PASSWORD || "supportP@55word",
  },
});

export async function sendReceiptEmail(
  email: string,
  paymentDetails: object,
  fullname: string,
  reference: string
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/receipt.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Your Health Facility Payment Was Successful!",
    html: ejs.render(template, { paymentDetails, email, fullname, reference }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendCompletionEmail(
  email: string,
  facility: object,
  type: string,
  password: string
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/complete.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const url = `https://enuguhealthverify.com
  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject:
      "Facility Registration Submitted: Next Step is Physical Document Submission",
    html: ejs.render(template, { facility, email, url, password }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendCreateFacilityMail(
  email: string,
  facility: object,
  amount: number
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/create_facility.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Facility Created",
    html: ejs.render(template, { facility, email, amount }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendSaveAndExitMail(email: string, facility: object) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/save_and_exit.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Saved Details",
    html: ejs.render(template, { facility: facility, email: email }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendWelcomeMail(
  email: string,
  user: object,
  password: string
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/welcome.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Welcome on board!",
    url: "ministry-of-health-reg.netlify.app/personnel/login",
    html: ejs.render(template, {
      user: user,
      email: email,
      password: password,
    }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendWelcomeFoodMail(
  email: string,
  user: object,
  password: string
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/welcome_food.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Welcome on board!",
    url: "ministry-of-health-reg.netlify.app/personnel/login",
    html: ejs.render(template, {
      user: user,
      email: email,
      password: password,
    }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendCreateInspectorMail(
  email: string,
  inspector: object,
  password: string
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/inspector.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const url = "https://enuguhealthverify.com/inspector/login";

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Inspector Account Created",
    html: ejs.render(template, { user: inspector, email, url, password }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendCreateEnforcerMail(
  email: string,
  enforcer: object,
  password: string
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/enforcer.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const url = "https://enuguhealthverify.com/inspector/login";

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Enforcer Account Created",
    html: ejs.render(template, { user: enforcer, email, url, password }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendCreateSubAdminMail(
  email: string,
  inspector: object,
  password: string
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/sub_admin.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const url = "https://enuguhealthverify.com/admin/login";

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Admin Account Created",
    html: ejs.render(template, { user: inspector, email, url, password }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendRenewalEmail(
  email: string,
  paymentDetails: object,
  user: object,
  reference: string,
  fullname: string,
  enugu_practice_id: string,
  expiry_date: string,
  passport: any,
  type: string
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/renewal.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");
  const qrData = `https://enuguhealthverify.com/choose-verification?type=${type}&enugu_id=${enugu_practice_id}`;
  const qrcode = await generateQRCode(qrData, `public/static/qrcode.png`);
  const originalFilePath = "public/static/certificate.pdf";
  const originalIDFilePath = "public/static/id_card.pdf";
  const qrCodePath = "public/static/qrcode.png";
  const newFilePath = `public/static/${fullname}_certificate.pdf`;
  const newIDFilePath = `public/static/${fullname}_id_card.pdf`;
  const certificate = await makeCopyAndModifyPDF(
    originalFilePath,
    newFilePath,
    qrData,
    qrCodePath,
    fullname,
    expiry_date,
    enugu_practice_id
  );
  const id_card = await makeIDCopyAndModifyPDF(
    originalIDFilePath,
    newIDFilePath,
    qrData,
    qrCodePath,
    fullname,
    expiry_date,
    enugu_practice_id,
    passport
  );

  const upload = await uploadFile(
    certificate.modifiedPdfFilePath,
    "enugu_ministry_of_health/certificate/personnel_certificate"
  );

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Your Renewal Payment Was Successful!",
    html: ejs.render(template, { paymentDetails, email, user, reference }),
    attachments: [
      {
        filename: `${fullname}_certificate.pdf`, // Specify the filename
        path: certificate.modifiedPdfFilePath, // Provide the file path to the modified PDF
      },
      {
        filename: `${fullname}_id_card.pdf`, // Specify the filename
        path: id_card.modifiedPdfFilePath, // Provide the file path to the modified PDF
      },
      {
        filename: `${fullname}.png`, // Specify the filename
        path: qrcode, // Provide the file path to the modified PDF
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    await prisma.users.update({
      where: { enugu_practice_id },
      data: { certificate_url: upload },
    });
    fs.unlink(certificate.modifiedPdfFilePath, (err) => {
      if (err) {
        console.error(`Error deleting Certificate file`);
      } else {
        console.log(`Certificate File deleted`);
      }
    });
    fs.unlink(id_card.modifiedPdfFilePath, (err) => {
      if (err) {
        console.error(`Error deleting Id card file`);
      } else {
        console.log(`ID card File deleted`);
      }
    });
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendRenewalFoodHandlerEmail(
  email: string,
  paymentDetails: object,
  user: object,
  reference: string,
  fullname: string,
  enugu_practice_id: string,
  expiry_date: string,
  passport: any,
  type: string
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/renewal.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");
  const qrData = `https://enuguhealthverify.com/choose-verification?type=${type}&enugu_id=${enugu_practice_id}`;
  const qrcode = await generateQRCode(qrData, `public/static/qrcode.png`);
  const originalFilePath = "public/static/certificate.pdf";
  const originalIDFilePath = "public/static/id_card.pdf";
  const qrCodePath = "public/static/qrcode.png";
  const newFilePath = `public/static/${fullname}_certificate.pdf`;
  const newIDFilePath = `public/static/${fullname}_id_card.pdf`;
  const certificate = await makeCopyAndModifyPDF(
    originalFilePath,
    newFilePath,
    qrData,
    qrCodePath,
    fullname,
    expiry_date,
    enugu_practice_id
  );
  const id_card = await makeIDCopyAndModifyPDF(
    originalIDFilePath,
    newIDFilePath,
    qrData,
    qrCodePath,
    fullname,
    expiry_date,
    enugu_practice_id,
    passport
  );
  const upload = await uploadFile(
    certificate.modifiedPdfFilePath,
    "enugu_ministry_of_health/certificate/food_handler_certificate"
  );

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Your Renewal Payment Was Successful!",
    html: ejs.render(template, { paymentDetails, email, user, reference }),
    attachments: [
      {
        filename: `${fullname}_certificate.pdf`, // Specify the filename
        path: certificate.modifiedPdfFilePath, // Provide the file path to the modified PDF
      },
      {
        filename: `${fullname}_id_card.pdf`, // Specify the filename
        path: id_card.modifiedPdfFilePath, // Provide the file path to the modified PDF
      },
      {
        filename: `${fullname}.png`, // Specify the filename
        path: qrcode, // Provide the file path to the modified PDF
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    await prisma.food_handlers.update({
      where: { enugu_handler_id: enugu_practice_id },
      data: { certificate_url: upload },
    });
    fs.unlink(certificate.modifiedPdfFilePath, (err) => {
      if (err) {
        console.error(`Error deleting Certificate file`);
      } else {
        console.log(`Certificate File deleted`);
      }
    });
    fs.unlink(id_card.modifiedPdfFilePath, (err) => {
      if (err) {
        console.error(`Error deleting Id card file`);
      } else {
        console.log(`ID card File deleted`);
      }
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendRenewalFacilityEmail(
  email: string,
  paymentDetails: object,
  user: object,
  reference: string,
  facility_name: string,
  enugu_facility_id: string,
  expiry_date: any
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/renewal.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");
  const qrData = `https://enuguhealthverify.com/choose-verification?type=Facility&enugu_id=${enugu_facility_id}`;
  const qrcode = await generateQRCode(
    qrData,
    `public/static/${facility_name}_qrcode.png`
  );
  const originalFilePath = "public/static/certificate.pdf";
  const qrCodePath = "public/static/qrcode.png";
  const newFilePath = `public/static/${facility_name}_certificate.pdf`;
  const certificate = await makeCopyAndModifyPDF(
    originalFilePath,
    newFilePath,
    qrData,
    qrCodePath,
    facility_name,
    expiry_date,
    enugu_facility_id
  );

  const upload = await uploadFile(
    certificate.modifiedPdfFilePath,
    "enugu_ministry_of_health/certificate/facility_certificate"
  );

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Your Renewal Payment Was Successful!",
    html: ejs.render(template, { paymentDetails, email, user, reference }),
    attachments: [
      {
        filename: `${facility_name}_certificate.pdf`, // Specify the filename
        path: certificate.modifiedPdfFilePath, // Provide the file path to the modified PDF
      },
      {
        filename: `${facility_name}.png`, // Specify the filename
        path: qrcode, // Provide the file path to the modified PDF
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    await prisma.facility.update({
      where: { enugu_facility_id },
      data: { certificate_url: upload },
    });
    fs.unlink(certificate.modifiedPdfFilePath, (err) => {
      if (err) {
        console.error(`Error deleting Certificate file`);
      } else {
        console.log(`Certificate File deleted`);
      }
    });
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendVerificationEmail(
  email: string,
  paymentDetails: object,
  reference: string
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/verification.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Your Verification Payment Was Successful!",
    html: ejs.render(template, { paymentDetails, email, reference }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendPersonnelReceiptEmail(
  email: string,
  paymentDetails: object,
  reference: string
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/personnel.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Your Health Personnel Payment Was Successful!",
    html: ejs.render(template, { paymentDetails, email, reference }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendFoodReceiptEmail(
  email: string,
  paymentDetails: object,
  reference: string
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/personnel.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Your Food Handler Payment Was Successful!",
    html: ejs.render(template, { paymentDetails, email, reference }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendPaymentEmail(
  email: string,
  paymentDetails: object,
  fullname: string
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/send.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject:
      "Thank You for Starting your Health Personnel Registering! Continue Your Registration by Making Payment",
    html: ejs.render(template, { paymentDetails, email, fullname }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendFoodPaymentEmail(
  email: string,
  paymentDetails: object,
  fullname: string
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/send.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject:
      "Thank You for Starting your Food Handler Registering! Continue Your Registration by Making Payment",
    html: ejs.render(template, { paymentDetails, email, fullname }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendFacilityPaymentEmail(
  email: string,
  paymentDetails: object,
  fullname: string
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/send.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject:
      "Thank You for Starting your Health Facility Registering! Continue Your Registration by Making Payment",
    html: ejs.render(template, { paymentDetails, email, fullname }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendResetEmail(
  email: string,
  user: object,
  reset_password_token: string,
  type: string
) {
  // Load the email template
  let templatePath;
  if (type == "facility") {
    templatePath = path.join(
      __dirname,
      "../templates/email-templates/reset_facility.ejs"
    );
  } else {
    templatePath = path.join(
      __dirname,
      "../templates/email-templates/reset.ejs"
    );
  }
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const url = `https://enuguhealthverify.com/reset-password?email=${email}&reset_token=${reset_password_token}&type=${type}`;

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Reset Password",
    html: ejs.render(template, {
      user,
      email,
      url,
      token: reset_password_token,
      type,
    }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendResetSuccessEmail(
  email: string,
  user: object,
  reset_password_token: string,
  type: string
) {
  // Load the email template
  let templatePath;
  templatePath = path.join(
    __dirname,
    "../templates/email-templates/reset_success.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Reset Password Successful",
    html: ejs.render(template, {
      user,
      email,
      token: reset_password_token,
      type,
    }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendAssignInspectionEmail(
  email: string,
  assign: object,
  inspector: object,
  type: string
) {
  let templatePath;
  if (type == "Facility") {
    templatePath = path.join(
      __dirname,
      "../templates/email-templates/assign_facility.ejs"
    );
  } else if (type == "Inspector") {
    templatePath = path.join(
      __dirname,
      "../templates/email-templates/assign_inspector.ejs"
    );
  } else {
    templatePath = path.join(
      __dirname,
      "../templates/email-templates/assign_admin.ejs"
    );
  }
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Inspection Detail",
    html: ejs.render(template, { assign, email, inspector, type }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendApprovedInspectionMail(
  email: string,
  facility: object,
  facility_name: string,
  enugu_facility_id: string,
  expiry_date: any,
  inspection: object
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/approve.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const qrData = `https://enuguhealthverify.com/choose-verification?type=Facility&enugu_id=${enugu_facility_id}`;
  const qrcode = await generateQRCode(
    qrData,
    `public/static/${facility_name}_qrcode.png`
  );
  const originalFilePath = "public/static/certificate.pdf";
  const qrCodePath = "public/static/qrcode.png";
  const newFilePath = `public/static/${facility_name}_certificate.pdf`;
  const certificate = await makeCopyAndModifyPDF(
    originalFilePath,
    newFilePath,
    qrData,
    qrCodePath,
    facility_name,
    expiry_date,
    enugu_facility_id
  );

  const upload = await uploadFile(
    certificate.modifiedPdfFilePath,
    "enugu_ministry_of_health/certificate/facility_certificate"
  );

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Welcome on board! Your Facility Inspection was Successful",
    html: ejs.render(template, { facility, email, upload, inspection }),
    attachments: [
      {
        filename: `${facility_name}_certificate.pdf`, // Specify the filename
        path: certificate.modifiedPdfFilePath, // Provide the file path to the modified PDF
      },
      {
        filename: `${facility_name}.png`, // Specify the filename
        path: qrcode, // Provide the file path to the modified PDF
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    await prisma.facility.update({
      where: { enugu_facility_id },
      data: { certificate_url: upload },
    });
    fs.unlink(certificate.modifiedPdfFilePath, (err) => {
      if (err) {
        console.error(`Error deleting Certificate file`);
      } else {
        console.log(`Certificate File deleted`);
      }
    });
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendRejectedInspectionMail(
  email: string,
  facility: object,
  facility_name: string,
  enugu_facility_id: string,
  expiry_date: any,
  inspection: object
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/reject.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Critical Update: Facility Inspection Failed",
    html: ejs.render(template, { facility, email, inspection }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendApprovedPersonnelMail(
  email: string,
  user: object,
  fullname: string,
  enugu_practice_id: string,
  expiry_date: string,
  passport: any,
  type: string
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/approve_personnel.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");
  const qrData = `https://enuguhealthverify.com/choose-verification?type=${type}&enugu_id=${enugu_practice_id}`;
  const qrcode = await generateQRCode(qrData, `public/static/qrcode.png`);
  const originalFilePath = "public/static/certificate.pdf";
  const originalIDFilePath = "public/static/id_card.pdf";
  const qrCodePath = "public/static/qrcode.png";
  const newFilePath = `public/static/${fullname}_certificate.pdf`;
  const newIDFilePath = `public/static/${fullname}_id_card.pdf`;
  const certificate = await makeCopyAndModifyPDF(
    originalFilePath,
    newFilePath,
    qrData,
    qrCodePath,
    fullname,
    expiry_date,
    enugu_practice_id
  );
  const id_card = await makeIDCopyAndModifyPDF(
    originalIDFilePath,
    newIDFilePath,
    qrData,
    qrCodePath,
    fullname,
    expiry_date,
    enugu_practice_id,
    passport
  );

  const upload = await uploadFile(
    certificate.modifiedPdfFilePath,
    "enugu_ministry_of_health/certificate/personnel_certificate"
  );

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Welcome on board!",
    url: "ministry-of-health-reg.netlify.app/personnel/login",
    html: ejs.render(template, { user: user, email: email }),
    attachments: [
      {
        filename: `${fullname}_certificate.pdf`, // Specify the filename
        path: certificate.modifiedPdfFilePath, // Provide the file path to the modified PDF
      },
      {
        filename: `${fullname}_id_card.pdf`, // Specify the filename
        path: id_card.modifiedPdfFilePath, // Provide the file path to the modified PDF
      },
      {
        filename: `${fullname}.png`, // Specify the filename
        path: qrcode, // Provide the file path to the modified PDF
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    await prisma.users.update({
      where: { enugu_practice_id },
      data: { certificate_url: upload },
    });
    fs.unlink(certificate.modifiedPdfFilePath, (err) => {
      if (err) {
        console.error(`Error deleting Certificate file`);
      } else {
        console.log(`Certificate File deleted`);
      }
    });
    fs.unlink(id_card.modifiedPdfFilePath, (err) => {
      if (err) {
        console.error(`Error deleting Id card file`);
      } else {
        console.log(`ID card File deleted`);
      }
    });
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export async function sendApprovedFoodHandlerMail(
  email: string,
  user: object,
  fullname: string,
  enugu_practice_id: string,
  expiry_date: string,
  passport: any,
  type: string
) {
  // Load the email template
  const templatePath = path.join(
    __dirname,
    "../templates/email-templates/approve_food_handler.ejs"
  );
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, "utf-8");
  const qrData = `https://enuguhealthverify.com/choose-verification?type=${type}&enugu_id=${enugu_practice_id}`;
  const qrcode = await generateQRCode(qrData, `public/static/qrcode.png`);
  const originalFilePath = "public/static/certificate.pdf";
  const originalIDFilePath = "public/static/id_card.pdf";
  const qrCodePath = "public/static/qrcode.png";
  const newFilePath = `public/static/${fullname}_certificate.pdf`;
  const newIDFilePath = `public/static/${fullname}_id_card.pdf`;
  const certificate = await makeCopyAndModifyPDF(
    originalFilePath,
    newFilePath,
    qrData,
    qrCodePath,
    fullname,
    expiry_date,
    enugu_practice_id
  );
  const id_card = await makeIDCopyAndModifyPDF(
    originalIDFilePath,
    newIDFilePath,
    qrData,
    qrCodePath,
    fullname,
    expiry_date,
    enugu_practice_id,
    passport
  );
  const upload = await uploadFile(
    certificate.modifiedPdfFilePath,
    "enugu_ministry_of_health/certificate/food_handler_certificate"
  );

  const mailOptions = {
    from: "support@enuguhealthverify.com",
    to: email,
    subject: "Welcome on board!",
    url: "ministry-of-health-reg.netlify.app/personnel/login",
    html: ejs.render(template, { user, email }),
    attachments: [
      {
        filename: `${fullname}_certificate.pdf`, // Specify the filename
        path: certificate.modifiedPdfFilePath, // Provide the file path to the modified PDF
      },
      {
        filename: `${fullname}_id_card.pdf`, // Specify the filename
        path: id_card.modifiedPdfFilePath, // Provide the file path to the modified PDF
      },
      {
        filename: `${fullname}.png`, // Specify the filename
        path: qrcode, // Provide the file path to the modified PDF
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    await prisma.food_handlers.update({
      where: { enugu_handler_id: enugu_practice_id },
      data: { certificate_url: upload },
    });
    fs.unlink(certificate.modifiedPdfFilePath, (err) => {
      if (err) {
        console.error(`Error deleting Certificate file`);
      } else {
        console.log(`Certificate File deleted`);
      }
    });
    fs.unlink(id_card.modifiedPdfFilePath, (err) => {
      if (err) {
        console.error(`Error deleting Id card file`);
      } else {
        console.log(`ID card File deleted`);
      }
    });
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
