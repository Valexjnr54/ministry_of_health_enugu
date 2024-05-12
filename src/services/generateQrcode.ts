import * as qrcode from 'qrcode';
import * as fs from 'fs';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import axios from 'axios';
import sharp from 'sharp';

export async function generateQRCode(data: string, filePath: string): Promise<string> {
    try {
        // Generate QR code
        const qrCodeDataURI = await qrcode.toDataURL(data);

        // Convert data URI to buffer
        const buffer = Buffer.from(qrCodeDataURI.split(',')[1], 'base64');

        // Write buffer to file
        fs.writeFileSync(filePath, buffer);

        console.log('QR code generated successfully at', filePath);
        return filePath; // Return file path
    } catch (error) {
        console.error('Error generating QR code:', error);
        throw error; // Re-throw error to handle it elsewhere if needed
    }
}

async function appendQRCodeToPDF(qrCodeImagePath: string, name: string, expiry_date: string, ID: string, pdfPath: string): Promise<void> {
    try {
        // Read existing PDF
        const pdfBytes = fs.readFileSync(pdfPath);

        // Load PDF
        const pdfDoc = await PDFDocument.load(pdfBytes);

        // Load QR code image
        const qrCodeImageBytes = fs.readFileSync(qrCodeImagePath);

        // Embed QR code image
        const qrCodeImage = await pdfDoc.embedPng(qrCodeImageBytes);

        // Add QR code image to the first page of the PDF
        const page = pdfDoc.getPages()[0];

        // Define the scale factor to reduce the size of the QR code
        const scaleFactor = 0.2; // Adjust this value as needed

        // Calculate the scaled dimensions of the QR code
        const qrCodeDims = qrCodeImage.scale(scaleFactor);

        // Calculate the coordinates for positioning the QR code
        const qrCodeX = 8; // Adjust padding from the left edge
        const qrCodeY = page.getSize().height - qrCodeDims.height - 6; // Adjust padding from the top edge

        // Draw the scaled QR code image on the page
        page.drawImage(qrCodeImage, {
            x: qrCodeX,
            y: qrCodeY,
            width: qrCodeDims.width,
            height: qrCodeDims.height,
        });

        // Embed the font (Helvetica) into the PDF document
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

        // Add name text at the center
        const nameX = (page.getWidth() - helveticaFont.widthOfTextAtSize(name, 12)) / 2;
        const nameY = page.getSize().height / 2;
        page.drawText(name, {
            x: nameX,
            y: nameY - 8,
            size: 12, // Adjust font size as needed
            font: await pdfDoc.embedFont(StandardFonts.Helvetica), // Change font here
        });

        // Add expiry_date text at the bottom left
        const expiryDateX = 15; // Adjust padding from the left edge
        const expiryDateY = 8; // Adjust padding from the bottom edge
        page.drawText(expiry_date, {
            x: expiryDateX,
            y: expiryDateY,
            size: 5, // Adjust font size as needed
            font: await pdfDoc.embedFont(StandardFonts.Helvetica), // Change font here
            color: rgb(1, 1, 1)
        });

        // Add ID text at the bottom right
        const IDX = page.getSize().width - helveticaFont.widthOfTextAtSize(ID, 10) - -20; // Adjust padding from the right edge
        const IDY = 8; // Adjust padding from the bottom edge
        page.drawText(ID, {
            x: IDX,
            y: IDY,
            size: 5, // Adjust font size as needed
            font: await pdfDoc.embedFont(StandardFonts.Helvetica), // Change font here
            color: rgb(1, 1, 1) // Red color
        });

        // Save the modified PDF
        const modifiedPdfBytes = await pdfDoc.save();
        fs.writeFileSync(pdfPath, modifiedPdfBytes);

        console.log('QR code and text appended to PDF successfully');
    } catch (error) {
        console.error('Error appending QR code and text to PDF:', error);
        throw error;
    }
}

// async function appendIDToPDF(qrCodeImagePath: string, name: string, expiry_date: string, ID: string,passport:string, pdfPath: string): Promise<void> {
//     try {
//         // Read existing PDF
//         const pdfBytes = fs.readFileSync(pdfPath);

//         // Load PDF
//         const pdfDoc = await PDFDocument.load(pdfBytes);

//         // Load QR code image
//         const qrCodeImageBytes = fs.readFileSync(qrCodeImagePath);
        

//         // Embed QR code image
//         const qrCodeImage = await pdfDoc.embedPng(qrCodeImageBytes);

//         // Add QR code image to the first page of the PDF
//         const page = pdfDoc.getPages()[0];

//         // Define the scale factor to reduce the size of the QR code
//         const scaleFactor = 0.32; // Adjust this value as needed

//         // Calculate the scaled dimensions of the QR code
//         const qrCodeDims = qrCodeImage.scale(scaleFactor);

//         // Calculate the coordinates for positioning the QR code
//         const qrCodeX = 56; // Adjust padding from the left edge
//         const qrCodeY = page.getSize().height - qrCodeDims.height - 190; // Adjust padding from the top edge

//         // Draw the scaled QR code image on the page
//         page.drawImage(qrCodeImage, {
//             x: qrCodeX,
//             y: qrCodeY,
//             width: qrCodeDims.width,
//             height: qrCodeDims.height,
//         });

        

//         // Embed the font (Helvetica) into the PDF document
//         const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

//         // Add name text at the center
//         const nameX = (page.getWidth() - helveticaFont.widthOfTextAtSize(name, 12)) / 2;
//         const nameY = page.getSize().height / 2;
//         page.drawText(name, {
//             x: nameX,
//             y: nameY - 8,
//             size: 12, // Adjust font size as needed
//             font: await pdfDoc.embedFont(StandardFonts.Helvetica), // Change font here
//         });

//         // Add expiry_date text at the bottom left
//         const expiryDateX = 50; // Adjust padding from the left edge
//         const expiryDateY = -800; // Adjust padding from the bottom edge
//         page.drawText(expiry_date, {
//             x: expiryDateX,
//             y: expiryDateY,
//             size: 5, // Adjust font size as needed
//             font: await pdfDoc.embedFont(StandardFonts.Helvetica), // Change font here
//             // color: rgb(1, 1, 1)
//         });

//         // Add ID text at the bottom right
//         const IDX = page.getSize().width - helveticaFont.widthOfTextAtSize(ID, 10) - 50; // Adjust padding from the right edge
//         const IDY = 90; // Adjust padding from the bottom edge
//         page.drawText(ID, {
//             x: IDX,
//             y: IDY,
//             size: 10, // Adjust font size as needed
//             font: await pdfDoc.embedFont(StandardFonts.Helvetica), // Change font here
//             // color: rgb(1, 1, 1) // Red color
//         });

//         // Save the modified PDF
//         const modifiedPdfBytes = await pdfDoc.save();
//         fs.writeFileSync(pdfPath, modifiedPdfBytes);

//         console.log('QR code and text appended to PDF successfully');
//     } catch (error) {
//         console.error('Error appending QR code and text to PDF:', error);
//         throw error;
//     }
// }

// async function appendIDToPDF(qrCodeImagePath: string, name: string, expiry_date: string, ID: string, passport: string, pdfPath: string): Promise<void> {
//     try {
//         // Read existing PDF
//         const pdfBytes = fs.readFileSync(pdfPath);

//         // Load PDF
//         const pdfDoc = await PDFDocument.load(pdfBytes);

//         // Check if there are enough pages, if not, create a new one
//         let pages = pdfDoc.getPages();
//         const page = pages[0];
//         let secondPage = pages.length > 1 ? pages[1] : pdfDoc.addPage();

//         // Load QR code image
//         const qrCodeImageBytes = fs.readFileSync(qrCodeImagePath);
//         const qrCodeImage = await pdfDoc.embedPng(qrCodeImageBytes);

//         // Define scale factor and dimensions for QR code
//         const scaleFactor = 0.32;
//         const qrCodeDims = qrCodeImage.scale(scaleFactor);
//         const qrCodeX = 56;
//         const qrCodeY = page.getSize().height - qrCodeDims.height - 190;

//         // Draw the QR code image on the first page
//         page.drawImage(qrCodeImage, {
//             x: qrCodeX,
//             y: qrCodeY,
//             width: qrCodeDims.width,
//             height: qrCodeDims.height,
//         });

//         // Embed the font (Helvetica) into the PDF document
//         const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

//         // Add name text at the center of the first page
//         const nameX = (page.getWidth() - helveticaFont.widthOfTextAtSize(name, 12)) / 2;
//         const nameY = page.getSize().height / 2;
//         page.drawText(name, {
//             x: nameX,
//             y: nameY - 8,
//             size: 12,
//             font: helveticaFont,
//         });

//         // Draw the expiry date text on the second page
//         const expiryDateX = 50;
//         const expiryDateY = secondPage.getSize().height - 100; // Adjust according to your layout needs
//         secondPage.drawText(expiry_date, {
//             x: expiryDateX,
//             y: expiryDateY,
//             size: 12,
//             font: helveticaFont,
//         });

//         // Draw the passport number
//         const passportX = page.getWidth() - helveticaFont.widthOfTextAtSize(passport, 10) - 50;
//         const passportY = 50; // Adjust according to your layout needs
//         page.drawText(passport, {
//             x: passportX,
//             y: passportY,
//             size: 10,
//             font: helveticaFont,
//         });

//         // Save the modified PDF
//         const modifiedPdfBytes = await pdfDoc.save();
//         fs.writeFileSync(pdfPath, modifiedPdfBytes);

//         console.log('QR code, text, and additional details appended to PDF successfully');
//     } catch (error) {
//         console.error('Error appending details to PDF:', error);
//         throw error;
//     }
// }

// async function appendIDToPDF(qrCodeImagePath:string, name:string, expiry_date:string, ID:string, passportImageUrl:string, pdfPath:string) {
//     try {
//         // Read existing PDF
//         const pdfBytes = fs.readFileSync(pdfPath);

//         // Load PDF
//         const pdfDoc = await PDFDocument.load(pdfBytes);

//         // Load QR code image
//         const qrCodeImageBytes = fs.readFileSync(qrCodeImagePath);
//         const qrCodeImage = await pdfDoc.embedPng(qrCodeImageBytes);

//         // Define scale factor and dimensions for QR code
//         const scaleFactor = 0.32;
//         const qrCodeDims = qrCodeImage.scale(scaleFactor);
//         const qrCodeX = 56;
//         const qrCodeY = pdfDoc.getPages()[0].getSize().height - qrCodeDims.height - 190;

//         // Draw the QR code image on the first page
//         const page = pdfDoc.getPages()[0];
//         page.drawImage(qrCodeImage, {
//             x: qrCodeX,
//             y: qrCodeY,
//             width: qrCodeDims.width,
//             height: qrCodeDims.height,
//         });

//         // Embed the font (Helvetica)
//         const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

//         // Add name text at the center
//         const nameX = (page.getWidth() - helveticaFont.widthOfTextAtSize(name, 12)) / 2;
//         const nameY = page.getSize().height / 2;
//         page.drawText(name, {
//             x: nameX,
//             y: nameY - 8,
//             size: 12,
//             font: helveticaFont,
//         });

//         // Download and embed the passport image
//         const response = await axios.get(passportImageUrl, { responseType: 'arraybuffer' });
//         const passportImageBytes = await sharp(Buffer.from(response.data))
//             .png()
//             .toBuffer();
//         const passportImage = await pdfDoc.embedPng(passportImageBytes);

//         // Draw the passport image
//         const passportX = 50; // Adjust position as needed
//         const passportY = 100; // Adjust position as needed
//         const passportDims = passportImage.scale(1); // Scale if needed
//         page.drawImage(passportImage, {
//             x: passportX,
//             y: passportY,
//             width: passportDims.width,
//             height: passportDims.height,
//         });

//         // Draw the expiry date text on a new page
//         const secondPage = pdfDoc.getPages()[1];
//         const expiryDateX = 60;
//         const expiryDateY = secondPage.getSize().height - 230;
//         secondPage.drawText(expiry_date, {
//             x: expiryDateX,
//             y: expiryDateY,
//             size: 12,
//             font: helveticaFont,
//         });

//         // Save the modified PDF
//         const modifiedPdfBytes = await pdfDoc.save();
//         fs.writeFileSync(pdfPath, modifiedPdfBytes);

//         console.log('QR code, text, passport image, and expiry date appended to PDF successfully');
//     } catch (error) {
//         console.error('Error appending data to PDF:', error);
//         throw error;
//     }
// }

async function appendIDToPDF(qrCodeImagePath:string, name:string, expiry_date:string, ID:string, passportImageUrl:string, pdfPath:string) {
    try {
        // Read existing PDF
        const pdfBytes = fs.readFileSync(pdfPath);

        // Load PDF
        const pdfDoc = await PDFDocument.load(pdfBytes);

        // Load QR code image
        const qrCodeImageBytes = fs.readFileSync(qrCodeImagePath);
        const qrCodeImage = await pdfDoc.embedPng(qrCodeImageBytes);

        // Define scale factor and dimensions for QR code
        const scaleFactor = 0.32;
        const qrCodeDims = qrCodeImage.scale(scaleFactor);
        const qrCodeX = 54;
        const qrCodeY = pdfDoc.getPages()[0].getSize().height - qrCodeDims.height - 190;

        // Draw the QR code image on the first page
        const page = pdfDoc.getPages()[0];
        page.drawImage(qrCodeImage, {
            x: qrCodeX,
            y: qrCodeY,
            width: qrCodeDims.width,
            height: qrCodeDims.height,
        });

        // Embed the font (Helvetica)
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

        // Add name text at the center
        const nameX = (page.getWidth() - helveticaFont.widthOfTextAtSize(name, 12)) / 2;
        const nameY = page.getSize().height / 2;
        page.drawText(name, {
            x: nameX,
            y: nameY - 8,
            size: 12,
            font: helveticaFont,
        });

        // Download and prepare the passport image
        const response = await axios.get(passportImageUrl, { responseType: 'arraybuffer' });
        const passportImageBuffer = Buffer.from(response.data);
        const passportImageBytes = await sharp(passportImageBuffer)
            .resize(100, 100) // Adjust the size here for a larger image
            .composite([{ // Create a circular mask
                input: Buffer.from(
                    '<svg><rect x="0" y="0" width="100" height="100" rx="50" ry="50"/></svg>',
                    'utf-8'
                ),
                blend: 'dest-in'
            }])
            .png()
            .toBuffer();
        const passportImage = await pdfDoc.embedPng(passportImageBytes);

        // Calculate center position for the passport image
        const passportX = (page.getWidth() - 69) / 2; // Adjusted for new image size
        const passportY = (page.getSize().height + 53) / 2; // Adjusted for new image size

        // Draw the passport image centered on the page
        page.drawImage(passportImage, {
            x: passportX,
            y: passportY,
            width: 60,
            height: 60,
        });

        // Ensure there is a second page and draw the expiry date text
        const secondPage = pdfDoc.getPages().length > 1 ? pdfDoc.getPages()[1] : pdfDoc.addPage();
        const expiryDateX = 60;
        const expiryDateY = secondPage.getSize().height - 230;
        secondPage.drawText(expiry_date, {
            x: expiryDateX,
            y: expiryDateY,
            size: 12,
            font: helveticaFont,
        });

        // Add ID text at the bottom right
        const IDX = page.getSize().width - helveticaFont.widthOfTextAtSize(ID, 10) - 50; // Adjust padding from the right edge
        const IDY = 90; // Adjust padding from the bottom edge
        page.drawText(ID, {
            x: IDX,
            y: IDY,
            size: 10, // Adjust font size as needed
            font: await pdfDoc.embedFont(StandardFonts.Helvetica), // Change font here
            // color: rgb(1, 1, 1) // Red color
        });

        // Save the modified PDF
        const modifiedPdfBytes = await pdfDoc.save();
        fs.writeFileSync(pdfPath, modifiedPdfBytes);

        console.log('QR code, text, passport image, and expiry date appended to PDF successfully');
    } catch (error) {
        console.error('Error appending data to PDF:', error);
        throw error;
    }
}

export async function makeCopyAndModifyPDF(originalFilePath: string, newFilePath: string, qrCodeData: string, qrCodePath: string, name: string, expiry_date: string, ID: string): Promise<{ modifiedPdfBytes: Uint8Array, modifiedPdfFilePath: string }> {
    try {
        // Read the contents of the original PDF file
        const pdfBytes = fs.readFileSync(originalFilePath);

        // Write the contents to a new file with a different name
        fs.writeFileSync(newFilePath, pdfBytes);

        console.log('Copied original PDF to', newFilePath);

        // Generate QR code and append to PDF
        const qrCodeImagePath = await generateQRCode(qrCodeData, qrCodePath);
        await appendQRCodeToPDF(qrCodeImagePath, name, expiry_date, ID, newFilePath);

        console.log('Modified PDF created successfully');

        // Return both modified PDF bytes and file path
        const modifiedPdfBytes = fs.readFileSync(newFilePath);
        return { modifiedPdfBytes, modifiedPdfFilePath: newFilePath };
    } catch (error) {
        console.error('Error making copy and modifying PDF:', error);
        throw error;
    }
}

export async function makeIDCopyAndModifyPDF(originalFilePath: string, newFilePath: string, qrCodeData: string, qrCodePath: string, name: string, expiry_date: string, ID: string, passport:string): Promise<{ modifiedPdfBytes: Uint8Array, modifiedPdfFilePath: string }> {
    try {
        // Read the contents of the original PDF file
        const pdfBytes = fs.readFileSync(originalFilePath);

        // Write the contents to a new file with a different name
        fs.writeFileSync(newFilePath, pdfBytes);

        console.log('Copied original PDF to', newFilePath);

        // Generate QR code and append to PDF
        const qrCodeImagePath = await generateQRCode(qrCodeData, qrCodePath);
        await appendIDToPDF(qrCodeImagePath, name, expiry_date, ID, passport, newFilePath);

        console.log('Modified ID created successfully');

        // Return both modified PDF bytes and file path
        const modifiedPdfBytes = fs.readFileSync(newFilePath);
        return { modifiedPdfBytes, modifiedPdfFilePath: newFilePath };
    } catch (error) {
        console.error('Error making copy and modifying PDF:', error);
        throw error;
    }
}

// Example usage
const originalFilePath = 'example.pdf'; // Replace with the path to your original PDF file
const newFilePath = 'modified_example.pdf'; // Replace with the desired name for the new PDF file
const qrCodeData = 'https://example.com'; // Replace with your QR code data
const name = 'Valex James';
const expiry_date = '2024-06-14';
const ID = 'EN/DO/123456';

// makeCopyAndModifyPDF(originalFilePath, newFilePath, qrCodeData, name, expiry_date, ID)
//     .catch(error => console.error('Error:', error));
