import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.REACT_APP_URL + 'products';

export function getProducts() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
