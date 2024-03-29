import React, { useState, useEffect, Fragment } from "react";

import { useLocation } from "react-router-dom";
import { Row, Col, Space, Tabs } from "antd";
import moment from "moment/moment";

import { Card, ConditionalRenderer, Button } from "../../Components";
import { Header } from "./header";
import {
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
  ArrowRightOutlined,
  StarFilled,
} from "@ant-design/icons";

import useFetchHook from "../../utils/useFetch";

import { baseURL } from "../../utils/constants";

import styles from "./styles.module.scss";

export function MovieDetails() {
  const [key, setKey] = useState("1");
  const [updatedIndex, setUpdatedIndex] = useState(0);
  const location = useLocation();
  const { movieDetailsData, movieDataId } = location?.state;

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

  const onChange = (key) => {
    setKey(key);
  };

  const listItems = [
    {
      title: "Status",
      value: movieDetailsData?.status,
    },
    {
      title: "Original Language",
      value: movieDetailsData?.spoken_languages[0]?.name,
    },
    {
      title: "Budget",
      value: movieDetailsData?.budget,
    },
    {
      title: "Revenue",
      value: movieDetailsData?.revenue,
    },
  ];
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
                        <div style={{ height: "13vh" }}>
                          <p style={{ margin: "0px" }}>
                            A review by {elem?.author} <StarFilled />{" "}
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
            <React.Fragment />
          )}
        </>
      ),
    },
    { key: "2", label: "Discussions", children: "" },
  ];

  return (
    <Fragment>
      <Row>
        <Col lg={24} md={24} xl={24}>
          <ConditionalRenderer condition={!!movieDetailsData}>
            <Row
              className={styles.headerParent}
              style={{
                backgroundImage: `url(${
                  baseURL.imageBaseURL + movieDetailsData.backdrop_path
                })`,
                // - 340px in calc
                // backgroundPosition: "left calc((50vw - 1120px) ) top",
              }}
            >
              <Header
                movieDetailsData={movieDetailsData}
                duration={duration}
                videosData={videosData}
                crewData={crewData}
              />
            </Row>
          </ConditionalRenderer>
        </Col>
      </Row>
      <div className={styles.content}>
        <Row>
          <Col lg={1} />
          <Col lg={3}>
            <h2>Top Billed Cast</h2>
          </Col>
          <Col lg={16} />
          <Col lg={4}>
            <Space>
              <FacebookFilled />
              <TwitterCircleFilled />
              <InstagramFilled />
            </Space>
          </Col>
        </Row>
        <Row>
          <Col lg={1} />
          <Col lg={17}>
            <Row>
              <div className={styles.scrollingWrapper}>
                <ConditionalRenderer condition={!!crewData?.cast}>
                  {crewData?.cast?.slice(0, 10)?.map((elem) => (
                    <ConditionalRenderer
                      condition={elem?.profile_path !== null}
                    >
                      <Col xxl={2} xl={4} lg={5} md={5} sm={5} xs={5}>
                        <Card item={elem}>
                          <Card.Cover path={elem?.profile_path} />
                        </Card>
                      </Col>
                    </ConditionalRenderer>
                  ))}
                </ConditionalRenderer>
                <Card
                  isMeta={true}
                  className={styles.billedCastBody}
                  width={130}
                >
                  <Card.Cover isModification>
                    <Button className={styles.viewMore}>
                      View More
                      <ArrowRightOutlined />
                    </Button>
                  </Card.Cover>
                </Card>
              </div>
            </Row>
            <h2>Social</h2>
            <Tabs activeKey={key} items={items} onChange={onChange} />
          </Col>
          <Col lg={6}>
            <ul className={styles.statsLists}>
              <ConditionalRenderer condition={!!movieDetailsData}>
                {listItems?.map(({ title, value }) => (
                  <>
                    <li>
                      <b>{title}</b>
                    </li>
                    <li>{value}</li>
                  </>
                ))}
              </ConditionalRenderer>
              <li>
                <b>Keywords</b>
              </li>
              <ConditionalRenderer condition={!!keywordsData?.keywords}>
                {keywordsData?.keywords?.map((elem) => (
                  <Button className={styles.keyWordsBtn}>{elem.name}</Button>
                ))}
              </ConditionalRenderer>
            </ul>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
}
