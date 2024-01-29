import React, { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { Select, Row, Col, Spin, Button, Tabs, Image, Progress } from "antd";
import useFetchHook from "../../utils/useFetch";
import moment from "moment/moment";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import useLazyFetch from "../../utils/useLazyFetch";
import { ModalComp, CardComponent } from "../../Components";

const TvSeries = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [genereIdValue, setGenreIdValue] = useState(
    location?.state !== null ? location?.state?.id : 10759
  );
  const [movieDataId, setMovieDataId] = useState();
  const [video, setVideo] = useState(false);
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState("1");
  const navigate = useNavigate();
  const [
    MoviesListHandler,
    { isLoading: moviesListLoading, data: moviesListData, moviesListError },
  ] = useFetchHook({ endpoint: genereIdValue, method: "tvData" });
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
    }
  }, [moviesListData]);

  const [
    Handle,
    { isLoading: genreLoadingState, data: datagenres, error: genreErrorState },
  ] = useFetchHook({
    endpoint: "https://api.themoviedb.org/3/genre/tv/list",
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

  const conditional = datagenres === undefined ? [] : datagenres;
  const genreIds = conditional?.genres?.map((item) => {
    const copyObj = { ...item };
    copyObj.value = item.id;
    copyObj.label = item.name;
    delete copyObj.id;
    delete copyObj.name;
    return copyObj;
  });

  const filtered = useMemo(() => {
    return moviesListData?.results?.filter((item) => {
      if (item.id === movieDataId) {
        return item;
      }
    });
  }, [moviesListData, movieDataId]);
  const [
    DetailslHandle,
    {
      isLoading: detailsLoadingState,
      data: movieDetailsData,
      error: movieDetailserror,
    },
  ] = useFetchHook({
    endpoint: `https://api.themoviedb.org/3/tv/${movieDataId}`,
    method: "GET",
  });
  // Plus above api for budgetrevenue is also
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const baseURl = "https://image.tmdb.org/t/p/original/";
  const duration = moment.duration(movieDetailsData?.runtime, "minutes");
  const trailerBaseURl = "http://www.youtube.com/watch?v=";
  const items = [
    {
      key: "1",
      label: "Overview",
      children: (
        <>
          <Spin size="large" spinning={detailsLoadingState}>
            <span className="overview-container">
              <Row>
                <Col xl={24}>
                  <a href="https://www.equalizer.movie" className="title">
                    {movieDetailsData?.name}
                  </a>
                  <div className="second-head">
                    <p className="text">
                      {moment(movieDetailsData?.release_date).format("DD:MM")}
                    </p>
                    <p className="sub-text-1">
                      {`${duration._data.hours}hr:${duration._data.minutes}m`}
                    </p>
                    {movieDetailsData?.genres?.map((elem) => {
                      return <p className="sub-text-1">{elem?.name}</p>;
                    })}
                  </div>
                  <div className="third-div">
                    <p className="text">{movieDetailsData?.tagline}</p>
                    <h1 className="overview-head">Overview</h1>
                    <p className="text">{movieDetailsData?.overview}</p>
                  </div>
                  <Row className="table">
                    <Col xl={4}>
                      <h1 className="head">Spoken Languages</h1>
                    </Col>
                    <Col xl={1} />
                    <Col xl={4}>
                      <h1 className="head">Adult</h1>
                    </Col>
                    <Col xl={1} />
                    <Col xl={4}>
                      <h1 className="head">Status</h1>
                    </Col>
                    <Col xl={1} />
                    <Col xl={4}>
                      <h1 className="head">Vote Average</h1>
                    </Col>
                    <Col xl={1} />
                    <Col xl={4}>
                      <h1 className="head">Vote Count</h1>
                    </Col>
                  </Row>
                  <Row className="table">
                    <Col xl={4}>
                      <span style={{ display: "flex" }}>
                        {movieDetailsData?.spoken_languages?.map((elem) => {
                          return <h2 className="inner-text">{elem.name}</h2>;
                        })}
                      </span>
                    </Col>
                    <Col xl={1} />
                    <Col xl={4}>
                      <h2 className="inner-text">
                        {movieDetailsData?.adult === false
                          ? "Not for Adult"
                          : "For Adult Also"}
                      </h2>
                    </Col>
                    <Col xl={1} />
                    <Col xl={4}>
                      <h2 className="inner-text">{movieDetailsData?.status}</h2>
                    </Col>
                    <Col xl={1} />
                    <Col xl={4}>
                      <Progress
                        type="circle"
                        style={{ width: "10px", height: "10px" }}
                        percent={movieDetailsData?.vote_average}
                      />
                    </Col>
                    <Col xl={1} />
                    <Col xl={4}>
                      <h2 className="inner-text">
                        {movieDetailsData?.vote_count}
                      </h2>
                    </Col>
                  </Row>
                  <div className="fourth-div">
                    <h1 className="head">Production Companies</h1>
                    <div className="inner-div">
                      {movieDetailsData?.production_companies?.map((elem) => {
                        return (
                          <React.Fragment>
                            {elem?.logo_path !== null ? (
                              <>
                                <img
                                  src={`${baseURl}${elem?.logo_path}`}
                                  alt="logo-not-available"
                                  style={{
                                    width: "3%",
                                    height: "40px",
                                    borderRadius: "100%",
                                  }}
                                />
                              </>
                            ) : (
                              <React.Fragment />
                            )}
                            <h2>{elem?.origin_country}</h2>
                            <h2>{elem?.name}</h2>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  {/* <p>{movieDetailsData?.belongs_to_collection?.name}</p>
              <img
                src={`${baseURl}${movieDetailsData?.belongs_to_collection.poster_path}`}
                style={{ width: "100%", height: "40%" }}
              /> */}
                </Col>
              </Row>
            </span>
          </Spin>
        </>
      ),
    },
    {
      key: "2",
      label: <p onClick={() => VideosHandle()}>Videos</p>,
      children: (
        <>
          <Spin size="large" spinning={videosLoadingState}>
            <Row>
              <Col xl={24}>
                <div className="card-main-div">
                  {videosData?.results !== undefined ? (
                    <>
                      {videosData?.results.slice(0, 4).map((elem) => {
                        return (
                          <React.Fragment>
                            <Col xl={6}>
                              <ReactPlayer
                                width={350}
                                height={300}
                                url={trailerBaseURl + elem.key}
                                onClick={() => {
                                  return showModal(), setVideo(true);
                                }}
                              />
                              {video && (
                                <ModalComp
                                  title={"PlayTrailer"}
                                  open={open}
                                  handleCancel={handleCancel}
                                  width={1000}
                                  height={200}
                                  footer={null}
                                >
                                  <ReactPlayer
                                    width={950}
                                    height={500}
                                    url={trailerBaseURl + elem.key}
                                  />
                                </ModalComp>
                              )}
                            </Col>
                          </React.Fragment>
                        );
                      })}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </Col>
            </Row>
          </Spin>
        </>
      ),
    },
    {
      key: "3",
      label: <p onClick={() => ImagesHandle()}>Photos</p>,
      children: (
        <>
          <Spin size="large" spinning={imagesLoadingState}>
            <Row>
              <Col xl={24}>
                <div className="card-main-div">
                  {imagesData?.backdrops !== undefined ? (
                    <>
                      {imagesData?.backdrops.slice(0, 4).map((elem) => {
                        return (
                          <React.Fragment>
                            <Col xl={6}>
                              <div>
                                <Image
                                  style={{ width: "90%", height: "90%" }}
                                  src={`${baseURl}${elem.file_path}`}
                                />
                              </div>
                            </Col>
                          </React.Fragment>
                        );
                      })}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </Col>
            </Row>
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
    }
  };
  useEffect(() => {
    DetailslHandle();
    MoviesListHandler();
  }, [movieDataId]);
  return (
    <React.Fragment>
      <div className="dashboard-Container">
        <Spin size="large" spinning={moviesListLoading}>
          <Row style={{ height: "35vh" }}>
            {filtered !== undefined ? (
              filtered.map((elem) => {
                const { name, backdrop_path, overview } = elem;
                return (
                  <React.Fragment>
                    <Col lg={16}>
                      <div className="mainDivHeader">
                        <h1 className="mainTitleHeading">{name}</h1>
                        <h4 className="mainTitleHeading">{overview}</h4>
                        <Button
                          type="primary"
                          onClick={() => {
                            localStorage.setItem("movieid", elem?.id);
                            return navigate(`/${elem?.id}/details`, {
                              state: {
                                movieDataId: movieDataId,
                                movieDetailsData:
                                  movieDetailsData !== undefined
                                    ? movieDetailsData
                                    : {},
                              },
                            });
                          }}
                        >
                          More Details
                        </Button>
                      </div>
                    </Col>
                    <Col lg={8}>
                      <div className="header-img-div">
                        <img
                          className="img-fluid header-img"
                          src={`${baseURl}${backdrop_path}`}
                          alt="head"
                        />
                      </div>
                    </Col>
                  </React.Fragment>
                );
              })
            ) : (
              <React.Fragment>
                <h2>Fetching Data ....</h2>
              </React.Fragment>
            )}
          </Row>
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
          <Row style={{ display: show ? "none" : "flex" }}>
            <Col xl={24}>
              <div className="card-main-div">
                {moviesListData !== undefined ? (
                  moviesListData?.results?.map((item) => {
                    const handleChange = () => {
                      setMovieDataId(item.id);
                      setShow(true);
                      setKey("1");
                    };
                    return (
                      <React.Fragment>
                        <Col xl={3}>
                          <CardComponent
                            cardComp={"tv-series"}
                            width={160}
                            item={item}
                            handleChange={handleChange}
                          />
                        </Col>
                      </React.Fragment>
                    );
                  })
                ) : (
                  <React.Fragment>
                    <h2>No Movies List Data</h2>
                  </React.Fragment>
                )}
              </div>
            </Col>
          </Row>
        </Spin>
        <Spin size="large" spinning={moviesListLoading}>
          <Row style={{ display: show ? "flex" : "none" }}>
            <Col xl={4}>
              <div className="card-main-div">
                {filtered !== undefined ? (
                  filtered?.map((elem) => {
                    return (
                      <React.Fragment>
                        <CardComponent
                          cardComp={"filtered"}
                          width={200}
                          item={elem}
                          handleChange={() => {}}
                        />
                      </React.Fragment>
                    );
                  })
                ) : (
                  <React.Fragment>
                    <h2>No Filtered Data</h2>
                  </React.Fragment>
                )}
              </div>
            </Col>
            <Col xl={19}>
              <Tabs activeKey={key} items={items} onChange={onChange} />
              <Button type="primary" onClick={() => setShow(false)}>
                SideContent
              </Button>
            </Col>
          </Row>
        </Spin>
      </div>
    </React.Fragment>
  );
};
export { TvSeries };
