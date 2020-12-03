import axios from 'axios';
import axiosConfig from './axios-config';

let swInstance = axios.create({
  baseURL: axiosConfig.baseUrl
});

export default swInstance;
