import axios from 'axios';

import Config from '../config';

const API = {

  init() {
    return axios.create({
      headers: {
        common: {
          Authorization: sessionStorage.getItem('jwtToken') || '',
        },
      },
    });
  },

  async searchByTitle(title) {
    return API
      .init()
      .post(`${Config.env.baseURL}/search`, { title });
  },

};

export default API;
