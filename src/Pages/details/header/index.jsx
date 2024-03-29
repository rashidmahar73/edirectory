import React from "react";

import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import {
  Card,
  ConditionalRenderer,
  VideoPlayer,
  Button,
} from "../../../Components";

import styles from "./styles.module.scss";

function Header({ movieDetailsData, duration, videosData, crewData }) {
  const navigate = useNavigate();

  function onClickHandler(item) {
    localStorage.setItem("genreId", item?.id);
    navigate(`/dashboard/${item?.id}`, {
      state: { id: item?.id },
    });
  }
  return (
    <>
      <Col xxl={3} xl={1} lg={0} md={0} />
      <div className={styles.detailsHeader}>
        <Col xxl={5} xl={6} lg={7} md={7}>
          <Card
            isMeta={true}
            className={styles.detailsHeaderCard}
            width={265}
            item={movieDetailsData}
          >
            <Card.Cover path={movieDetailsData?.poster_path} />
          </Card>
        </Col>
        <Col xxl={13} xl={17} lg={17} md={17}>
          <div className={styles.headerContent}>
            <h1>
              {movieDetailsData?.original_title}{" "}
              {new Date(movieDetailsData.release_date).getFullYear()}
            </h1>
            <div className={styles.childDiv}>
              <h3>
                {moment(movieDetailsData?.release_date).format("DD:MM")}{" "}
                {`${duration._data.hours} h : ${duration._data.minutes} m`}
              </h3>
              {movieDetailsData?.genres.map((item) => (
                <Button
                  onClickHandler={() => onClickHandler(item)}
                  className={styles.genresBtns}
                >
                  {item.name}
                </Button>
              ))}
              {videosData?.results
                .filter((elem) => elem.name === "Official Trailer")
                .map((elem) => (
                  <Col xl={6}>
                    <VideoPlayer data={elem} isModification={true} />
                  </Col>
                ))}
            </div>
            <p className={styles.overViewText}>Overview</p>
            <p className={styles.overiewDetailText}>
              {movieDetailsData?.overview}
            </p>
            <Row>
              <ConditionalRenderer condition={!!crewData?.crew}>
                {crewData?.crew
                  .filter(
                    (elem) =>
                      elem.job === "Characters" ||
                      elem.job === "Director" ||
                      (elem.job === "Writer" && elem)
                  )
                  ?.map((elem) => (
                    <Col lg={8} md={8} sm={8}>
                      <p className={styles.castName}>{elem?.name}</p>
                      <p className={styles.castTitle}>
                        <br /> {elem?.job}
                      </p>
                    </Col>
                  ))}
              </ConditionalRenderer>
            </Row>
          </div>
        </Col>
      </div>
      <Col xxl={3} xl={0} lg={0} md={0} />
    </>
  );
}

export { Header };
