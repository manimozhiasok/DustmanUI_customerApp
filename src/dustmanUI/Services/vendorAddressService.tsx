import { Config } from 'src/Config';
import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';

export type DefaultProp = {
  data: any;
  successMessage?: string;
  failureMessage?: string;
};

export type VendorAddressData = {
  id: number;
  address_line1: string;
  address_line2: string;
  address_line3: string;
  state: string;
  city: string;
  pincode: string;
  mobile_number: string;
};
type AddressCreateProp = {
  data: VendorAddressData;
  successMessage?: string;
  failureMessage?: string;
};

export const vendorAddressService = {
  createAddress: async (
    vendorId: number,
    { data, successMessage, failureMessage }: AddressCreateProp
  ) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/createVendorOrderAddress/vendor/${vendorId}`,
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
  replaceVendorAddress: async (
    id: number,
    { data, successMessage, failureMessage }: DefaultProp
  ) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/replaceVendorOrderAddress/vendorOrderAddress/${id}`,
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
