import api from '../config/api';

export default {
  getUserDetail: id => api.get('/users', { id })
};
