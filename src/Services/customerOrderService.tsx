import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';
import { Config } from 'src/Config';

export type DefaultProp = {
  data: any;
  successMessage?: string;
  failureMessage?: string;
};

type CustomerDetailsProp = {
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

export const customerOrderService = {
  create: async (
    customerId: number,
    { data, successMessage, failureMessage }: CustomerDetailsProp
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
  }
};
