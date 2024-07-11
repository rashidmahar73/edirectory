import { useFetchHook } from "../../utils/hooks";

function useFetchCalls() {
  const [
    GenreHandle,
    { isLoading: genreLoading, data: dataGenres, error: genreError },
  ] = useFetchHook({
    method: "genreList",
    absoluteURL: "https://api.themoviedb.org/3/genre/movie/list",
    isAbsoluteURL: true,
  });

  const [
    NowPlayingHandle,
    {
      isLoading: nowPlayingLoading,
      data: nowPlayingData,
      error: nowPlayingError,
    },
  ] = useFetchHook({
    method: "GET",
    search: "now_playing",
  });

  return {
    dataGenres,
    nowPlayingData,
  };
}

export { useFetchCalls };
