// CREDO.ts
import axios from 'axios';
import { Request, Response,response } from 'express';
import { Config } from '../config/config';

// Define a type for the payment info object
type PaymentInfo = {
  success: boolean;
  authorization_url?: string; // Use optional chaining for properties that might not exist
  access_code?: string;
  reference?: string;
};

// Define a type for the error object
type PaymentError = {
  success: false;
  message: string;
};

// Use a union type for the function return type
type PaymentResult = PaymentInfo | PaymentError;

const CREDO_SECRET_KEY = Config.credoSecret;
const CREDO_PUBLIC_KEY = Config.credoPublicKey;
const CREDO_BASE_URL = Config.credoBaseURL

export async function initializePayment(fullname: string, phone_number: string, amount: number, email: string, type: string, type_of_payment: string, callback_url: string): Promise<PaymentResult> {
  try {
      const payload = {
          amount,
          email,
          callback_url,
          metadata: {
              fullname,
              email,
              phone_number,
              type,
              type_of_payment,
              amount
          }
      };

      const headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `${CREDO_PUBLIC_KEY}`,
      };

      const response = await axios.post(`${CREDO_BASE_URL}/transaction/initialize`, payload, { headers });
      const data = {
        success: true,
        authorization_url: response.data.data.authorizationUrl,
        access_code: response.data.data.credoReference,
        reference: response.data.data.reference
      };
      return data;
  } catch (error) {
      console.error(error);
  }
  // Default return, should logically never be reached
  return {
    success: false,
    message: "Unexpected end of function"
  };
}

export async function initializeCompletePayment(facility_name:string, facility_id:any, phone_number:string, amount: number, email: string, type:string, type_of_payment:string, callback_url: string) {
  try {
    const payload ={
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
    };
    const headers= {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `${CREDO_PUBLIC_KEY}`,
    }
    const response = await axios.post(`${CREDO_BASE_URL}/transaction/initialize`,payload,{headers});
    const data = {
      success: true,
      authorization_url: response.data.data.authorizationUrl,
      access_code: response.data.data.credoReference,
      reference: response.data.data.reference
    };
    return data;
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
    // throw new Error(error.response.data.message);
  }
}

export async function initializeFacilityPayment(facility_name:string, phone_number:string, amount: number, email: string, type:string, type_of_payment:string, callback_url: string) {
  try {
    const payload = {
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
    }
    const headers= {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `${CREDO_PUBLIC_KEY}`,
    }
    const response = await axios.post(`${CREDO_BASE_URL}/transaction/initialize`,payload,{headers});
    const data = {
      success: true,
      authorization_url: response.data.data.authorizationUrl,
      access_code: response.data.data.credoReference,
      reference: response.data.data.reference
    };
    return data;
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
    // throw new Error(error.response.data.message);
  }
}

export async function initializeFoodFacilityPayment(facility_name:string, phone_number:string, amount: number, email: string, type:string, type_of_payment:string, category:string, callback_url: string) {
  try {
    const payload = {
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
    }
    const headers = {
      Authorization: `${CREDO_PUBLIC_KEY}`,
    }
    const response = await axios.post(`${CREDO_BASE_URL}/transaction/initialize`,payload,{headers});
    const data = {
      success: true,
      authorization_url: response.data.data.authorizationUrl,
      access_code: response.data.data.credoReference,
      reference: response.data.data.reference
    };
    return data;
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: 'Internal Server Error' });
    // throw new Error(error.response.data.message);
  }
}

export async function verifyPayment(reference: string) {
  try {
    const response = await axios.get(
      CREDO_BASE_URL + `/transaction/${reference}/verify`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `${CREDO_SECRET_KEY}`
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
  const reference = req.query.transRef;
  return reference;
}

export async function getInsightTagValue(tag:any, data:any) {
  for (let i = 0; i < data.length; i++) {
      if (data[i].insightTag === tag) {
          return data[i].insightTagValue;
      }
  }
  return null;
}