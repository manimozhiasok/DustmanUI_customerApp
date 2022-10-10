
import React from 'react'
import { Config } from 'src/Config';
import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';


type CustomerServiceProp = {
    data: {
        quantity_kg: number;
        order_items: any[];
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

export const customerService = {
    create: async ({ data, successMessage, failureMessage }: CustomerServiceProp) => {
        const options = await apiOptions({
          url: `${Config.BASE_URL}/api/createCustomerOrder/orderer/`,
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

}