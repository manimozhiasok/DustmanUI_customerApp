import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';
import { Config } from 'src/Config';
type CustomerDetailsProp = {
  data: {
    quantity_kg: number;
    order_items: [];
    description: string;
    order_images: [
      {
        image_url: string;
      },
      {
        image_url: string;
      }
    ];
    order_address: {
      address_line1: string;
      address_line2: string;
      address_line3: string;
      state: string;
      city: string;
      pincode: string;
      mobile_number: string;
      map_location: string;
    };
    customer_order_details: {
      vehicle_id: number;
      pickup_time: string;
      slot: string;
    };
  };
  successMessage?: string;
  failureMessage?: string;
};
export const customerCreateService = {
  create: async ({
    data,
    successMessage,
    failureMessage
  }: CustomerDetailsProp) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/createCustomerOrder/orderer/1`,
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
  getAllVehicle: async () => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getAllVehicles`,
      method: 'get'
    });
    return apiRequest(options);
  }
};