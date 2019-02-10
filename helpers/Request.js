import axios from 'axios';

export const request = axios.create({
  baseURL: `${process.env.API_URL}/`,
  timeout: 5000,
});

function getRequestCofnig(options) {
  return {
    method: options.method.toUpperCase(),
    url: options.url,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      ...options.headers,
    },
    data: options.data,
    params: options.params,
  };
}

/**
 *  Function for get request with next.js getInitialProps and axios library
 * @param {*} url - url address of request endpoint
 * @param {*} query - query object from your url
 */
export const initialRequest = async (url, query = null) => {
  try {
    const res = await request.get(
      `${url}${query ? `/ ${Object.values(query)}` : ''}`,
    );
    if (res) {
      return { data: res.data, status: 200 };
    }
    return { data: {}, status: 404 };
  } catch (error) {
    return { error, status: 500 };
  }
};

export const fullRequest = async options => {
  try {
    const axiosConfig = await getRequestCofnig(options);

    if (axiosConfig) {
      const response = await request(options);
      if (response) {
        return { data: response.data, status: 200 };
      }
    }

    return null;
  } catch (error) {
    console.log(error);
    return { data: null, status: 500 };
  }
};
