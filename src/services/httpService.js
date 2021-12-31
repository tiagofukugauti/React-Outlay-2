import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
});

export async function get(url) {
  const { data } = await axiosInstance.get(url, { withCredentials: true });
  return data;
}

export async function post(url, object) {
  const { data } = await axiosInstance.post(url, object, {
    withCredentials: true,
  });
  return data;
}
