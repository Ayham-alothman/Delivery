// src/axiosInstance.js

import axios from 'axios';

const Api = axios.create({
  baseURL: `http://localhost:4000/`, // Replace with your API base URL
  timeout: 1000, // Optional: Set a timeout for requests
  headers: {
    'Content-Type': 'application/json', // Optional: Set default headers
  },
});

export default Api;
