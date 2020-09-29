import axios from 'axios';

const api = axios.create({
  baseURL: 'https://back-gobarber.herokuapp.com',
});

export default api;
