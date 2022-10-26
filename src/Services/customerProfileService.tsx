import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';
import { Config } from 'src/Config';

type CustomerCreateProp = {
  data: {
    user_type_id: number;
    first_name: string;
    last_name: string;
    email: string;
    image_url: string;
  };
  successMessage?: string;
  failureMessage?: string;
};

export const customerProfileService = {
  create: async (
    customerId: number,
    { data, successMessage, failureMessage }: CustomerCreateProp
  ) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/customer/${customerId}/createCustomerProfile`,
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

  getProfileByCustomerId: async (id: number) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getCustomerProfileById/customer/${id}`,
      method: 'get'
    });
    return apiRequest(options);
  }
};
