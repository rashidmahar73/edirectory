import axios from "axios";
import { api_key, moviesdata, tvData } from "./Api's URL/apiUrl";

const ApiHandlerV2 = async ({ method, endpoint }) => {
  if (method === "GET") {
    try {
      const response = await axios.get(`${endpoint}?api_key=${api_key}`);
      if (response) {
        return response;
      }
    } catch (error) {}
  } else if (method === "moviesData") {
    try {
      const response = await axios.get(`${moviesdata}=${endpoint}`);
      if (response) {
        return response;
      }
    } catch (error) {}
  } else if (method === "tvData") {
    try {
      const response = await axios.get(`${tvData}=${endpoint}`);
      if (response) {
        return response;
      }
    } catch (error) {}
  }
};
export default ApiHandlerV2;
