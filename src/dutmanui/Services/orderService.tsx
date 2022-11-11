import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';
import { Config } from 'src/Config';
import { OrderData } from './orderServiceSub';

type OrderServiceProp = {
  data: {
    id?: number;
    order_type_id?: number;
    order_type?: string;
    user_type_id?: string;
    user_type?: string;
    orderer_id?: number;
    customer_id?: number;
    registered_mobile_number?: number;
    first_name?: string;
    last_name?: string;
    email?: string;
    quantity_kg?: number;
    description?: string;
    status_id?: number;
    created_at?: string;
    updated_at?: string;
    order_id?: number;
    vehicle_id?: number;
    vehicle_name?: string;
    pickup_time?: string;
    slot?: string;
    address?: string;
    city?: string;
    pincode?: string;
    order_mobile_number?: string;
    map_location?: string;
    address_order_id?: string;
    order_items?: [];
    order_images?: [];
  };
  successMessage?: string;
  failureMessage?: string;
};

export const orderService = {
  getCustomerOrderByStatus: async (customerId: number, statusId: number) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getMyOrdersByStatus/customer/${customerId}/status/${statusId}`,
      method: 'get'
    });
    return apiRequest(options);
  },

  getConfirmedCustomerOrders: async (customerId: number) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getMyConfirmedOrders/customer/${customerId}`,
      method: 'get'
    });
    return apiRequest(options);
  },

  create: async ({
    data,
    successMessage,
    failureMessage
  }: OrderServiceProp) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getMyOrders/customer/2`,
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

  getAll: async (id: number) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getMyOrders/customer/${id}`,
      method: 'get'
    });
    return OrderData.OrderServiceGet;
  },

  getById: async (id: number) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getDetailsById/${id}`,
      method: 'get'
    });
    return apiRequest(options);
  },

  update: async (
    id: number,
    { data, successMessage, failureMessage }: OrderServiceProp
  ) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/updateDetails/${id}`,
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

  replace: async (
    id: number,
    { data, successMessage, failureMessage }: OrderServiceProp
  ) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/replaceDetail/${id}`,
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

  delete: async (
    id: number,
    {
      successMessage,
      failureMessage
    }: { successMessage?: string; failureMessage?: string }
  ) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/deleteDetail/${id}`,
      method: 'delete'
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
