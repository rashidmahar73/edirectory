import axios from "axios";
import { api_key, moviesdata, tokenURL } from "./Api's URL/apiUrl";
const ApiHandler = async (method, url) => {
  if (method === "GET") {
    try {
      const response = await axios.get(`${tokenURL}?api_key=${api_key}`);
      if (response) {
        return response;
      }
    } catch (error) {}
  } else if (method === "moviesData") {
    try {
      const response = await axios.get(`${moviesdata}=${url}`);
      if (response) {
        return response;
      }
    } catch (error) {}
  }
};
export default ApiHandler;
