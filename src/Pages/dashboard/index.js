import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import "./dashboard.scss";
import { Select, Row, Col, Spin, Tabs, Switch } from "antd";
import useFetchHook from "../../utils/useFetch";
import { useLocation } from "react-router-dom";
import useLazyFetch from "../../utils/useLazyFetch";
import {
  CardComponent,
  TabsComp,
  TypesComp,
  Header,
  SideContent,
} from "../../Components";

const Dashboard = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [genereIdValue, setGenreIdValue] = useState(
    location?.state !== null ? location?.state?.id : 28
  );
  const [movieDataId, setMovieDataId] = useState();
  const [video, setVideo] = useState(false);
  const [open, setOpen] = useState(false);
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
  ] = useLazyFetch({ endpoint: 0, method: "moviesData" });

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

  const conditional = dataGenres === undefined ? [] : dataGenres;
  const genreIds = conditional?.genres?.map((item) => {
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
  const filtered = useMemo(() => {
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

  // Plus above api for budgetrevenue is also
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const latestData = [
    {
      key: "1",
      label: "Now Playing",
      children: (
        <>
          <Spin size="large" spinning={nowPlayingLoading}>
            <TypesComp
              show={show}
              moviesListData={nowPlayingData}
              setMovieDataId={setMovieDataId}
              setVariable={setVariable}
              setShow={setShow}
              setKey={setKey}
            />
          </Spin>
        </>
      ),
    },
    {
      key: "2",
      label: <p>Popular</p>,
      children: (
        <>
          <Spin size="large" spinning={popularLoading}>
            <TypesComp
              typeString={"popular"}
              Handler={PopularHandle}
              show={show}
              moviesListData={popularData}
              setMovieDataId={setMovieDataId}
              setVariable={setVariable}
              setShow={setShow}
              setKey={setKey}
            />
          </Spin>
        </>
      ),
    },
    {
      key: "3",
      label: <p>Top Rated</p>,
      children: (
        <>
          <Spin size="large" spinning={topRatedLoading}>
            <TypesComp
              typeString={"top-rated"}
              Handler={TopRatedHandle}
              show={show}
              moviesListData={topRatedData}
              setMovieDataId={setMovieDataId}
              setVariable={setVariable}
              setShow={setShow}
              setKey={setKey}
            />
          </Spin>
        </>
      ),
    },
    {
      key: "4",
      label: <p>Upcoming</p>,
      children: (
        <>
          <Spin size="large" spinning={upcomingLoading}>
            <TypesComp
              typeString={"upcoming"}
              Handler={UpcomingHandle}
              show={show}
              moviesListData={upcomingData}
              setMovieDataId={setMovieDataId}
              setVariable={setVariable}
              setShow={setShow}
              setKey={setKey}
            />
          </Spin>
        </>
      ),
    },
  ];
  const onChange = (key) => {
    setKey(key);
  };
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
  useEffect(() => {
    DetailslHandle();
    MoviesListHandler();
  }, [movieDataId]);
  useEffect(() => {
    TrendinglHandle();
  }, [trendingKey]);
  const objKey1 = {
    loading: movieDetailsLoading,
    data: movieDetailsData,
    setUpdate: setShow,
  };
  const objKey2 = {
    loading: videosLoadingState,
    data: videosData,
    setModalUpdate: showModal,
    setVideoUpdate: setVideo,
    handle: handleCancel,
  };
  const objKey3 = { loading: imagesLoadingState, data: imagesData };
  return (
    <React.Fragment>
      <div className="dashboard-Container">
        <Spin size="large" spinning={moviesListLoading}>
          <Header
            filtered={filtered || []}
            movieDetailsData={movieDetailsData}
            movieDataId={movieDataId}
          />
          <div className="select-category">
            <Select
              defaultValue="Action"
              style={{
                width: 120,
              }}
              onChange={(value) => handleGenreChange(value)}
              options={genreIds}
            />
          </div>
        </Spin>
        <Spin size="large" spinning={moviesListLoadinglazy}>
          <TypesComp
            show={show}
            moviesListData={moviesListData || {}}
            setMovieDataId={setMovieDataId}
            setVariable={setVariable}
            setShow={setShow}
            setKey={setKey}
          />
        </Spin>
        <Switch
          checkedChildren="Day"
          unCheckedChildren="This Week"
          loading={trendingLoading}
          style={{ marginBottom: "15px", marginTop: "15px" }}
          defaultChecked
          onChange={(checked) => handleChangeSwitch(checked)}
        />
        <Spin size="large" spinning={trendingLoading}>
          <TypesComp
            show={show}
            moviesListData={trendingData}
            setMovieDataId={setMovieDataId}
            setVariable={setVariable}
            setShow={setShow}
            setKey={setKey}
          />
        </Spin>
        <Row style={{ display: show ? "none" : "flex" }}>
          <Col xl={24}>
            <Tabs activeKey={key} items={latestData} onChange={onChange} />
          </Col>
        </Row>
        <Spin size="large" spinning={moviesListLoading}>
          <Row style={{ display: show ? "flex" : "none" }}>
            <Col xl={4}>
              <SideContent
                moviesListLoading={moviesListLoading}
                filtered={filtered}
                show={show}
              />
            </Col>
            <Col xl={19}>
              <TabsComp
                key={key}
                contentKey={"side-content"}
                onChange={onchange}
                objKey1={objKey1}
                objKey2={objKey2}
                objKey3={objKey3}
                video={video}
                open={open}
                Handler={{ videosFun: VideosHandle, imagesFun: ImagesHandle }}
              />
            </Col>
          </Row>
        </Spin>
      </div>
    </React.Fragment>
  );
};
export { Dashboard };
