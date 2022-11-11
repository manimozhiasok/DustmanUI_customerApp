import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';
import { Config } from 'src/Config';

type VendorCreateProp = {
  data: {
    name: string;
    gst: string;
    full_address: string;
    location: string;
    map_location: string;
    contact_name: string;
    mobile_number: string;
    landline_number: string;
    email_id: string;
    website: string;
    established_year: string;
    order_management_id: string;
    vehicle_owned: number[];
    address_line1: string;
    address_line2: string;
    address_line3: string;
    state: string;
    city: string;
    pincode: string;
  };

  successMessage?: string;
  failureMessage?: string;
};
type VendorProfileUpdateProp = {
  data: {
    user_type?: number;
    language_id?: number;
    name?: string;
    full_address?: string;
    contact_name?: string;
    email_id?: string;
    image_url?: string;
  };
  successMessage?: string;
  failureMessage?: string;
};
type VendorReplaceProp = {
  data: { mobile_number: string; otp: string };
  successMessage?: string;
  failureMessage?: string;
};

export const vendorProfileService = {
  create: async (
    vendorId: number,
    { data, successMessage, failureMessage }: VendorCreateProp
  ) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/createVendorProfiles/vendor/${vendorId}`,
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
    return apiRequest(options, toastMessageConfig);
  },

  getProfileByVendorId: async (id: number) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getVendorProfileByVendorId/vendor/${id}`,
      method: 'get'
    });
    return apiRequest(options);
  },

  updateVendorProfile: async (
    vendorId: number,
    { data, successMessage, failureMessage }: VendorProfileUpdateProp
  ) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/updateVendorProfile/vendor_profile/${vendorId}`,
      method: 'patch',
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
    return apiRequest(options, toastMessageConfig);
  },

  replaceVendor: async (
    vendorId: number,
    { data, successMessage, failureMessage }: VendorReplaceProp
  ) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/replaceVendor/vendor/${vendorId}`,
      method: 'put',
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
    return apiRequest(options, toastMessageConfig);
  }
};
