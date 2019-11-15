import 'isomorphic-unfetch';
import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://18.237.242.89/api/passages";

export function getPassages(page = 0) {
  return fetch(`${baseUrl}?page=${page}`)
    .then(handleResponse)
    .catch(handleError);
}

