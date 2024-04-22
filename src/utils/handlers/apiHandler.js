import axios from "axios";
// import { api_key, moviesdata, tvData } from "../Api's URL/apiUrl";
import { api_key, moviesdata, tvData } from "../api's_URL/apiUrl";

async function apiHandler({ method, search, isAbsoluteURL, absoluteURL }) {
  const url = isAbsoluteURL
    ? absoluteURL
    : "https://api.themoviedb.org/3/movie";

  if (method === "GET") {
    try {
      const response = await axios.get(`${url}/${search}?api_key=${api_key}`);
      if (response) {
        return response;
      }
    } catch (error) {}
  } else if (method === "moviesData") {
    try {
      const response = await axios.get(`${moviesdata}=${search}`);
      if (response) {
        return response;
      }
    } catch (error) {}
  } else if (method === "tvData") {
    try {
      const response = await axios.get(`${tvData}=${search}`);
      if (response) {
        return response;
      }
    } catch (error) {}
  }
}

export { apiHandler };
