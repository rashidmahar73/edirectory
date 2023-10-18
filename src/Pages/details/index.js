import React, { useState, useMemo, useEffect, useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Button, Space, Card, Tabs } from "antd";
import ReactPlayer from "react-player";
import moment from "moment";
import useFetchHook from "../../utils/useFetch";
import { CardComponent, ModalComp } from "../../Components";
import "./details.scss";
export function MovieDetails() {

  const [video, setVideo] = useState(false);
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState("1");
  const [updatedIndex, setUpdatedIndex] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { movieDetailsData, movieDataId } = location?.state;
  const trailerBaseURl = "http://www.youtube.com/watch?v=";

  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const [
    VideosHandle,
    { isLoading: videosLoading, data: videosData, error: videosError },
  ] = useFetchHook({
    endpoint: `https://api.themoviedb.org/3/movie/${movieDataId}/videos`,
    method: "GET",
  });
  const [
    CastCrewHandle,
    { isLoading: crewIsLoading, data: crewData, error: crewError },
  ] = useFetchHook({
    endpoint: `https://api.themoviedb.org/3/movie/${movieDataId}/credits`,
    method: "GET",
  });
  const [
    KeywordsHandle,
    { isLoading: keywordsLoading, data: keywordsData, error: keywordsError },
  ] = useFetchHook({
    endpoint: `https://api.themoviedb.org/3/movie/${movieDataId}/keywords`,
    method: "GET",
  });
  const [
    ReviewsHandle,
    { isLoading: reviewsLoading, data: reviewsData, error: reviewsError },
  ] = useFetchHook({
    endpoint: `https://api.themoviedb.org/3/movie/${movieDataId}/reviews`,
    method: "GET",
  });
  useEffect(() => {
    ReviewsHandle();
    const timerId = setInterval(
      () => setUpdatedIndex(updatedIndex + 1), // <-- increment index
      20000
    );
    return () => clearInterval(timerId);
  }, [updatedIndex]);
  // const customImagesVideos = useFetchHook({
  //   endpoint: `https://api.themoviedb.org/3/movie/${movieDataId}/changes`,
  //   method: "GET",
  // });
  // const filtered=crewData.crew?.sort((a,b)=>b.popularity-a.popularity);

  //  const customReleaseDatesforallcountry = useFetchHook({
  //   endpoint: `https://api.themoviedb.org/3/movie/${movieDataId}/release_dates`,
  //   method: "GET",
  // });

  // const customSimilarMoviesaccordingtoId = useFetchHook({
  //       endpoint: `https://api.themoviedb.org/3/movie/${movieDataId}/similar `,
  //       method: "GET",
  //     });
  // const customWatchProviders = useFetchHook({
  //           endpoint: `https://api.themoviedb.org/3/movie/${movieDataId}/watch/providers`,
  //           method: "GET",
  //         });
  // const customSearchMovies=axios.get("https://api.themoviedb.org/3/search/movie?query=Sound+of+Freedom&api_key=c12531a82a60035f2bcdef9bb2c8ff3c");

  // const customInstagramTwitter = useFetchHook({
  //   endpoint: `https://api.themoviedb.org/3/movie/${location?.state?.movieDataId}/external_ids`,
  //   method: "GET",
  // });
  // const customLatesMovies = useFetchHook({
  //   endpoint: `https://api.themoviedb.org/3/movie/latest`,
  //   method: "GET",
  // });
  const duration = moment.duration(movieDetailsData?.runtime, "minutes");
  const items = [
    {
      key: "1",
      label: "Reviews",
      children: (
        <>
          {updatedIndex !== undefined ? (
            <>
              {reviewsData?.results !== undefined &&
              reviewsData?.results.length > 0 ? (
                <>
                  {[
                    reviewsData?.results[
                      reviewsData?.results !== undefined
                        ? updatedIndex === reviewsData?.results?.length
                          ? setUpdatedIndex((updatedIndex) => {
                              if (updatedIndex) {
                                return (
                                  updatedIndex - reviewsData?.results?.length
                                );
                              }
                            })
                          : updatedIndex
                        : 0
                    ],
                  ]?.map((elem) => {
                    const stringPart = elem?.content.slice(0, 559);
                    const date = new Date(elem?.updated_at);
                    const monthNames = [
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ];
                    const year = date.getFullYear();
                    const datee = date.getDate();
                    const month = monthNames[date.getMonth()];
                    return (
                      <React.Fragment>
                        <div style={{height:"10vh"}}>
                        <p>
                          A review by {elem?.author} 
                          {elem?.author_details.rating} written by{" "}
                          {elem?.author} on {month} {datee} ,{year}
                          {stringPart} <a>Read More</a>
                        </p>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </>
              ) : (
                <React.Fragment>
                  <h1>There is no Reviews</h1>
                </React.Fragment>
              )}
            </>
          ) : (
            <React.Fragment/>
          )}
        </>
      ),
    },
    { key: "2", label: "Discussions", children: "" },
  ];
  const baseURl = "https://image.tmdb.org/t/p/original/";
  const onChange = (key) => {
    setKey(key);
  };

  return (
    <React.Fragment>
      <Row>
        <Col lg={24} md={24} xl={24}>
          {movieDetailsData !== undefined ? (
            <>
              <React.Fragment>
                <Row
                  className="img"
                  style={{
                    backgroundImage: `url(${
                      baseURl + movieDetailsData.backdrop_path
                    })`,
                    // backgroundSize: ,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // objectFit:"contain"
                  }}
                >
                  <Col xl={3} />
                  <Col lg={4} md={8}>
                    <CardComponent
                      cardComp={"head-card-details"}
                      width={250}
                      item={movieDetailsData}
                      handleChange={() => {}}
                    />
                  </Col>
                  <Col lg={14} md={14}>
                    <span>
                      <h1 style={{ color: "white" }}>
                        {movieDetailsData?.original_title}{" "}
                        {new Date(movieDetailsData.release_date).getFullYear()}
                      </h1>
                      <h3 style={{ color: "white" }}>
                        {moment(movieDetailsData?.release_date).format("DD:MM")}
                        <span style={{ paddingLeft: "10px" }}>
                          {" "}
                          {`${duration._data.hours}hr:${duration._data.minutes}m`}
                        </span>
                        {movieDetailsData?.genres.map((item, index) => {
                          return (
                            <>
                              <Button
                                key={index}
                                style={{
                                  border: "none",
                                  background: "none",
                                  color: "white",
                                }}
                                onClick={() => {
                                  return (
                                    localStorage.setItem("genreId", item?.id),
                                    // localStorage.setItem("genreId", item?.id),
                                    navigate(`/dashboard/${item?.id}`, {
                                      state: { id: item?.id },
                                    })
                                  );
                                }}
                              >
                                {item.name}
                              </Button>
                            </>
                          );
                        })}
                        {videosData?.results !== undefined ? (
                          <>
                            {videosData?.results
                              .filter(
                                (elem) => elem.name === "Official Trailer"
                              )
                              .map((elem) => {
                                return (
                                  <React.Fragment>
                                    <Col xl={6}>
                                      <Button
                                        type="primary"
                                        style={{
                                          color: "white",
                                        }}
                                        onClick={() => {
                                          return showModal(), setVideo(true);
                                        }}
                                      >
                                        Trailer
                                      </Button>

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
                        <p>Overview</p>
                        <p>{movieDetailsData?.overview}</p>
                        <Row>
                          {crewData?.crew !== undefined ? (
                            <>
                              {crewData.crew
                                .filter(
                                  (elem) =>
                                    elem.job === "Characters" ||
                                    elem.job === "Director" ||
                                    (elem.job === "Writer" && elem)
                                )
                                ?.map((elem) => {
                                  return (
                                    <React.Fragment>
                                      <Col lg={8} md={8} sm={8}>
                                        {elem?.name}
                                        <span>
                                          <br /> {elem?.job}
                                        </span>
                                      </Col>
                                    </React.Fragment>
                                  );
                                })}
                            </>
                          ) : (
                            <React.Fragment />
                          )}
                        </Row>
                      </h3>
                    </span>
                  </Col>
                  <Col xl={3} />
                </Row>
              </React.Fragment>
            </>
          ) : (
            <></>
          )}
        </Col>
      </Row>
      <Row>
        <Col lg={1} />
        <Col lg={3}>
          <h2>Top Billed Cast</h2>
        </Col>
        <Col lg={16} />
        <Col lg={4}>
        
        </Col>
      </Row>
      <Row>
        <Col lg={1} />
        <Col lg={17}>
          <Row>
            <Col lg={24}>
              <div className="scrolling-wrapper">
                {crewData?.cast !== undefined ? (
                  <>
                    {crewData?.cast?.slice(0, 9)?.map((elem) => {
                      return (
                        <React.Fragment>
                          <Col xl={3}>
                            <CardComponent
                              cardComp={"movieCast"}
                              width={130}
                              item={elem}
                              handleChange={() => {}}
                            />
                          </Col>
                        </React.Fragment>
                      );
                    })}
                  </>
                ) : (
                  <React.Fragment />
                )}

                <Card style={{ width: 130, border: "none" }}>
                  <Space
                    direction="vertical"
                    className="vertical-center"
                    style={{ width: "100%" }}
                  >
                    <Button style={{ border: "none" }} block>
                      View More
                      
                    </Button>
                  </Space>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>
        <Col lg={6}>
          <ul
            style={{
              listStyleType: "none",
              lineHeight: "29px",
              fontWeight: "10px",
            }}
          >
            {movieDetailsData !== undefined ? (
              <>
                <li>
                  <b>Status</b>
                </li>
                <li>{movieDetailsData?.status}</li>
                <li>
                  <b>Original Language </b>
                </li>
                <li>{movieDetailsData?.spoken_languages[0]?.name}</li>
                <li>
                  <b>Budget</b>
                </li>
                <li>{movieDetailsData?.budget}</li>
                <li>
                  <b>Revenue</b>
                </li>
                <li>{movieDetailsData?.revenue}</li>
              </>
            ) : (
              <React.Fragment />
            )}
            <li>
              <b>Keywords</b>
            </li>
            <div>
              {keywordsData?.keywords !== undefined ? (
                <>
                  {keywordsData?.keywords?.map((elem) => {
                    return (
                      <React.Fragment>
                        <Button
                          className="keyWordsBtn"
                          style={{ backgroundColor: "lightgray" }}
                        >
                          {elem.name}
                        </Button>
                      </React.Fragment>
                    );
                  })}
                </>
              ) : (
                <React.Fragment />
              )}
            </div>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col lg={1} />
        <Col lg={17}>
          <div>
            <h2>Social</h2>
            <Tabs activeKey={key} items={items} onChange={onChange} />
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}
