import api from '../config/api';

export default {
  getUserDetail: id => api.get('/users', { id }),
  login: user => api.get('/users', { email: user.email, password: user.password })
};
