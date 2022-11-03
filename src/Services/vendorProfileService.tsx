import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';
import { Config } from 'src/Config';

type CustomerCreateProp = {
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

export const vendorProfileService = {
  create: async (
    vendorId: number,
    { data, successMessage, failureMessage }: CustomerCreateProp
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
  }
};
