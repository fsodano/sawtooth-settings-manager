import axios from 'axios';

export default {
  getState(radixNamespace) {
    return axios.get(`${process.env.SAWTOOTH_API_URL}/state?address=${radixNamespace}`)
      .then(response => response.data.data);
  },
};
