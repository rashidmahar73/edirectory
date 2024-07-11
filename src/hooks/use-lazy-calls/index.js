import { moviesdata } from "../../utils/api's_URL/apiUrl";
import { useLazyHook } from "../../utils/hooks";

function useLazyCalls() {
  const [
    MoviesListHandlerWithParams,
    {
      isLoading: moviesListLoadinglazy,
      data: moviesListDatalazy,
      movieListErrorlazy,
    },
  ] = useLazyHook({
    method: "GET",
    search: "",
    isAbsoluteURL: true,
    absoluteURL: moviesdata,
  });
  const [
    PopularHandle,
    { isLoading: popularLoading, data: popularData, error: popularError },
  ] = useLazyHook({
    method: "GET",
    search: "popular",
  });

  const [
    TopRatedHandle,
    { isLoading: topRatedLoading, data: topRatedData, error: topRatedError },
  ] = useLazyHook({
    method: "GET",
    search: "top_rated",
  });

  const [
    UpcomingHandle,
    { isLoading: upcomingLoading, data: upcomingData, error: upcomingError },
  ] = useLazyHook({
    method: "GET",
    search: "upcoming",
  });
  return {
    handlers: {
      UpcomingHandle,
      TopRatedHandle,
      PopularHandle,
      MoviesListHandlerWithParams
    },
    data:{
        popularData,
        topRatedData,
        upcomingData
    }
  };
}
export { useLazyCalls };
