import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';
import { Config } from 'src/Config';
import { generateOtpData, ProfileData } from './Stub';

export type GenerateOtpProp = {
  data: {
    phoneNumber: string;
  };
  successMessage?: string;
  failureMessage?: string;
};

export type VerifyOtpProp = {
  data: {
    mobile_number: string;
    otp: string;
  };
  successMessage?: string;
  failureMessage?: string;
};

export const vendorRegisterService = {
  generateOtp: async ({
    data,
    successMessage,
    failureMessage
  }: GenerateOtpProp) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/sendOtp`,
      method: 'post',
      data: data
    });
    const toastMessageConfig = {
      success: {
        message: successMessage
      },
      failure: {
        message: failureMessage
      }
    };
    //return apiRequest(options, toastMessageConfig);
    return generateOtpData.mobileNumberGet
  },

  verifyOtp: async ({
    data,
    successMessage,
    failureMessage
  }: VerifyOtpProp) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/createVendor`,
      method: 'post',
      data: data
    });
    const toastMessageConfig = {
      success: {
        message: successMessage
      },
      failure: {
        message: failureMessage
      }
    };
    //return apiRequest(options, toastMessageConfig);
    return ProfileData.profileServiceCreate
  }
};
