import axios from 'axios';

const { REACT_APP_SERVICE_URL } = process.env;

const serviceAxiosInstance = axios.create({
  baseURL: REACT_APP_SERVICE_URL
});

export default serviceAxiosInstance;