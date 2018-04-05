import createAxios from 'axios';

function initializeAxios() {
  const axiosInstance = createAxios.create({
    headers: {
      common: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  });

  return axiosInstance;
}

const axios = initializeAxios();

export default {
  async get(url, params) {
    await axios.get(url, { params });
    return response.data;
  },

  async post(url, params, headers) {
    const response = await axios.post(url, params, { headers });
    return response.data;
  },
};
