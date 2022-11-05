import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';
import { Config } from 'src/Config';
import {
  vendorCustomerOrder,
  vendorCustomerOrderCompleted,
  vendorCustomerOrderScheduled
} from './vendorCustomerOrderStub';

export const vendorCustomerOrderService = {
  getCustomerOrderByVendorLocation: async (vendorId: number) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getOrderByVendorLocation/vendor/${vendorId}`,
      method: 'get'
    });
    // return vendorCustomerOrder.VendorCustomerOrderGet;
    return apiRequest(options);
  },

  getAllVendorScheduledOrder: async (vendorId: number) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getAllVendorScheduledOrders/vendor/${vendorId}`,
      method: 'get'
    });
    // return vendorCustomerOrderScheduled.VendorCustomerOrderGet;
    return apiRequest(options);
  },

  getAllVendorCompletedOrder: async (vendorId: number) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getAllVendorCompletedOrders/vendor/${vendorId}`,
      method: 'get'
    });
    //return vendorCustomerOrderCompleted.VendorCustomerOrderGet;
    return apiRequest(options);
  }
};
