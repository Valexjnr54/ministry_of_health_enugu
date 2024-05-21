
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.13.0
 * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
 */
Prisma.prismaVersion = {
  client: "5.13.0",
  engine: "b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AdminScalarFieldEnum = {
  id: 'id',
  fullname: 'fullname',
  username: 'username',
  email: 'email',
  role: 'role',
  profile_image: 'profile_image',
  password: 'password',
  reset_password_token: 'reset_password_token',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Inspection_reviewScalarFieldEnum = {
  id: 'id',
  facility_id: 'facility_id',
  cac: 'cac',
  owner_nin: 'owner_nin',
  services_offered: 'services_offered',
  number_of_bed: 'number_of_bed',
  source_of_water: 'source_of_water',
  method_of_disposal: 'method_of_disposal',
  site_plan: 'site_plan',
  building_plan: 'building_plan',
  compliance_certificate: 'compliance_certificate',
  tax_clearance_certificate: 'tax_clearance_certificate',
  facility_personnel_count: 'facility_personnel_count',
  facility_personnel: 'facility_personnel',
  review: 'review',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InspectorScalarFieldEnum = {
  id: 'id',
  fullname: 'fullname',
  username: 'username',
  email: 'email',
  phone_number: 'phone_number',
  address: 'address',
  role: 'role',
  lga: 'lga',
  profile_image: 'profile_image',
  password: 'password',
  reset_password_token: 'reset_password_token',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EnforcerScalarFieldEnum = {
  id: 'id',
  fullname: 'fullname',
  username: 'username',
  email: 'email',
  phone_number: 'phone_number',
  address: 'address',
  role: 'role',
  lga: 'lga',
  profile_image: 'profile_image',
  password: 'password',
  reset_password_token: 'reset_password_token',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.StateScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Local_governmentScalarFieldEnum = {
  id: 'id',
  name: 'name',
  state_id: 'state_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  fullname: 'fullname',
  email: 'email',
  phone_number: 'phone_number',
  address: 'address',
  type: 'type',
  practice_id: 'practice_id',
  practice_certificate: 'practice_certificate',
  enugu_practice_id: 'enugu_practice_id',
  specialization: 'specialization',
  nin: 'nin',
  nin_image: 'nin_image',
  lga: 'lga',
  state: 'state',
  gender: 'gender',
  expiry_date: 'expiry_date',
  nin_status: 'nin_status',
  practice_id_status: 'practice_id_status',
  status: 'status',
  passport: 'passport',
  password: 'password',
  reset_password_token: 'reset_password_token',
  certificate_url: 'certificate_url',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Food_handlersScalarFieldEnum = {
  id: 'id',
  fullname: 'fullname',
  email: 'email',
  phone_number: 'phone_number',
  address: 'address',
  enugu_handler_id: 'enugu_handler_id',
  nin: 'nin',
  nin_image: 'nin_image',
  lga: 'lga',
  state: 'state',
  gender: 'gender',
  expiry_date: 'expiry_date',
  nin_status: 'nin_status',
  status: 'status',
  passport: 'passport',
  password: 'password',
  reset_password_token: 'reset_password_token',
  certificate_url: 'certificate_url',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Personnel_paymentScalarFieldEnum = {
  id: 'id',
  fullname: 'fullname',
  email: 'email',
  amount: 'amount',
  reference: 'reference',
  phone_number: 'phone_number',
  type: 'type',
  type_of_payment: 'type_of_payment',
  status: 'status',
  has_registered: 'has_registered',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Facility_paymentScalarFieldEnum = {
  id: 'id',
  facility_name: 'facility_name',
  email: 'email',
  amount: 'amount',
  reference: 'reference',
  phone_number: 'phone_number',
  type: 'type',
  type_of_payment: 'type_of_payment',
  status: 'status',
  has_registered: 'has_registered',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Facility_complete_paymentScalarFieldEnum = {
  id: 'id',
  facility_name: 'facility_name',
  email: 'email',
  amount: 'amount',
  reference: 'reference',
  phone_number: 'phone_number',
  type: 'type',
  type_of_payment: 'type_of_payment',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.RevokedTokenScalarFieldEnum = {
  id: 'id',
  token: 'token',
  createdAt: 'createdAt'
};

exports.Prisma.FacilityScalarFieldEnum = {
  id: 'id',
  facility_name: 'facility_name',
  location: 'location',
  cac: 'cac',
  cac_image: 'cac_image',
  owner_name: 'owner_name',
  owner_phone_number: 'owner_phone_number',
  owner_contact_address: 'owner_contact_address',
  owner_nin: 'owner_nin',
  owner_nin_image: 'owner_nin_image',
  owner_passport: 'owner_passport',
  owner_email: 'owner_email',
  owner_gender: 'owner_gender',
  lga: 'lga',
  facility_sector: 'facility_sector',
  facility_type: 'facility_type',
  facility_level: 'facility_level',
  personnel_incharge: 'personnel_incharge',
  personnel_incharge_name: 'personnel_incharge_name',
  personnel_incharge_practice_id: 'personnel_incharge_practice_id',
  supervising_doctor_name: 'supervising_doctor_name',
  supervising_doctor_practice_id: 'supervising_doctor_practice_id',
  services_offered: 'services_offered',
  landmark: 'landmark',
  number_of_bed: 'number_of_bed',
  source_of_water: 'source_of_water',
  method_of_disposal: 'method_of_disposal',
  site_plan: 'site_plan',
  building_plan: 'building_plan',
  tax_clearance_certificate: 'tax_clearance_certificate',
  compliance_certificate: 'compliance_certificate',
  facility_personnel_count: 'facility_personnel_count',
  expiry_date: 'expiry_date',
  enugu_facility_id: 'enugu_facility_id',
  reference: 'reference',
  current_reference: 'current_reference',
  password: 'password',
  reset_password_token: 'reset_password_token',
  assigned_inspector: 'assigned_inspector',
  inspection_date: 'inspection_date',
  is_inspected: 'is_inspected',
  certificate_url: 'certificate_url',
  cac_status: 'cac_status',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Facility_personnelScalarFieldEnum = {
  id: 'id',
  facility_id: 'facility_id',
  user_id: 'user_id',
  enugu_practice_id: 'enugu_practice_id',
  type: 'type',
  createdAt: 'createdAt'
};

exports.Prisma.Food_facilityScalarFieldEnum = {
  id: 'id',
  facility_name: 'facility_name',
  location: 'location',
  cac: 'cac',
  cac_image: 'cac_image',
  owner_name: 'owner_name',
  owner_phone_number: 'owner_phone_number',
  owner_contact_address: 'owner_contact_address',
  owner_nin: 'owner_nin',
  owner_nin_image: 'owner_nin_image',
  owner_email: 'owner_email',
  lga: 'lga',
  landmark: 'landmark',
  source_of_water: 'source_of_water',
  method_of_disposal: 'method_of_disposal',
  category: 'category',
  facility_personnel_count: 'facility_personnel_count',
  expiry_date: 'expiry_date',
  enugu_food_facility_id: 'enugu_food_facility_id',
  reference: 'reference',
  current_reference: 'current_reference',
  password: 'password',
  reset_password_token: 'reset_password_token',
  cac_status: 'cac_status',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Food_facility_personnelScalarFieldEnum = {
  id: 'id',
  food_facility_id: 'food_facility_id',
  food_handler_id: 'food_handler_id',
  enugu_handler_id: 'enugu_handler_id',
  createdAt: 'createdAt'
};

exports.Prisma.Facility_price_listScalarFieldEnum = {
  id: 'id',
  facility_type: 'facility_type',
  number_of_beds: 'number_of_beds',
  application_fee: 'application_fee',
  application_fee_charge: 'application_fee_charge',
  first_time_reg: 'first_time_reg',
  first_time_charge: 'first_time_charge',
  renewal_fee: 'renewal_fee',
  renewal_charge: 'renewal_charge',
  verification_fee: 'verification_fee',
  verification_charge: 'verification_charge',
  certificate_fee: 'certificate_fee',
  certificate_charge: 'certificate_charge',
  inspection_fee: 'inspection_fee',
  inspection_charge: 'inspection_charge'
};

exports.Prisma.Personnel_price_listScalarFieldEnum = {
  id: 'id',
  type: 'type',
  application_fee: 'application_fee',
  application_charge: 'application_charge',
  enugu_ID_certificate: 'enugu_ID_certificate',
  certificate_charge: 'certificate_charge',
  renewal_fee: 'renewal_fee',
  renewal_charge: 'renewal_charge'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.Role = exports.$Enums.Role = {
  User: 'User',
  Inspector: 'Inspector',
  Admin: 'Admin',
  Subadmin_facility: 'Subadmin_facility',
  Subadmin_foodhandler: 'Subadmin_foodhandler',
  Subadmin_personnel: 'Subadmin_personnel',
  Enforcer: 'Enforcer'
};

exports.Status = exports.$Enums.Status = {
  Pending: 'Pending',
  Rejected: 'Rejected',
  Approved: 'Approved',
  Inactive: 'Inactive',
  Active: 'Active',
  Suspend: 'Suspend',
  Verified: 'Verified'
};

exports.Type = exports.$Enums.Type = {
  Doctor: 'Doctor',
  Nurse: 'Nurse',
  Pharmacist: 'Pharmacist',
  Radiographer: 'Radiographer',
  Mid_wife: 'Mid_wife',
  Dentist: 'Dentist',
  Lab_Scientist: 'Lab_Scientist',
  Optometrist: 'Optometrist',
  Physiotherapist: 'Physiotherapist',
  Psychiatrist: 'Psychiatrist',
  Community_health_worker: 'Community_health_worker',
  Emergency_medical_technician: 'Emergency_medical_technician',
  Other: 'Other',
  food_handler: 'food_handler'
};

exports.Sector = exports.$Enums.Sector = {
  Private_sector_non_profit: 'Private_sector_non_profit',
  Private_sector_profit: 'Private_sector_profit',
  Federal_government_agency: 'Federal_government_agency',
  State_government_agency: 'State_government_agency',
  Local_government_agency: 'Local_government_agency'
};

exports.Facility_Type = exports.$Enums.Facility_Type = {
  Specialist_hospital: 'Specialist_hospital',
  Specialist_eye_hospital: 'Specialist_eye_hospital',
  Specialist_clinic: 'Specialist_clinic',
  General_hospital: 'General_hospital',
  Outpatient_medical_clinic: 'Outpatient_medical_clinic',
  Maternity_home: 'Maternity_home',
  Grade_1_medical_lab: 'Grade_1_medical_lab',
  Grade_2_medical_lab: 'Grade_2_medical_lab',
  Grade_3_medical_lab: 'Grade_3_medical_lab',
  Grade_4_medical_lab: 'Grade_4_medical_lab',
  Dental_center: 'Dental_center',
  Dental_clinic: 'Dental_clinic',
  Eye_clinic: 'Eye_clinic',
  Eye_center: 'Eye_center',
  Xray_center: 'Xray_center',
  Physiotherapy_center: 'Physiotherapy_center',
  Radiotherapy_center: 'Radiotherapy_center',
  Mortuary: 'Mortuary',
  Ultrasound: 'Ultrasound'
};

exports.Level = exports.$Enums.Level = {
  Primary: 'Primary',
  Secondary: 'Secondary',
  Tertiary: 'Tertiary'
};

exports.Category = exports.$Enums.Category = {
  Three_star_hotel: 'Three_star_hotel',
  Regular: 'Regular',
  Motel: 'Motel',
  Fine_dining: 'Fine_dining',
  Casual_dining: 'Casual_dining',
  Cafes_and_Bistros: 'Cafes_and_Bistros',
  Buffet: 'Buffet',
  Fast_food: 'Fast_food'
};

exports.Prisma.ModelName = {
  admin: 'admin',
  inspection_review: 'inspection_review',
  inspector: 'inspector',
  enforcer: 'enforcer',
  state: 'state',
  local_government: 'local_government',
  users: 'users',
  food_handlers: 'food_handlers',
  personnel_payment: 'personnel_payment',
  facility_payment: 'facility_payment',
  facility_complete_payment: 'facility_complete_payment',
  revokedToken: 'revokedToken',
  facility: 'facility',
  facility_personnel: 'facility_personnel',
  food_facility: 'food_facility',
  food_facility_personnel: 'food_facility_personnel',
  facility_price_list: 'facility_price_list',
  personnel_price_list: 'personnel_price_list'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
