import React from "react";

import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import {
  Card,
  ConditionalRenderer,
  VideoPlayer,
  Button,
} from "../../Components";

import styles from "./styles.module.scss";

function DetailsHeader({ data, duration, videosData, crewData }) {
  const navigate = useNavigate();

  function onClickHandler(item) {
    localStorage.setItem("genreId", item?.id);
    navigate(`/dashboard/${item?.id}`, {
      state: { id: item?.id },
    });
  }
  return (
    <>
        <Col xxl={5} xl={6} lg={7} md={7}>
      <div className={styles.detailsHeader}>
          <Card
            isMeta={true}
            className={styles.detailsHeaderCard}
            width={200}
            item={data}
          >
            <Card.Cover path={data?.poster_path} />
          </Card>
              </div>
        </Col>
        <Col xxl={13} xl={17} lg={17} md={17} sm={24} xs={24}>
        <div className={styles.detailsHeader}>
          <div className={styles.headerContent}>
            <h1>
              {data?.original_title} {new Date(data.release_date).getFullYear()}
            </h1>
            <div className={styles.childDiv}>
              <h3>
                {moment(data?.release_date).format("DD:MM")}{" "}
                {`${duration._data.hours} h : ${duration._data.minutes} m`}
              </h3>
              {/* {data?.genres.map((item) => (
                <Button
                  onClickHandler={() => onClickHandler(item)}
                  className={styles.genresBtns}
                >
                  {item.name}
                </Button>
              ))} */}
              {videosData?.results
                .filter((elem) => elem.name === "Official Trailer")
                .map((elem) => (
                  <Col xl={6}>
                    <VideoPlayer data={elem} isModification={true} />
                  </Col>
                ))}
            </div>
            <p className={styles.overViewText}>Overview</p>
            <p className={styles.overiewDetailText}>{data?.overview}</p>
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
          </div>
        </Col>
      <Col xxl={3} xl={0} lg={0} md={0} />
    </>
  );
}

export { DetailsHeader };
