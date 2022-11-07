export const AND_SEPARATOR = ';';
export const OR_SEPARATOR = ',';
export const ASSIGNMENT_SEPARATOR = '=';

export const HTTP_STATUSES = {
  OK: 200,
  SUCCESS: 201,
  NOT_MODIFIED: 304,
  BAD_REQUEST: 400,
  SERVER_ERROR: 500
};

export const TOAST_TYPES = {
  ERROR: 'error',
  WARNING: 'warning',
  SUCCESS: 'success',
  INFO: 'info',
  LINK: 'link'
};

export const CUSTOMER_STATUS = {
  0: 'Pending',
  2: 'Accepted',
  3: 'Completed',
  4: 'Cancelled'
};

export const VENDOR_ORDER_STATUS = {
  Pending: 0,
  Scheduled: 2,
  Completed: 3
};

export const CUSTOMER_ORDER_STATUS = {
  Pending: 0,
  New: 1,
  Confirmed: 2,
  Completed: 3,
  Cancelled: 4
};

export const PROFILE_TAB_VALUES = {
  myAccount: 1,
  changeLanguage: 2,
  changeUserType: 3,
  orderManagement: 3
};

export const HANDLE_SUBMIT = {
  viewUser: 'viewUser',
  createUser: 'editOrCreateUser'
};

export const CONFIRM_MODAL = {
  delete: 'delete',
  publish: 'publish',
  cancel: 'cancel',
  accept: 'accept',
  reject: 'reject',
  moveToDustman: 'moveToDustman'
};

export const USER_TYPE_ID = {
  home: 1,
  commercial: 2,
  industry: 3,
  vendorPickup: 4,
  vendorDrop: 5
};

export const LANGUAGE_ID = {
  english: 1,
  tamil: 2,
  hindi: 3
};

export const GET_USER_CATEGORY = {
  1: 'Home User',
  2: 'Commercial User',
  3: 'Industry User',
  4: 'Vendor Pickup',
  5: 'vendor Drop'
};

export const TRASH_CATEGORY_ID = {
  customerTrash: 1,
  vendorDropTrash: 2,
  vendorPickupTrash: 3
};

export const ORIENTATION = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal'
};
