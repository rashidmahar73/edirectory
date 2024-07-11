import React from "react";

import { Row, Col, Spin } from "antd";

import { VideoPlayer } from "../../Components";

import styles from "./styles.module.scss";

function Videos({ isLoading, data }) {

  return (
    <Spin size="large" spinning={isLoading}>
      <Row>
        <Col xl={24}>
          <div className={styles.videoDiv}>
            {data?.results?.slice(0, 4).map((elem) => (
              <Col xl={6}>
                <VideoPlayer data={elem} />
              </Col>
            ))}
          </div>
        </Col>
      </Row>
    </Spin>
  );
}

export { Videos };
