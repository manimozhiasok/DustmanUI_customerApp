import { Config } from 'src/Config';
import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';
export type DefaultProps = {
  data: any;
  successMessage?: string;
  failureMessage?: string;
};

export const vendorMyOrderService = {
  getVendorOrderByStatus: async (vendorId: number, statusId: number) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getDustmanOrdersByStatusType/vendor/${vendorId}/status/${statusId}`,
      method: 'get'
    });
    return apiRequest(options);
  },
  replaceOrder: async (
    id: number,
    { data, successMessage, failureMessage }: DefaultProps
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
  }
};
