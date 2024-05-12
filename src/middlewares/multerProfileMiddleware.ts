import multer from 'multer';
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/uploads/'); // Set the destination folder for uploads
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + '-' + file.originalname); // Set the filename
  },
});

  export const upload = multer({ storage: storage });

  export const facilityCredentials = upload.fields([
    { name: 'site_plan', maxCount: 1 },
    { name: 'building_plan', maxCount: 1 },
    { name: 'tax_clearance_certificate', maxCount: 1 },
    // { name: 'compliance_certificate', maxCount: 1 },
    { name: 'owner_passport', maxCount: 1 },
    // { name: 'owner_nin_image', maxCount: 1 },
    { name: 'cac_image', maxCount: 1 },
  ]);

  export const foodfacilityCredentials = upload.fields([
    // { name: 'owner_nin_image', maxCount: 1 },
    { name: 'cac_image', maxCount: 1 },
  ]);

  export const personnelCredentials = upload.fields([
    // { name: 'nin_image', maxCount: 1 },
    { name: 'practice_certificate', maxCount: 1 },
    { name: 'passport', maxCount: 1 },
  ]);

  export const foodpersonnelCredentials = upload.fields([
    // { name: 'nin_image', maxCount: 1 },
    { name: 'passport', maxCount: 1 },
  ]);

  export const subAdminCredentials = upload.fields([
    { name: 'profile_image', maxCount: 1 },
  ]);
//   module.exports = upload;