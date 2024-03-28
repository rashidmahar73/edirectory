import React from "react";

import { Row, Col, Spin } from "antd";

import { VideoPlayer } from "../../Components/videoPlayer";

import "./styles.scss";

function Videos({ isLoading, data }) {
  return (
    <Spin size="large" spinning={isLoading}>
      <Row>
        <Col xl={24}>
          <div className="videos-main-div">
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
