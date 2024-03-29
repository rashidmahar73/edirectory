import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";

import { useLocation } from "react-router-dom";
import { Select, Row, Col, Spin, Switch } from "antd";

import { Images, Videos, MovieSideDetail, MoviesList } from "../../packages";
import { TabsComp, Card } from "../../Components";
import { Header } from "./header";

import { useFetchHook, useLazyFetch } from "../../utils";

import "./dashboard.scss";

const Dashboard = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [genereIdValue, setGenreIdValue] = useState(
    location?.state !== null ? location?.state?.id : 28
  );
  const [movieDataId, setMovieDataId] = useState();
  const [variable, setVariable] = useState();
  const [key, setKey] = useState("1");
  const [trendingKey, setTrendingKey] = useState("day");

  const [
    MoviesListHandler,
    { isLoading: moviesListLoading, data: moviesListData, moviesListError },
  ] = useFetchHook({ endpoint: genereIdValue, method: "moviesData" });

  const [
    MoviesListHandlerWithParams,
    {
      isLoading: moviesListLoadinglazy,
      data: moviesListDatalazy,
      movieListErrorlazy,
    },
  ] = useLazyFetch({ endpoint: "", method: "moviesData" });

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
    endpoint: "https://api.themoviedb.org/3/genre/movie/list",
    method: "GET",
  });

  const [
    NowPlayingHandle,
    {
      isLoading: nowPlayingLoading,
      data: nowPlayingData,
      error: nowPlayingError,
    },
  ] = useFetchHook({
    endpoint: "https://api.themoviedb.org/3/movie/now_playing",
    method: "GET",
  });

  const [
    PopularHandle,
    { isLoading: popularLoading, data: popularData, error: popularError },
  ] = useLazyFetch({
    endpoint: "https://api.themoviedb.org/3/movie/popular",
    method: "GET",
  });

  const [
    TopRatedHandle,
    { isLoading: topRatedLoading, data: topRatedData, error: topRatedError },
  ] = useLazyFetch({
    endpoint: "https://api.themoviedb.org/3/movie/top_rated",
    method: "GET",
  });

  const [
    UpcomingHandle,
    { isLoading: upcomingLoading, data: upcomingData, error: upcomingError },
  ] = useLazyFetch({
    endpoint: "https://api.themoviedb.org/3/movie/upcoming",
    method: "GET",
  });

  const [
    VideosHandle,
    { isLoading: videosLoadingState, data: videosData, error: videosError },
  ] = useLazyFetch({
    endpoint: `https://api.themoviedb.org/3/movie/${movieDataId}/videos`,
    method: "GET",
  });

  const [
    ImagesHandle,
    { isLoading: imagesLoadingState, data: imagesData, error: imagesError },
  ] = useLazyFetch({
    endpoint: ` https://api.themoviedb.org/3/movie/${movieDataId}/images`,
    method: "GET",
  });

  const genreIds =
    dataGenres?.genres ||
    []?.map((item) => {
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
    endpoint: `https://api.themoviedb.org/3/trending/movie/${trendingKey}`,
    method: "GET",
  });

  const selectedMovie = useMemo(() => {
    return variable?.results?.filter((item) => {
      if (item.id === movieDataId) {
        return item;
      }
    });
  }, [variable]);

  const [
    DetailslHandle,
    {
      isLoading: movieDetailsLoading,
      data: movieDetailsData,
      error: movieDetailserror,
    },
  ] = useFetchHook({
    endpoint: `https://api.themoviedb.org/3/movie/${movieDataId}`,
    method: "GET",
  });

  useEffect(() => {
    if (key === "upcoming") {
      UpcomingHandle();
    } else if (key === "topRated") {
      TopRatedHandle();
    } else if (key === "popular") {
      PopularHandle();
    } else if (key === "videos") {
      VideosHandle();
    } else if (key === "posters") {
      ImagesHandle();
    }
  }, [key]);

  useEffect(() => {
    DetailslHandle();
    MoviesListHandler();
  }, [movieDataId]);

  useEffect(() => {
    TrendinglHandle();
  }, [trendingKey]);

  // Plus above api for budgetrevenue is also

  const handleChangeMovieList = (id) => {
    setMovieDataId(id);
    setVariable(moviesListData);
    setShow(true);
    setKey("1");
  };

  const onTabsChange = (currentKey) => setKey(currentKey);

  const dashboardTabs = [
    {
      key: "nowPlaying",
      label: "Now Playing",
      children: (
        <Spin size="large" spinning={nowPlayingLoading}>
          <MoviesList
            show={show}
            moviesListData={nowPlayingData}
            handleChangeMovieList={handleChangeMovieList}
          />
        </Spin>
      ),
    },
    {
      key: "popular",
      label: <p>Popular</p>,
      children: (
        <Spin size="large" spinning={popularLoading}>
          <MoviesList
            show={show}
            moviesListData={popularData}
            handleChangeMovieList={handleChangeMovieList}
          />
        </Spin>
      ),
    },
    {
      key: "topRated",
      label: <p>Top Rated</p>,
      children: (
        <Spin size="large" spinning={topRatedLoading}>
          <MoviesList
            show={show}
            moviesListData={topRatedData}
            handleChangeMovieList={handleChangeMovieList}
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
            <MoviesList
              show={show}
              moviesListData={upcomingData}
              handleChangeMovieList={handleChangeMovieList}
            />
          </Spin>
        </>
      ),
    },
  ];

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

  const siderTabsList = [
    {
      key: "1",
      label: "Overview",
      children: (
        <>
          {" "}
          <MovieSideDetail
            isLoading={movieDetailsLoading}
            data={movieDetailsData}
            setShow={setShow}
          />
        </>
      ),
    },
    {
      key: "videos",
      label: <p>Videos</p>,
      children: (
        <>
          {" "}
          <Videos isLoading={videosLoadingState} data={videosData || {}} />
        </>
      ),
    },
    {
      key: "posters",
      label: <p>Posters</p>,
      children: (
        <>
          {" "}
          <Images isLoading={imagesLoadingState} data={imagesData || {}} />
        </>
      ),
    },
  ];

  return (
    <div className="dashboard-Container">
      <Spin size="large" spinning={moviesListLoading}>
        <Header
          filtered={selectedMovie || []}
          movieDetailsData={movieDetailsData}
          movieDataId={movieDataId}
        />
        <div className="select-category">
          <Select
            defaultValue="Action"
            style={{
              width: 120,
              display: show ? "none" : "block",
            }}
            onChange={(value) => handleGenreChange(value)}
            options={genreIds}
          />
        </div>
      </Spin>
      {/* first movies sections */}
      <Spin size="large" spinning={moviesListLoadinglazy}>
        <MoviesList
          show={show}
          moviesListData={moviesListData || {}}
          handleChangeMovieList={handleChangeMovieList}
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
          display: show ? "none" : "block",
        }}
        defaultChecked
        onChange={(checked) => handleChangeSwitch(checked)}
      />
      <Spin size="large" spinning={trendingLoading}>
        <MoviesList
          show={show}
          moviesListData={trendingData}
          handleChangeMovieList={handleChangeMovieList}
        />
      </Spin>
      {/* -----day week Switch case */}
      <Row style={{ display: show ? "none" : "flex" }}>
        <Col xl={24}>
          <TabsComp key={key} data={dashboardTabs} onChange={onTabsChange} />
        </Col>
      </Row>
      {/* in case of single movie */}
      <Spin size="large" spinning={moviesListLoading}>
        <Row style={{ display: show ? "flex" : "none" }}>
          <Col xxl={4} xl={5} lg={6} md={7} >
            {selectedMovie?.map((elem) => (
              <Card
                width={210}
                item={elem}
                key={`selectedMovie-card-${elem.id}`}
              >
                <Card.Cover path={elem?.poster_path} />
              </Card>
            ))}
          </Col>
          <Col xxl={20} xl={19} lg={18} md={17} >
            <TabsComp key={key} data={siderTabsList} onChange={onTabsChange} />
          </Col>
        </Row>
      </Spin>
    </div>
  );
};
export { Dashboard };
