import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';
import { Config } from 'src/Config';
import { DefaultProp } from './customerOrderService';

export type AddressData = {
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
  data: AddressData;
  successMessage?: string;
  failureMessage?: string;
};

export const customerAddressService = {
  create: async (
    customerId: number,
    { data, successMessage, failureMessage }: AddressCreateProp
  ) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/createContact/customer/${customerId}`,
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
  replaceAddress: async (
    id: number,
    { data, successMessage, failureMessage }: DefaultProp
  ) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/replaceContact/customer_contact/${id}`,
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
