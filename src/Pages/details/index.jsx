import React, { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Space, Tabs } from "antd";
import moment from "moment/moment";

import { Card, ConditionalRenderer, Button } from "../../Components";
import { DetailsHeader, Reviews } from "../../packages";
import {
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useFetchHook } from "../../utils/hooks";
import { baseURL } from "../../utils/constants";
import styles from "./styles.module.scss";

export function MovieDetails() {
  const [key, setKey] = useState("1");
  const [updatedIndex, setUpdatedIndex] = useState(0);

  const location = useLocation();
  const { videoDetails, videoId } = location?.state;

  const [
    VideosHandle,
    { isLoading: videosLoading, data: videosData, error: videosError },
  ] = useFetchHook({
    method: "GET",
    search: `${videoId}/videos`,
  });

  const [
    CastCrewHandle,
    { isLoading: crewIsLoading, data: crewData, error: crewError },
  ] = useFetchHook({
    method: "GET",
    search: `${videoId}/credits`,
  });
  const [
    KeywordsHandle,
    { isLoading: keywordsLoading, data: keywordsData, error: keywordsError },
  ] = useFetchHook({
    method: "GET",
    search: `${videoId}/keywords`,
  });
  const [
    ReviewsHandle,
    { isLoading: reviewsLoading, data: reviewsData, error: reviewsError },
  ] = useFetchHook({
    method: "GET",
    search: `${videoId}/reviews`,
  });

  useEffect(() => {
    ReviewsHandle();
    const timerId = setInterval(() => setUpdatedIndex(updatedIndex + 1), 20000);
    return () => clearInterval(timerId);
  }, [updatedIndex]);

  // const customImagesVideos = useFetchHook({
  //   method: "GET",
  //   search: `${videoId}/changes`,
  // });

  //  const customReleaseDatesforallcountry = useFetchHook({
  //   method: "GET",
  //   search: `${videoId}/release_dates`,
  // });

  // const customSimilarMoviesaccordingtoId = useFetchHook({
  //       method: "GET",
  //       search: `${videoId}/similar `,
  //     });

  // const customWatchProviders = useFetchHook({
  //           method: "GET",
  //           search: `${videoId}/watch/providers`,
  //         });
  // const customSearchMovies=axios.get("https://api.themoviedb.org/3/search/movie?query=Sound+of+Freedom&api_key=c12531a82a60035f2bcdef9bb2c8ff3c");

  // const customInstagramTwitter = useFetchHook({
  //   method: "GET",
  //   search: `${location?.state?.videoId}/external_ids`,
  // });

  // const customLatesMovies = useFetchHook({
  //   method: "GET",
  //   search: `latest`,
  // });

  const duration = moment.duration(videoDetails?.runtime, "minutes");

  const onChange = (key) => setKey(key);

  const listItems = [
    {
      title: "Status",
      value: videoDetails?.status,
    },
    {
      title: "Original Language",
      value: videoDetails?.spoken_languages[0]?.name,
    },
    {
      title: "Budget",
      value: videoDetails?.budget,
    },
    {
      title: "Revenue",
      value: videoDetails?.revenue,
    },
  ];

  const items = [
    {
      key: "1",
      label: "Reviews",
      children: (
        <Reviews
          updatedIndex={updatedIndex}
          setUpdatedIndex={setUpdatedIndex}
          reviewsData={reviewsData}
        />
      ),
    },
    { key: "2", label: "Discussions", children: "" },
  ];

  return (
    <Fragment>
      <Row>
        <Col lg={24} md={24} xl={24}>
          <ConditionalRenderer condition={!!videoDetails}>
            <Row
              className={styles.headerParent}
              style={{
                backgroundImage: `url(${
                  baseURL.imageBaseURL + videoDetails.backdrop_path
                })`,
              }}
            >
              <DetailsHeader
                data={videoDetails}
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
              <ConditionalRenderer condition={!!videoDetails}>
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
