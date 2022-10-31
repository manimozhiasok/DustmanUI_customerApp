import {
  AND_SEPARATOR,
  ASSIGNMENT_SEPARATOR,
  OR_SEPARATOR
} from 'src/Config/constant';

export const createAndFields = (fieldValuesPair) => {
  return fieldValuesPair
    .map((e) => {
      if (Array.isArray(e.value)) {
        return `${e.columnField}${ASSIGNMENT_SEPARATOR}${e.value.join(
          OR_SEPARATOR
        )}`;
      }
      return `${e.columnField}${ASSIGNMENT_SEPARATOR}${e.value}`;
    })
    .join(AND_SEPARATOR);
};

export const oldQueryMethod = (filters) => {
  const pairs = Object.entries(filters)
    .filter(([, value]) => value !== undefined)
    .map(([columnField, value]) => {
      return { columnField, value };
    });
  const query = createAndFields(pairs);
  return query;
};

export const getToken = () => {
  return JSON.parse(localStorage.getItem('token'));
};

export const getCustomerId = () => {
  return JSON.parse(localStorage.getItem('customerId'));
};

export const setCustomerId = (id: number) => {
  return localStorage.setItem('customerId', JSON.stringify(id));
};

export const getDateFormat = (date: any) => {
  let data = new Date(date);
  const optionsMonth: any = { month: 'short' };
  const optionsLongMonth: any = { month: 'long' };
  const optionsDay: any = { weekday: 'short' };
  const optionsLongDay: any = { weekday: 'long' };
  const getMonth = new Intl.DateTimeFormat('en-US', optionsMonth).format(data);
  const getLongMonth = new Intl.DateTimeFormat(
    'en-US',
    optionsLongMonth
  ).format(data);
  const getDate = data.getDate();
  const getYear = data.getFullYear();
  const getTime = data.toLocaleTimeString();
  const getDay = new Intl.DateTimeFormat('en-US', optionsDay).format(data);
  const getLongDay = new Intl.DateTimeFormat('en-US', optionsLongDay).format(
    data
  );
  const getDateString = data.toDateString();
  return {
    getMonth,
    getDate,
    getYear,
    getTime,
    getDateString,
    getDay,
    getLongDay,
    getLongMonth
  };
};

export const getCurrentFieldValue = (initialVal, edits, fieldName) => {
  if (edits[fieldName] !== undefined) {
    return edits[fieldName];
  }
  if (initialVal) {
    return initialVal[fieldName];
  }
  return null;
};

export const isEmpty = (obj) => {
  if (typeof obj === 'object') {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }
  return Array.isArray(obj) && obj.length === 0;
};

export const filterOrders = (tableData: any[], val: number) => {
  return (
    tableData.length &&
    tableData.filter((item) => item.status_id === val).length
  );
};

export const isValidEmail = (email) => {
  const emailExp =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  return email?.match(emailExp);
};

export const isPhoneNumber = (number: string) => {
  const numberExp = /^([0-9()-]{10})$/;
  return number?.match(numberExp);
};

export const isOneTimePassWord = (number: string) => {
  const otpExp = /^([0-9]{6})$/;
  return number?.match(otpExp);
};

export const isValidPinCode = (number: string) => {
  const pinCodeExp = /^[1-9][0-9]{5}$/;
  return number?.match(pinCodeExp);
};
