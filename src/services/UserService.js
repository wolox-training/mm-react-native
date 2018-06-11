import api from '../config/api';

import localStorageService from './localStorageService';

export default {
  getUserDetail: id => api.get('/users', { id }),
  login: async (email, password) => {
    const response = await api.get('/users', { email, password });
    if (response.ok && response.data.length > 0) {
      localStorageService.setToken(response.data.token);
      api.setHeaders({ token: response.data.token });
    }
    return response;
  }
};
