import { BASE_URL } from './constants';
import axios from 'axios';

const api = async (path, params, method,token) => {

  console.log("====[][]]=====",path,"tok",token,"-", params,"-", "method", method);

  let url = BASE_URL + path;
  let options;
  options = {
    headers: 
    token ? {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }
    :
    {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: method,
    ...(params && { data: JSON.stringify(params) }),
  };
  return axios(url, options)
    .then((response) => {
      return response;
    })
    .catch(async (error) => {
      return error.response;
    });
};

export default api;
