import axios from 'axios';
// Change the API_URL to the correct location of the backend API before deploying the app
const API_URL = 'https://jbooth451.pythonanywhere.com/';/* 'http://localhost:8000' http://127.0.0.1:8000 or  'https://yourPythonAnywhereName.pythonanywhere.com'*/


export class APIService {
  constructor() {
  }

  getMenu() {
    const url = `${API_URL}/api/menu/`;
    let jwtToken = localStorage.getItem('access');
    const headers = {Authorization: `JWT ${jwtToken}`};
    return axios.get(url, {headers: headers});
  }
  
  getTable(param_pk) {
    const url = `${API_URL}/api/table/${param_pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = {Authorization: `JWT ${jwtToken}`};
    return axios.get(url, {headers: headers});
  }

  getOrder(param_pk){
    const url = `${API_URL}/api/orders/${param_pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = {Authorization: `JWT ${jwtToken}`};
    return axios.post(url, movie, {headers: headers});
  }

  getReservation(param_pk){
    const url = `${API_URL}/api/reservation/${param_pk}`;
    let jwtToken = localStorage.getItem('access');
    const headers = {Authorization: `JWT ${jwtToken}`};
    return axios.put(url, movie, {headers: headers});
  }

  authenticateLogin(credentials) {
    const url = `${API_URL}/api/`;
    return axios.post(url, credentials);
  }

  registerUser(credentials) {
     const url = `${API_URL}/register/`;
     credentials.customusername = credentials.username
     return axios.post(url, credentials);
  }
  
  saveFood(param_pk) {
    const url = `${API_URL}/api/menu/`;
    let jwtToken = localStorage.getItem('access');
    const headers = {Authorization: `JWT ${jwtToken}`};
    return axios.get(url, {headers: headers});
 }
}
