import { useState } from "react";

import { apiHandler } from "../handlers/apiHandler";

export default function useLazyHook({ method, search }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState({});
  async function getData(id) {
    let intialApiResponse = null;

    try {
      setIsLoading(true);
      const { data } = await apiHandler({ method, search });
      setData(data);
      intialApiResponse = data;
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
    return intialApiResponse;
  }
  return [getData, { isLoading, data, error }];
}
