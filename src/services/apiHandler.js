import axios from "axios"


// const baseURL = 'http://localhost:5000';

const baseURL =''

const apiRequest = async (method, endpoint, data) => {
const token=localStorage.getItem("token")

    try {

    let config = {
      method:  method,
      maxBodyLength: Infinity,
      url:baseURL+endpoint,
      data:data,
      headers: { 
        'Accept': 'application/json', 
        'Authorization': 'Bearer '+token
      }
    };
 
    let result=await axios.request(config)
   
    return {
      response: true,

      error: null,
      data: result.data,
    };
   
  } catch (error) {
    return {
      response: false,
      status: error.response.status,
      // error: error.response.data.errors.message,
      data: error.response.data,
    };
  }
};

export const get = (endpoint) => apiRequest('get', endpoint, null);
export const post = (endpoint, data) => apiRequest('post', endpoint, data);
export const put = (endpoint, data) => apiRequest('put', endpoint, data);
export const remove = (endpoint, data) => apiRequest('delete', endpoint, data);
