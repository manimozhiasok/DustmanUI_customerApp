import { Config } from 'src/Config';
import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';

export const vendorMyOrderService = {
  getVendorOrderByStatus: async (vendorId: number, statusId: number) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getDustmanOrdersByStatusType/vendor/${vendorId}/status/${statusId}`,
      method: 'get'
    });
    return apiRequest(options);
  }
};
