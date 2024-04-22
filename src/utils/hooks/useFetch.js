import { useEffect, useState } from "react";

import { apiHandler } from "../handlers/apiHandler";

export default function useFetchHook({
  method,
  search,
  absoluteURL,
  isAbsoluteURL,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(undefined);
  const [error, setError] = useState({});
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      setIsLoading(true);
      const { data } = await apiHandler({
        method,
        search,
        isAbsoluteURL,
        absoluteURL,
      });
      const condition = data === undefined ? [] : data;
      setData(condition);

      return data;
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }
  return [getData, { isLoading, data, error }];
}
