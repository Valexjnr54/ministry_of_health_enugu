// paystack.ts
import axios from 'axios';
import { Request, Response,response } from 'express';
import { Config } from '../config/config';

const PAYSTACK_SECRET_KEY = Config.paystackSecret;
const PAYSTACK_BASE_URL = Config.paystackBaseURL


export async function initializePayment(fullname:string, phone_number:string, amount: number, email: string, type:string, type_of_payment:string, callback_url: string) {
  try {
    const response = await axios.post(
      PAYSTACK_BASE_URL + '/initialize',
      {
        amount,
        email,
        callback_url,
        metadata:{
          fullname,
          email,
          phone_number,
          type,
          type_of_payment,
          amount
        }
      },
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
    // throw new Error(error.response.data.message);
  }
}

export async function initializeCompletePayment(facility_name:string, facility_id:any, phone_number:string, amount: number, email: string, type:string, type_of_payment:string, callback_url: string) {
  try {
    const response = await axios.post(
      PAYSTACK_BASE_URL + '/initialize',
      {
        amount,
        email,
        callback_url,
        metadata:{
          facility_id,
          facility_name,
          email,
          phone_number,
          type,
          type_of_payment,
          amount
        }
      },
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
    // throw new Error(error.response.data.message);
  }
}

export async function initializeFacilityPayment(facility_name:string, phone_number:string, amount: number, email: string, type:string, type_of_payment:string, callback_url: string) {
  try {
    const response = await axios.post(
      PAYSTACK_BASE_URL + '/initialize',
      {
        amount,
        email,
        callback_url,
        metadata:{
          facility_name,
          email,
          phone_number,
          type,
          type_of_payment,
          amount
        }
      },
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
    // throw new Error(error.response.data.message);
  }
}

export async function initializeFoodFacilityPayment(facility_name:string, phone_number:string, amount: number, email: string, type:string, type_of_payment:string, category:string, callback_url: string) {
  try {
    const response = await axios.post(
      PAYSTACK_BASE_URL + '/initialize',
      {
        amount,
        email,
        callback_url,
        metadata:{
          facility_name,
          email,
          phone_number,
          type,
          type_of_payment,
          category,
          amount
        }
      },
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
    // throw new Error(error.response.data.message);
  }
}

export async function verifyPayment(reference: string) {
  try {
    const response = await axios.get(
      PAYSTACK_BASE_URL + `/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}

export function extractReferenceFromRequest(req: Request) {
  const reference = req.query.reference;
  return reference;
}
