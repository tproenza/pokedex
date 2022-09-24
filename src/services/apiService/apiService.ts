import axios from 'axios';

const getApiClient = (url: string) => {
  const apiClient = axios.create({
    baseURL: `${url}`,
    headers: {
      'Content-Type': 'application/json',
    }
  });
  return apiClient;
}

export default getApiClient;