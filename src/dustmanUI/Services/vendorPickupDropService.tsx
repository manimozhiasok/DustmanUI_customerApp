import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';
import { Config } from 'src/Config';
import { vendorDropOrder, vendorPickupAddress } from './Stub/VendorAppStub';

export type DefaultProp = {
  data: any;
  successMessage?: string;
  failureMessage?: string;
};

type vendorPickupDetailsProp = {
  data: {
    quantity_kg: string | number;
    description: string;
    order_items: number[];
    user_type_id: number;
    order_images: any[];
    order_address_id: string | number;
    vendor_order_pickup_details: {
      vehicle_id: number;
      pickup_time: string;
      slot: string;
      from_place: string;
      to_place: string;
      total_distance: number;
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
    user_type_id: number;
    vendor_order_drop_details: {
      dustman_location_id: string | number;
      pickup_time: string;
      slot: string;
    };
  };
  successMessage?: string;
  failureMessage?: string;
};

export const vendorPickupDropService = {
  createVendorOrder: async (
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
  
  replaceOrder: async (
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

  getAllPickupAddress: async (vendorId: number) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getAllCustomerVendorOrderAddresss/vendor/${vendorId}`,
      method: 'get'
    });
    //return vendorPickupAddress.vendorAddress;
    return apiRequest(options);
  }
};
