import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';
import { Config } from 'src/Config';
import { vendorOrder } from './vendorOrderServiceStub';

export const vendorOrderService = {
  getAllOrder: async (vendorId: number, statusId: number) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getDustmanOrdersByStatusType/vendor/${vendorId}/status/${statusId}`,
      method: 'get'
    });
    // return vendorOrder.VendorOrderGet;
    return apiRequest(options);
  }
};
