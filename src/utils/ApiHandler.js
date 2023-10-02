import axios from "axios";
import { api_key, moviesdata, tokenURL } from "../Api's URL/apiUrl";

const ApiHandler = async (method, url) => {
  if (method === "GET") {
    try {
      const response = await axios.get(`${url}?api_key=${api_key}`);
      if(response){
        return response;
      }
      // const token = response.data.request_token;
      // localStorage.setItem("token", token);
      // window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/sign-Up`;
    } catch (error) {
      console.log(error);
    }
  }else if(method==="moviesData"){
    try {
      const response = await axios.get(`${moviesdata}=${url}`);
      if(response){
        return response;
      }
  }catch(error){
        
  }
};
}
export default ApiHandler;
