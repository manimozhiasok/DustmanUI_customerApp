import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';
import { Config } from 'src/Config';
import { vendorDropOrder } from './vendorDropOrderSub';

export type DefaultProp = {
  data: any;
  successMessage?: string;
  failureMessage?: string;
};

type vendorDetailsProp = {
  data: {
    quantity_kg: number | string;
    order_items: number[];
    description: string;
    order_images: any[];
    order_address_id: string | number;
    customer_order_details: {
      vehicle_id: number;
      pickup_time: string;
      slot: string;
    };
  };
  successMessage?: string;
  failureMessage?: string;
};

type vendorDropDetailsProp = {
  data: {
    quantity_kg: number | string;
    order_items: number[];
    description: string;
    order_images: any[];
    order_address_id: string | number;
    customer_order_details: {
      vehicle_id: number;
      pickup_time: string;
      slot: string;
    };
    vendor_order_drop_details: {
      dustman_location_id: number | string;
    };
  };
  successMessage?: string;
  failureMessage?: string;
};

export const vendorPickupDropService = {
  create: async (
    customerId: number,
    { data, successMessage, failureMessage }: vendorDetailsProp
  ) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/createCustomerOrder/orderer/${customerId}`,
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

  dropCreate: async (
    vendorId: number,
    { data, successMessage, failureMessage }: vendorDropDetailsProp
  ) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/createVendorOrder/orderer/${vendorId}`,
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

  replace: async (
    id: number,
    { data, successMessage, failureMessage }: DefaultProp
  ) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/replaceOrder/order/${id}`,
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
  },

  getAllTrashCategory: async (categoryTypeId: number, userTypeId: number) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/categories/categoryType/${categoryTypeId}/UserType/${userTypeId}/categoryItems/getAllCategory`,
      method: 'get'
    });
    return apiRequest(options);
  },

  getDustmanLocation: async () => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getDustmanLocation`,
      method: 'get'
    });
    return vendorDropOrder.vendorDropGet;
    //return apiRequest(options);
  }
};
