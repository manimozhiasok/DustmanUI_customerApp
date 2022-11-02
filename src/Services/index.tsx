import { customerOrderService } from './customerOrderService';
import { orderService } from './orderService';
import { imageUploadService } from './imageUploadService';
import { generalService } from './generalService';
import { customerRegisterService } from './customerRegisterService';
import { customerProfileService } from './customerProfileService';
import { customerAddressService } from './customerAddressService';
import { vendorProfileService } from './vendorProfileService';
import { vendorRegisterService } from './vendorRegisterService';
import { vendorCustomerOrderService } from './vendorCustomerOrdersService';

export const API_SERVICES = {
  customerOrderService,
  orderService,
  imageUploadService,
  generalService,
  customerProfileService,
  customerRegisterService,
  customerAddressService,
  vendorProfileService,
  vendorRegisterService,
  vendorCustomerOrderService
};
