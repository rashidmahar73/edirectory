import { useEffect, useState } from "react";
import ApiHandlerV2 from "./ApiHandlerV2";

export default function useFetchHook({ method, endpoint }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState({});
  useEffect(() => {
    ApiHandler();
  }, []);
  async function ApiHandler() {
    try {
      setIsLoading(true);
      const { data } = await ApiHandlerV2({ method, endpoint });
      const condition = data === undefined ? [] : data;
      setData(condition);

      return data;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }
  return [ApiHandler, { isLoading, data, error }];
}
