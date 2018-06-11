import api from '../config/api';

export default {
  getUserDetail: id => api.get('/users', { id }),
  login: (email, password) => api.get('/users', { email, password })
};
