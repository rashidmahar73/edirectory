import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Select, Row, Col, Spin, Switch } from "antd";

import { Lists, Header } from "../../packages";
import { Tabs } from "../../Components";

import { useFetchHook, useLazyHook } from "../../utils/hooks";
import { moviesdata } from "../../utils/api's_URL/apiUrl";

import styles from "./styles.module.scss";

const Dashboard = () => {
  const location = useLocation();
  const [genereIdValue, setGenreIdValue] = useState(
    location?.state !== null ? location?.state?.id : 28
  );
  const [movieDataId, setMovieDataId] = useState();
  const [variable, setVariable] = useState();
  const [key, setKey] = useState("1");
  const [trendingKey, setTrendingKey] = useState("day");

  const navigate = useNavigate();
  // Below Need to set
  const [
    MoviesListHandler,
    { isLoading: moviesListLoading, data: moviesListData, moviesListError },
  ] = useFetchHook({
    method: "GET",
    search: genereIdValue,
    isAbsoluteURL: true,
    absoluteURL: moviesdata,
  });

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
    GenreHandle,
    { isLoading: genreLoading, data: dataGenres, error: genreError },
  ] = useFetchHook({
    method: "GET",
    search: "https://api.themoviedb.org/3/genre/movie/list",
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

  const genreIds = dataGenres?.genres?.map((item) => {
    const copyObj = { ...item };
    copyObj.value = item.id;
    copyObj.label = item.name;
    delete copyObj.id;
    delete copyObj.name;
    return copyObj;
  });

  const [
    TrendinglHandle,
    { isLoading: trendingLoading, data: trendingData, error: trendingError },
  ] = useFetchHook({
    method: "GET",
    search: trendingKey,
    absoluteURL: "https://api.themoviedb.org/3/trending/movie",
    isAbsoluteURL: true,
  });

  const [
    DetailslHandle,
    {
      isLoading: movieDetailsLoading,
      data: movieDetailsData,
      error: movieDetailserror,
    },
  ] = useFetchHook({
    method: "GET",
    search: movieDataId,
  });

  useEffect(() => {
    if (key === "upcoming") {
      UpcomingHandle();
    } else if (key === "topRated") {
      TopRatedHandle();
    } else if (key === "popular") {
      PopularHandle();
    }
  }, [key]);

  useEffect(() => {
    DetailslHandle();
    MoviesListHandler();
  }, [movieDataId]);

  useEffect(() => {
    TrendinglHandle();
  }, [trendingKey]);

  const selectedMovie = useMemo(() => {
    return variable?.results?.filter((item) => {
      if (item.id === movieDataId) {
        return item;
      }
    });
  }, [variable, movieDataId]);

  const onChangeHandler = (id, movieData) => {
    setMovieDataId(id);
    const filtered = movieData?.filter((item) => {
      if (item.id === id) {
        return item;
      }
    });

    localStorage.setItem("movieid", id);
    navigate(`/${id}/detail`, {
      state: {
        selectedVideo: filtered || [],
        videoId: id,
      },
    });
  };
  const dashboardTabs = [
    {
      key: "nowPlaying",
      label: "Now Playing",
      children: (
        <Spin size="large" spinning={nowPlayingLoading}>
          <Lists
            data={nowPlayingData?.results || []}
            onChangeHandler={onChangeHandler}
          />
        </Spin>
      ),
    },
    {
      key: "popular",
      label: <p>Popular</p>,
      children: (
        <Spin size="large" spinning={popularLoading}>
          <Lists
            data={popularData?.results || []}
            onChangeHandler={onChangeHandler}
          />
        </Spin>
      ),
    },
    {
      key: "topRated",
      label: <p>Top Rated</p>,
      children: (
        <Spin size="large" spinning={topRatedLoading}>
          <Lists
            data={topRatedData?.results || []}
            onChangeHandler={onChangeHandler}
          />
        </Spin>
      ),
    },
    {
      key: "upcoming",
      label: <p>Upcoming</p>,
      children: (
        <>
          <Spin size="large" spinning={upcomingLoading}>
            <Lists
              data={upcomingData?.results || []}
              onChangeHandler={onChangeHandler}
            />
          </Spin>
        </>
      ),
    },
  ];

  const onTabsChange = (currentKey) => setKey(currentKey);

  const handleGenreChange = async (value) => {
    setGenreIdValue(value);
    const updatedMovieListData = await MoviesListHandlerWithParams(value);
    const firstMovieObjId = updatedMovieListData?.results
      ?.slice(0, 1)
      .find((elem) => elem?.id);
    if (movieDataId) {
      setMovieDataId(firstMovieObjId?.id);
    } else {
      setMovieDataId(0);
    }
    setVariable(updatedMovieListData);
  };

  const handleChangeSwitch = (checked) => {
    if (checked === true) {
      setTrendingKey("day");
    } else if (checked === false) {
      setTrendingKey("week");
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <Spin size="large" spinning={moviesListLoading}>
        <Header
          selected={selectedMovie || []}
          data={movieDetailsData}
          id={movieDataId}
        />

        <div className={styles.selectCategory}>
          <Select
            defaultValue="Action"
            style={{
              width: 120,
            }}
            onChange={(value) => handleGenreChange(value)}
            options={genreIds || []}
          />
        </div>
      </Spin>
      {/* first movies sections */}

      <Spin size="large" spinning={moviesListLoadinglazy}>
        <Lists
          data={moviesListData?.results || []}
          onChangeHandler={onChangeHandler}
        />
      </Spin>
      {/* day week Switch case */}

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

      <Row>
        <Col xl={24}>
          <Tabs items={dashboardTabs} onChange={onTabsChange} />
        </Col>
      </Row>
    </div>
  );
};
export { Dashboard };
