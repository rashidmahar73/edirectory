import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Spin, Switch } from "antd";

import { Lists, Header, Trends } from "../../packages";

import { useFetchHook } from "../../utils/hooks";
import { moviesdata } from "../../utils/api's_URL/apiUrl";

import styles from "./styles.module.scss";

const Dashboard = () => {
  const [movieDataId, setMovieDataId] = useState();
  const [variable, setVariable] = useState();
  const [trendingKey, setTrendingKey] = useState("day");

  const location = useLocation();
  const navigate = useNavigate();

  const [
    MoviesListHandler,
    { isLoading: moviesListLoading, data: moviesListData, moviesListError },
  ] = useFetchHook({
    method: "GET",
    search: location?.state !== null ? location?.state?.id : 28,
    isAbsoluteURL: true,
    absoluteURL: moviesdata,
  });
  // uptwos

  useLayoutEffect(() => {
    const firstMovieObjId = moviesListData?.results
      ?.slice(0, 1)
      .find((elem) => elem?.id);
    if (!movieDataId) {
      setMovieDataId(firstMovieObjId?.id);
    } else if (!variable) {
      setVariable(moviesListData);
    }
  }, [moviesListData]);

  const [
    TrendinglHandle,
    { isLoading: trendingLoading, data: trendingData, error: trendingError },
  ] = useFetchHook({
    method: "GET",
    search: trendingKey,
    absoluteURL: "https://api.themoviedb.org/3/trending/movie",
    isAbsoluteURL: true,
  });

  useEffect(() => {
    MoviesListHandler();
  }, [movieDataId]);

  useEffect(() => {
    TrendinglHandle();
  }, [trendingKey]);

  const selectedMovie = useMemo(
    () => variable?.results?.filter((item) => item.id === movieDataId),
    [variable, movieDataId]
  );

  const onChangeHandler = (id, movieData) => {
    setMovieDataId(id);
    const filtered = movieData?.filter((item) => item.id === id);

    localStorage.setItem("movieid", id);
    navigate(`/${id}/overview`, {
      state: {
        selectedVideo: filtered || [],
        videoId: id,
      },
    });
  };

  const handleChangeSwitch = (checked) => {
    if (checked) return setTrendingKey("day");
    return setTrendingKey("week");
  };

  return (
    <div className={styles.dashboardContainer}>
      <Spin size="large" spinning={moviesListLoading}>
        <Header selected={selectedMovie || []} id={movieDataId} />

        {/* day week Switch case */}
        <div style={{ margin: "0px 20px" }}>
          <Switch
            checkedChildren="Day"
            unCheckedChildren="This Week"
            loading={trendingLoading}
            style={{
              marginBottom: "15px",
              marginTop: "15px",
            }}
            defaultChecked
            onChange={(checked) => handleChangeSwitch(checked)}
          />
          <Spin size="large" spinning={trendingLoading}>
            <Lists
              data={trendingData?.results || []}
              onChangeHandler={onChangeHandler}
            />
          </Spin>

          <Trends onChangeHandler={onChangeHandler} />
        </div>
      </Spin>
    </div>
  );
};
export { Dashboard };
