import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';
import { Config } from 'src/Config';
import { OrderData } from './orderSub';
export const orderService = {
  getAll: async (id: number) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getMyOrders/customer/${id}`,
      method: 'get'
    });
    // return OrderData.OrderDataGet;
    return apiRequest(options);
  }
};
