import React from "react";
import { Col, Row, Progress, Spin } from "antd";
import moment from "moment";

import { itemsList } from "./helpers";

import styles from "./styles.module.scss";

function SideDetail({ isLoading, data }) {
  const duration = moment.duration(data?.runtime, "minutes");

  return (
    <Spin size="large" spinning={isLoading}>
      <Row>
        <Col xl={24}>
          <h1 className={styles.title}>{data?.original_title}</h1>
          <div className={styles.secondHead}>
            <p className={styles.text}>
              {moment(data?.release_date).format("DD:MM")}
            </p>
            <p className={styles.subText}>
              {`${duration._data.hours} hr : ${duration._data.minutes} m`}
            </p>
            {data?.genres?.map((elem, index) => (
              <p className={styles.subText} key={index}>
                {elem?.name}
              </p>
            ))}
          </div>
          <div className={styles.thirdDiv}>
            <p className={styles.text}>{data?.tagline}</p>
            <h1 className={styles.overviewHeading}>Overview</h1>
            <p className={styles.text}>{data?.overview}</p>
          </div>
        </Col>
      </Row>
      <Row>
        {itemsList?.map(({ title }) => (
          <Col xl={4}>
            <h1 className={styles.head}>{title}</h1>
          </Col>
        ))}
      </Row>
      <Row>
        <Col xl={4}>
          {data?.spoken_languages?.map((elem, index) => (
            <h2 className={styles.innerText} key={index}>
              {elem.name}
            </h2>
          ))}
        </Col>

        <Col xl={4}>
          <h2 className={styles.innerText}>
            {!data?.adult ? "Not for Adult" : "For Adult Also"}
          </h2>
        </Col>
        <Col xl={4}>
          <h2 className={styles.innerText}>{data?.status}</h2>
        </Col>
        <Col xl={4}>
          <Progress
            type="circle"
            className={styles.progressBar}
            percent={data?.vote_average}
          />
        </Col>
        <Col xl={4}>
          <h2 className={styles.innerText}>{data?.vote_count}</h2>
        </Col>
      </Row>
    </Spin>
  );
}

export { SideDetail };
