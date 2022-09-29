import { apiOptions } from 'src/Utils/apiOptions';
import { apiRequest } from 'src/Utils/apiRequest';
import { Config } from 'src/Config';

type UserDetailsProp = {
  data: {
    name: string;
    user_name: string;
    password: string;
    role: string;
    permissions: any[];
  };
  successMessage?: string;
  failureMessage?: string;
};

export const userService = {
  create: async ({ data, successMessage, failureMessage }: UserDetailsProp) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/createUser`,
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

  getAll: async () => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getAllUsers`,
      method: 'get'
    });
    return apiRequest(options);
  },

  getById: async (id: number) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/getUserById/${id}`,
      method: 'get'
    });
    return apiRequest(options);
  },

  update: async (
    id: number,
    { data, successMessage, failureMessage }: UserDetailsProp
  ) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/updateUser/${id}`,
      method: 'patch',
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

  replace: async (id, { data, successMessage, failureMessage }) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/replaceUser/ ${id}`,
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
  },
  delete: async (
    id: number,
    {
      successMessage,
      failureMessage
    }: {
      successMessage?: string;
      failureMessage?: string;
    }
  ) => {
    const options = await apiOptions({
      url: `${Config.BASE_URL}/api/deleteUser/${id}`,
      method: 'delete'
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
