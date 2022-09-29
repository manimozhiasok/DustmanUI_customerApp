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

export const getUserId = () => {
  return JSON.parse(localStorage.getItem('userId'));
};

export const getDateFormat = (date: any) => {
  let data = new Date(date);
  const optionsMonth: any = { month: 'long' };
  const getMonth = new Intl.DateTimeFormat('en-US', optionsMonth).format(data);
  const getDate = data.getDate();
  const getYear = data.getFullYear();
  const getTime = data.toLocaleTimeString();
  return {
    getMonth,
    getDate,
    getYear,
    getTime
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
