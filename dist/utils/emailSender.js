"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendApprovedFoodHandlerMail = exports.sendApprovedPersonnelMail = exports.sendRejectedInspectionMail = exports.sendApprovedInspectionMail = exports.sendAssignInspectionEmail = exports.sendResetSuccessEmail = exports.sendResetEmail = exports.sendFacilityPaymentEmail = exports.sendFoodPaymentEmail = exports.sendPaymentEmail = exports.sendFoodReceiptEmail = exports.sendPersonnelReceiptEmail = exports.sendVerificationEmail = exports.sendRenewalFacilityEmail = exports.sendRenewalFoodHandlerEmail = exports.sendRenewalEmail = exports.sendCreateSubAdminMail = exports.sendCreateEnforcerMail = exports.sendCreateInspectorMail = exports.sendWelcomeFoodMail = exports.sendWelcomeMail = exports.sendSaveAndExitMail = exports.sendCreateFacilityMail = exports.sendCompletionEmail = exports.sendReceiptEmail = void 0;
// src/utils/emailSender.ts
const nodemailer_1 = __importDefault(require("nodemailer"));
const ejs_1 = __importDefault(require("ejs"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const models_1 = require("../models");
const generateQrcode_1 = require("../services/generateQrcode");
const cloudinary_1 = require("./cloudinary");
const prisma = new models_1.PrismaClient();
const transporter = nodemailer_1.default.createTransport({
    host: process.env.MAIL_HOST || "mail.enuguhealthverify.com",
    port: 465,
    auth: {
        user: process.env.MAIL_USER || "support@enuguhealthverify.com",
        pass: process.env.MAIL_PASSWORD || "supportP@55word"
    }
});
async function sendReceiptEmail(email, paymentDetails, fullname, reference) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/receipt.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Your Health Facility Payment Was Successful!',
        html: ejs_1.default.render(template, { paymentDetails, email, fullname, reference }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendReceiptEmail = sendReceiptEmail;
async function sendCompletionEmail(email, facility, type, password) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/complete.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const url = `https://ministry-of-health-reg.netlify.app/login-page?type=${type}`;
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Facility Registration Submitted: Next Step is Physical Document Submission',
        html: ejs_1.default.render(template, { facility, email, url, password }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendCompletionEmail = sendCompletionEmail;
async function sendCreateFacilityMail(email, facility, amount) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/create_facility.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Facility Created',
        html: ejs_1.default.render(template, { facility, email, amount }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendCreateFacilityMail = sendCreateFacilityMail;
async function sendSaveAndExitMail(email, facility) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/save_and_exit.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Saved Details',
        html: ejs_1.default.render(template, { facility: facility, email: email }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendSaveAndExitMail = sendSaveAndExitMail;
async function sendWelcomeMail(email, user, password) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/welcome.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Welcome on board!',
        url: 'ministry-of-health-reg.netlify.app/personnel/login',
        html: ejs_1.default.render(template, { user: user, email: email, password: password })
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendWelcomeMail = sendWelcomeMail;
async function sendWelcomeFoodMail(email, user, password) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/welcome_food.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Welcome on board!',
        url: 'ministry-of-health-reg.netlify.app/personnel/login',
        html: ejs_1.default.render(template, { user: user, email: email, password: password }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendWelcomeFoodMail = sendWelcomeFoodMail;
async function sendCreateInspectorMail(email, inspector, password) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/inspector.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const url = "https://ministry-of-health-reg.netlify.app/inspector/login";
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Inspector Account Created',
        html: ejs_1.default.render(template, { user: inspector, email, url, password }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendCreateInspectorMail = sendCreateInspectorMail;
async function sendCreateEnforcerMail(email, enforcer, password) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/enforcer.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const url = "https://ministry-of-health-reg.netlify.app/inspector/login";
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Enforcer Account Created',
        html: ejs_1.default.render(template, { user: enforcer, email, url, password }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendCreateEnforcerMail = sendCreateEnforcerMail;
async function sendCreateSubAdminMail(email, inspector, password) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/sub_admin.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const url = "https://ministry-of-health-reg.netlify.app/admin/login";
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Admin Account Created',
        html: ejs_1.default.render(template, { user: inspector, email, url, password }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendCreateSubAdminMail = sendCreateSubAdminMail;
async function sendRenewalEmail(email, paymentDetails, user, reference, fullname, enugu_practice_id, expiry_date, passport, type) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/renewal.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const qrData = `https://ministry-of-health-reg.netlify.app/verification?type=${type}&enugu_id=${enugu_practice_id}`;
    const qrcode = await (0, generateQrcode_1.generateQRCode)(qrData, `public/static/qrcode.png`);
    const originalFilePath = "public/static/certificate.pdf";
    const originalIDFilePath = "public/static/id_card.pdf";
    const qrCodePath = "public/static/qrcode.png";
    const newFilePath = `public/static/${fullname}_certificate.pdf`;
    const newIDFilePath = `public/static/${fullname}_id_card.pdf`;
    const certificate = await (0, generateQrcode_1.makeCopyAndModifyPDF)(originalFilePath, newFilePath, qrData, qrCodePath, fullname, expiry_date, enugu_practice_id);
    const id_card = await (0, generateQrcode_1.makeIDCopyAndModifyPDF)(originalIDFilePath, newIDFilePath, qrData, qrCodePath, fullname, expiry_date, enugu_practice_id, passport);
    const upload = await (0, cloudinary_1.uploadFile)(certificate.modifiedPdfFilePath, "enugu_ministry_of_health/certificate/personnel_certificate");
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Your Renewal Payment Was Successful!',
        html: ejs_1.default.render(template, { paymentDetails, email, user, reference }),
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
            }
        ]
    };
    try {
        await transporter.sendMail(mailOptions);
        await prisma.users.update({ where: { enugu_practice_id }, data: { certificate_url: upload } });
        fs_1.default.unlink(certificate.modifiedPdfFilePath, (err) => {
            if (err) {
                console.error(`Error deleting Certificate file`);
            }
            else {
                console.log(`Certificate File deleted`);
            }
        });
        fs_1.default.unlink(id_card.modifiedPdfFilePath, (err) => {
            if (err) {
                console.error(`Error deleting Id card file`);
            }
            else {
                console.log(`ID card File deleted`);
            }
        });
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendRenewalEmail = sendRenewalEmail;
async function sendRenewalFoodHandlerEmail(email, paymentDetails, user, reference, fullname, enugu_practice_id, expiry_date, passport, type) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/renewal.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const qrData = `https://ministry-of-health-reg.netlify.app/verification?type=${type}&enugu_id=${enugu_practice_id}`;
    const qrcode = await (0, generateQrcode_1.generateQRCode)(qrData, `public/static/qrcode.png`);
    const originalFilePath = "public/static/certificate.pdf";
    const originalIDFilePath = "public/static/id_card.pdf";
    const qrCodePath = "public/static/qrcode.png";
    const newFilePath = `public/static/${fullname}_certificate.pdf`;
    const newIDFilePath = `public/static/${fullname}_id_card.pdf`;
    const certificate = await (0, generateQrcode_1.makeCopyAndModifyPDF)(originalFilePath, newFilePath, qrData, qrCodePath, fullname, expiry_date, enugu_practice_id);
    const id_card = await (0, generateQrcode_1.makeIDCopyAndModifyPDF)(originalIDFilePath, newIDFilePath, qrData, qrCodePath, fullname, expiry_date, enugu_practice_id, passport);
    const upload = await (0, cloudinary_1.uploadFile)(certificate.modifiedPdfFilePath, "enugu_ministry_of_health/certificate/food_handler_certificate");
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Your Renewal Payment Was Successful!',
        html: ejs_1.default.render(template, { paymentDetails, email, user, reference }),
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
            }
        ]
    };
    try {
        await transporter.sendMail(mailOptions);
        await prisma.food_handlers.update({ where: { enugu_handler_id: enugu_practice_id }, data: { certificate_url: upload } });
        fs_1.default.unlink(certificate.modifiedPdfFilePath, (err) => {
            if (err) {
                console.error(`Error deleting Certificate file`);
            }
            else {
                console.log(`Certificate File deleted`);
            }
        });
        fs_1.default.unlink(id_card.modifiedPdfFilePath, (err) => {
            if (err) {
                console.error(`Error deleting Id card file`);
            }
            else {
                console.log(`ID card File deleted`);
            }
        });
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendRenewalFoodHandlerEmail = sendRenewalFoodHandlerEmail;
async function sendRenewalFacilityEmail(email, paymentDetails, user, reference, facility_name, enugu_facility_id, expiry_date) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/renewal.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const qrData = `https://ministry-of-health-reg.netlify.app/verification?type=Facility&enugu_id=${enugu_facility_id}`;
    const qrcode = await (0, generateQrcode_1.generateQRCode)(qrData, `public/static/${facility_name}_qrcode.png`);
    const originalFilePath = "public/static/certificate.pdf";
    const qrCodePath = "public/static/qrcode.png";
    const newFilePath = `public/static/${facility_name}_certificate.pdf`;
    const certificate = await (0, generateQrcode_1.makeCopyAndModifyPDF)(originalFilePath, newFilePath, qrData, qrCodePath, facility_name, expiry_date, enugu_facility_id);
    const upload = await (0, cloudinary_1.uploadFile)(certificate.modifiedPdfFilePath, "enugu_ministry_of_health/certificate/facility_certificate");
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Your Renewal Payment Was Successful!',
        html: ejs_1.default.render(template, { paymentDetails, email, user, reference }),
        attachments: [
            {
                filename: `${facility_name}_certificate.pdf`, // Specify the filename
                path: certificate.modifiedPdfFilePath, // Provide the file path to the modified PDF
            },
            {
                filename: `${facility_name}.png`, // Specify the filename
                path: qrcode, // Provide the file path to the modified PDF
            }
        ],
    };
    try {
        await transporter.sendMail(mailOptions);
        await prisma.facility.update({ where: { enugu_facility_id }, data: { certificate_url: upload } });
        fs_1.default.unlink(certificate.modifiedPdfFilePath, (err) => {
            if (err) {
                console.error(`Error deleting Certificate file`);
            }
            else {
                console.log(`Certificate File deleted`);
            }
        });
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendRenewalFacilityEmail = sendRenewalFacilityEmail;
async function sendVerificationEmail(email, paymentDetails, reference) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/verification.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Your Verification Payment Was Successful!',
        html: ejs_1.default.render(template, { paymentDetails, email, reference }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendVerificationEmail = sendVerificationEmail;
async function sendPersonnelReceiptEmail(email, paymentDetails, reference) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/personnel.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Your Health Personnel Payment Was Successful!',
        html: ejs_1.default.render(template, { paymentDetails, email, reference }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendPersonnelReceiptEmail = sendPersonnelReceiptEmail;
async function sendFoodReceiptEmail(email, paymentDetails, reference) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/personnel.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Your Food Handler Payment Was Successful!',
        html: ejs_1.default.render(template, { paymentDetails, email, reference }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendFoodReceiptEmail = sendFoodReceiptEmail;
async function sendPaymentEmail(email, paymentDetails, fullname) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/send.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Thank You for Starting your Health Personnel Registering! Continue Your Registration by Making Payment',
        html: ejs_1.default.render(template, { paymentDetails, email, fullname }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendPaymentEmail = sendPaymentEmail;
async function sendFoodPaymentEmail(email, paymentDetails, fullname) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/send.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Thank You for Starting your Food Handler Registering! Continue Your Registration by Making Payment',
        html: ejs_1.default.render(template, { paymentDetails, email, fullname }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendFoodPaymentEmail = sendFoodPaymentEmail;
async function sendFacilityPaymentEmail(email, paymentDetails, fullname) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/send.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Thank You for Starting your Health Facility Registering! Continue Your Registration by Making Payment',
        html: ejs_1.default.render(template, { paymentDetails, email, fullname }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendFacilityPaymentEmail = sendFacilityPaymentEmail;
async function sendResetEmail(email, user, reset_password_token, type) {
    // Load the email template
    let templatePath;
    if (type == "facility") {
        templatePath = path_1.default.join(__dirname, '../templates/email-templates/reset_facility.ejs');
    }
    else {
        templatePath = path_1.default.join(__dirname, '../templates/email-templates/reset.ejs');
    }
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const url = `https://ministry-of-health-reg.netlify.app/reset-password?email=${email}&reset_token=${reset_password_token}&type=${type}`;
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Reset Password',
        html: ejs_1.default.render(template, { user, email, url, token: reset_password_token, type }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendResetEmail = sendResetEmail;
async function sendResetSuccessEmail(email, user, reset_password_token, type) {
    // Load the email template
    let templatePath;
    templatePath = path_1.default.join(__dirname, '../templates/email-templates/reset_success.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Reset Password Successful',
        html: ejs_1.default.render(template, { user, email, token: reset_password_token, type }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendResetSuccessEmail = sendResetSuccessEmail;
async function sendAssignInspectionEmail(email, assign, inspector, type) {
    let templatePath;
    if (type == "Facility") {
        templatePath = path_1.default.join(__dirname, '../templates/email-templates/assign_facility.ejs');
    }
    else if (type == "Inspector") {
        templatePath = path_1.default.join(__dirname, '../templates/email-templates/assign_inspector.ejs');
    }
    else {
        templatePath = path_1.default.join(__dirname, '../templates/email-templates/assign_admin.ejs');
    }
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Inspection Detail',
        html: ejs_1.default.render(template, { assign, email, inspector, type }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendAssignInspectionEmail = sendAssignInspectionEmail;
async function sendApprovedInspectionMail(email, facility, facility_name, enugu_facility_id, expiry_date, inspection) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/approve.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const qrData = `https://ministry-of-health-reg.netlify.app/verification?type=Facility&enugu_id=${enugu_facility_id}`;
    const qrcode = await (0, generateQrcode_1.generateQRCode)(qrData, `public/static/${facility_name}_qrcode.png`);
    const originalFilePath = "public/static/certificate.pdf";
    const qrCodePath = "public/static/qrcode.png";
    const newFilePath = `public/static/${facility_name}_certificate.pdf`;
    const certificate = await (0, generateQrcode_1.makeCopyAndModifyPDF)(originalFilePath, newFilePath, qrData, qrCodePath, facility_name, expiry_date, enugu_facility_id);
    const upload = await (0, cloudinary_1.uploadFile)(certificate.modifiedPdfFilePath, "enugu_ministry_of_health/certificate/facility_certificate");
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Welcome on board! Your Facility Inspection was Successful',
        html: ejs_1.default.render(template, { facility, email, upload, inspection }),
        attachments: [
            {
                filename: `${facility_name}_certificate.pdf`, // Specify the filename
                path: certificate.modifiedPdfFilePath, // Provide the file path to the modified PDF
            },
            {
                filename: `${facility_name}.png`, // Specify the filename
                path: qrcode, // Provide the file path to the modified PDF
            }
        ],
    };
    try {
        await transporter.sendMail(mailOptions);
        await prisma.facility.update({ where: { enugu_facility_id }, data: { certificate_url: upload } });
        fs_1.default.unlink(certificate.modifiedPdfFilePath, (err) => {
            if (err) {
                console.error(`Error deleting Certificate file`);
            }
            else {
                console.log(`Certificate File deleted`);
            }
        });
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendApprovedInspectionMail = sendApprovedInspectionMail;
async function sendRejectedInspectionMail(email, facility, facility_name, enugu_facility_id, expiry_date, inspection) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/reject.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Critical Update: Facility Inspection Failed',
        html: ejs_1.default.render(template, { facility, email, inspection, }),
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendRejectedInspectionMail = sendRejectedInspectionMail;
async function sendApprovedPersonnelMail(email, user, fullname, enugu_practice_id, expiry_date, passport, type) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/approve_personnel.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const qrData = `https://ministry-of-health-reg.netlify.app/verification?type=${type}&enugu_id=${enugu_practice_id}`;
    const qrcode = await (0, generateQrcode_1.generateQRCode)(qrData, `public/static/qrcode.png`);
    const originalFilePath = "public/static/certificate.pdf";
    const originalIDFilePath = "public/static/id_card.pdf";
    const qrCodePath = "public/static/qrcode.png";
    const newFilePath = `public/static/${fullname}_certificate.pdf`;
    const newIDFilePath = `public/static/${fullname}_id_card.pdf`;
    const certificate = await (0, generateQrcode_1.makeCopyAndModifyPDF)(originalFilePath, newFilePath, qrData, qrCodePath, fullname, expiry_date, enugu_practice_id);
    const id_card = await (0, generateQrcode_1.makeIDCopyAndModifyPDF)(originalIDFilePath, newIDFilePath, qrData, qrCodePath, fullname, expiry_date, enugu_practice_id, passport);
    const upload = await (0, cloudinary_1.uploadFile)(certificate.modifiedPdfFilePath, "enugu_ministry_of_health/certificate/personnel_certificate");
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Welcome on board!',
        url: 'ministry-of-health-reg.netlify.app/personnel/login',
        html: ejs_1.default.render(template, { user: user, email: email }),
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
            }
        ]
    };
    try {
        await transporter.sendMail(mailOptions);
        await prisma.users.update({ where: { enugu_practice_id }, data: { certificate_url: upload } });
        fs_1.default.unlink(certificate.modifiedPdfFilePath, (err) => {
            if (err) {
                console.error(`Error deleting Certificate file`);
            }
            else {
                console.log(`Certificate File deleted`);
            }
        });
        fs_1.default.unlink(id_card.modifiedPdfFilePath, (err) => {
            if (err) {
                console.error(`Error deleting Id card file`);
            }
            else {
                console.log(`ID card File deleted`);
            }
        });
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendApprovedPersonnelMail = sendApprovedPersonnelMail;
async function sendApprovedFoodHandlerMail(email, user, fullname, enugu_practice_id, expiry_date, passport, type) {
    // Load the email template
    const templatePath = path_1.default.join(__dirname, '../templates/email-templates/approve_food_handler.ejs');
    // Read the EJS template from the file
    const template = fs_1.default.readFileSync(templatePath, 'utf-8');
    const qrData = `https://ministry-of-health-reg.netlify.app/verification?type=${type}&enugu_id=${enugu_practice_id}`;
    const qrcode = await (0, generateQrcode_1.generateQRCode)(qrData, `public/static/qrcode.png`);
    const originalFilePath = "public/static/certificate.pdf";
    const originalIDFilePath = "public/static/id_card.pdf";
    const qrCodePath = "public/static/qrcode.png";
    const newFilePath = `public/static/${fullname}_certificate.pdf`;
    const newIDFilePath = `public/static/${fullname}_id_card.pdf`;
    const certificate = await (0, generateQrcode_1.makeCopyAndModifyPDF)(originalFilePath, newFilePath, qrData, qrCodePath, fullname, expiry_date, enugu_practice_id);
    const id_card = await (0, generateQrcode_1.makeIDCopyAndModifyPDF)(originalIDFilePath, newIDFilePath, qrData, qrCodePath, fullname, expiry_date, enugu_practice_id, passport);
    const upload = await (0, cloudinary_1.uploadFile)(certificate.modifiedPdfFilePath, "enugu_ministry_of_health/certificate/food_handler_certificate");
    const mailOptions = {
        from: 'support@enuguhealthverify.com',
        to: email,
        subject: 'Welcome on board!',
        url: 'ministry-of-health-reg.netlify.app/personnel/login',
        html: ejs_1.default.render(template, { user, email }),
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
            }
        ]
    };
    try {
        await transporter.sendMail(mailOptions);
        await prisma.food_handlers.update({ where: { enugu_handler_id: enugu_practice_id }, data: { certificate_url: upload } });
        fs_1.default.unlink(certificate.modifiedPdfFilePath, (err) => {
            if (err) {
                console.error(`Error deleting Certificate file`);
            }
            else {
                console.log(`Certificate File deleted`);
            }
        });
        fs_1.default.unlink(id_card.modifiedPdfFilePath, (err) => {
            if (err) {
                console.error(`Error deleting Id card file`);
            }
            else {
                console.log(`ID card File deleted`);
            }
        });
        console.log('Email sent successfully.');
    }
    catch (error) {
        console.error('Error sending email:', error);
    }
}
exports.sendApprovedFoodHandlerMail = sendApprovedFoodHandlerMail;
