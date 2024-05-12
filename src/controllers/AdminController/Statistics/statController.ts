import { Request, Response } from 'express';
import { Prisma, PrismaClient } from '../../../models';

const prisma = new PrismaClient();

async function countUsersByType() {
    const enumCounts = await prisma.users.groupBy({
      by: ['type'],
      _count: {
        type: true
      }
    });
    
    return enumCounts;
}

async function countFacilitiesByType() {
    const typeCounts = await prisma.facility.groupBy({
      by: ['facility_type'],
      _count: {
        facility_type: true
      }
    });
    
    return typeCounts;
}

async function countFacilities() {
    const facilityCounts = await prisma.facility.count()
    return facilityCounts
}

async function countPersonnels() {
    const userCounts = await prisma.users.count()
    return userCounts
}

async function countFoodFacilities() {
  const facilityFoodCounts = await prisma.food_facility.count()
  return facilityFoodCounts
}

async function countFoodPersonnels() {
  const userFoodCounts = await prisma.food_handlers.count()
  return userFoodCounts
}

async function countVerification() {
  const userFoodCounts = await prisma.personnel_payment.count({ where:{type_of_payment:"Payment for Health Personnel Verification", status:"Paid"}})
  return userFoodCounts
}

async function countFoodVerification() {
  const userFoodCounts = await prisma.personnel_payment.count({ where:{type_of_payment:"Payment for Food Handler Personnel Verification", status:"Paid"}})
  return userFoodCounts
}

async function countRenewal() {
  const userFoodCounts = await prisma.personnel_payment.count({ where:{type_of_payment:"Renewal Payment of Health Care Personnel", status:"Paid"}})
  return userFoodCounts
}

async function countFoodRenewal() {
  const userFoodCounts = await prisma.personnel_payment.count({ where:{type_of_payment:"Renewal Payment of Food Handler", status:"Paid"}})
  return userFoodCounts
}

async function countRegistration() {
  const userFoodCounts = await prisma.personnel_payment.count({ where:{type_of_payment:"Registration Payment of Health Care Personnel", status:"Paid"}})
  return userFoodCounts
}

async function countFoodRegistration() {
  const userFoodCounts = await prisma.personnel_payment.count({ where:{type_of_payment:"Registration Payment of Food Handlers", status:"Paid"}})
  return userFoodCounts
}

async function countFacilityRegistrationApplication() {
  const userFoodCounts = await prisma.facility_payment.count({ where:{type_of_payment:"Application Form For Facility Registration", status:"Paid"}})
  return userFoodCounts
}

async function countCompleteFacilityRegistration() {
  const userFoodCounts = await prisma.facility_complete_payment.count()
  return userFoodCounts
}

async function countFacilityVerification() {
  const userFoodCounts = await prisma.facility_payment.count({ where:{type_of_payment:"Payment for Health Facility Verification", status:"Paid"}})
  return userFoodCounts
}

async function countFacilityRenewal() {
  const userFoodCounts = await prisma.facility_payment.count({ where:{type_of_payment:"Renewal Payment of Health Care Facility", status:"Paid"}})
  return userFoodCounts
}

async function sumVerification() {
  const userFoodsums = await prisma.personnel_payment.findMany({ 
    where:{type_of_payment:"Payment for Health Personnel Verification", status:"Paid"},
    select: { amount: true }
  })
  const totalSum = userFoodsums.reduce((acc, payment) => acc + parseFloat(payment.amount), 0);
  return totalSum
}

async function sumFoodVerification() {
  const userFoodsums = await prisma.personnel_payment.findMany({ 
    where:{type_of_payment:"Payment for Food Handler Personnel Verification", status:"Paid"},
    select: { amount: true }
  })
  const totalSum = userFoodsums.reduce((acc, payment) => acc + parseFloat(payment.amount), 0);
  return totalSum
}

async function sumRenewal() {
  const userFoodsums = await prisma.personnel_payment.findMany({ 
    where:{type_of_payment:"Renewal Payment of Health Care Personnel", status:"Paid"},
    select: { amount: true }
  })
  const totalSum = userFoodsums.reduce((acc, payment) => acc + parseFloat(payment.amount), 0);
  return totalSum
}

async function sumFoodRenewal() {
  const userFoodsums = await prisma.personnel_payment.findMany({ 
    where:{type_of_payment:"Renewal Payment of Food Handler", status:"Paid"},
    select: { amount: true }
  })
  const totalSum = userFoodsums.reduce((acc, payment) => acc + parseFloat(payment.amount), 0);
  return totalSum
}

async function sumRegistration() {
  const userFoodsums = await prisma.personnel_payment.findMany({ 
    where:{type_of_payment:"Registration Payment of Health Care Personnel", status:"Paid"},
    select: { amount: true }
  })
  const totalSum = userFoodsums.reduce((acc, payment) => acc + parseFloat(payment.amount), 0);
  return totalSum
}

async function sumFoodRegistration() {
  const userFoodsums = await prisma.personnel_payment.findMany({ 
    where:{type_of_payment:"Registration Payment of Food Handlers", status:"Paid"},
    select: { amount: true }
  })
  const totalSum = userFoodsums.reduce((acc, payment) => acc + parseFloat(payment.amount), 0);
  return totalSum
}

async function sumFacilityRegistrationApplication() {
  const userFoodsums = await prisma.facility_payment.findMany({ 
    where:{type_of_payment:"Application Form For Facility Registration", status:"Paid"},
    select: { amount: true }
  })
  const totalSum = userFoodsums.reduce((acc, payment) => acc + parseFloat(payment.amount), 0);
  return totalSum
}

async function sumCompleteFacilityRegistration() {
  const userFoodsums = await prisma.facility_complete_payment.findMany({
    select: { amount: true }
  })
  const totalSum = userFoodsums.reduce((acc, payment) => acc + parseFloat(payment.amount), 0);
  return totalSum
}

async function sumFacilityVerification() {
  const userFoodsums = await prisma.facility_payment.findMany({ 
    where:{type_of_payment:"Payment for Health Facility Verification", status:"Paid"},
    select: { amount: true }
  })
  const totalSum = userFoodsums.reduce((acc, payment) => acc + parseFloat(payment.amount), 0);
  return totalSum
}

async function sumFacilityRenewal() {
  const userFoodsums = await prisma.facility_payment.findMany({ 
    where:{type_of_payment:"Renewal Payment of Health Care Facility", status:"Paid"},
    select: { amount: true }
  })
  const totalSum = userFoodsums.reduce((acc, payment) => acc + parseFloat(payment.amount), 0);
  return totalSum
}
  
export  async function counts(request: Request, response: Response) {
    try {
      const enumCounts = await countUsersByType();
      const typeCounts = await countFacilitiesByType()
      const allfacilities = await countFacilities()
      const allPersonnels = await countPersonnels()
      const allfoodfacilities = await countFoodFacilities()
      const allfoodPersonnels = await countFoodPersonnels()
      const allPersonnelVerification = await countVerification()
      const allfoodPersonnelVerification = await countFoodVerification()
      const allPersonnelRenewal = await countRenewal()
      const allfoodPersonnelRenewal = await countFoodRenewal()
      const allPersonnelRegistration = await countRegistration()
      const allfoodPersonnelRegistration = await countFoodRegistration()
      const allfacilityVerification = await countFacilityVerification()
      const allfacilityRenewal = await countFacilityRenewal()
      const allfacilityRegistrationApplication = await countFacilityRegistrationApplication()
      const allfacilityCompleteRegistration = await countCompleteFacilityRegistration()
      const sumPersonnelVerification = await sumVerification()
      const sumfoodPersonnelVerification = await sumFoodVerification()
      const sumPersonnelRenewal = await sumRenewal()
      const sumfoodPersonnelRenewal = await sumFoodRenewal()
      const sumPersonnelRegistration = await sumRegistration()
      const sumfoodPersonnelRegistration = await sumFoodRegistration()
      const sumfacilityVerification = await sumFacilityVerification()
      const sumfacilityRenewal = await sumFacilityRenewal()
      const sumfacilityRegistrationApplication = await sumFacilityRegistrationApplication()
      const sumfacilityCompleteRegistration = await sumCompleteFacilityRegistration()
      return response.status(200).json({
        message:"Statistics Count", 
        allPersonnels,
        allfacilities,
        allfoodPersonnels,
        allfoodfacilities,
        allPersonnelVerification,
        allfoodPersonnelVerification,
        allPersonnelRenewal,
        allfoodPersonnelRenewal,
        allPersonnelRegistration,
        allfoodPersonnelRegistration,
        allfacilityVerification,
        allfacilityRenewal,
        allfacilityRegistrationApplication,
        allfacilityCompleteRegistration,
        sumPersonnelVerification,
        sumfoodPersonnelVerification,
        sumPersonnelRenewal,
        sumfoodPersonnelRenewal,
        sumPersonnelRegistration,
        sumfoodPersonnelRegistration,
        sumfacilityVerification,
        sumfacilityRenewal,
        sumfacilityRegistrationApplication,
        sumfacilityCompleteRegistration,
        facilityCount:typeCounts,
        personnelCount:enumCounts})
    } catch (error) {
      console.error('Error counting users by type:', error);
    }
}