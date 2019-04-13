import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';
import { getUser, loggedIn } from 'utils/auth';

interface User {
  username: string;
  password: string;
}

// insert your UpCloud username & password here!
// const UPCLOUD_USERNAME = 'INSERT_USERNAME_HERE';
// const UPCLOUD_PASSWORD = 'INSERT_PASSWORD_HERE';

// use CORS proxy, so we don't get CORS errors such as "No 'Access-Control-Allow-Origin' header is present"
const API_URL =
  'https://cors-anywhere.herokuapp.com/https://api.upcloud.com/1.2';

let axiosInstance: AxiosInstance | null = null;

function getAxios(): AxiosInstance {
  if (axiosInstance === null) {
    axiosInstance = axios.create();
  }

  return axiosInstance;
}

async function request(
  config: AxiosRequestConfig, user?: User
): Promise<{ status: number; data: any; error: string | null }> {
  try {
    let username = '', password = '';
    if (user) {
      username = user.username;
      password = user.password;
    } else if (loggedIn()) {      
      const user = await getUser() as [string, string];
      username = user[0];
      password = user[1];
    }

    const requestConfig = {
      ...config,
      auth: { username, password },
      url: `${API_URL}${config.url || ''}`,
    };
  
    const response: AxiosResponse = await getAxios().request(requestConfig);
    const { data, status } = response;
    return {
      status,
      data,
      error: null
    };
  } catch (e) {
    return {
      status: 401,
      data: null,
      error: 'Wrong username or password!'
    };
  }
}

export { request };
