import {  useState } from "react";
import ApiHandlerV2 from "./ApiHandlerV2";
import ApiHandlerV3 from "./ApiHandlerV3";

export default function useLazyFetch({ method, endpoint }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([] | {});
  const [error, setError] = useState({});
  async function ApiHandler(id) {
    let intialApiResponse=null;
    const idUpdated=endpoint===0?id:endpoint;
    try {
      setIsLoading(true);
      const { data } = await ApiHandlerV3({ method, endpoint:idUpdated });
      const condition = data === undefined ? [] : data;
      setData(condition);
      intialApiResponse=data;
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
    return intialApiResponse;
  }
  return [ApiHandler, { isLoading, data, error }];
}
