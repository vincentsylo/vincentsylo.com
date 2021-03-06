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
    const response = await axios.get(url, { params });
    return response.data;
  },

  async post(url, params) {
    const response = await axios.post(url, params);
    return response.data;
  },
};
