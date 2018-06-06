import api from '../../config/api';

export default {
  getBookDetail: id => api.get('/users', { id })
};
