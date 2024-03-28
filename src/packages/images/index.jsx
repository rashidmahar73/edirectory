import React from "react";

import { Col, Image, Row, Spin } from "antd";

import "./styles.scss";

function Images({ isLoading, data }) {
  const baseURl = "https://image.tmdb.org/t/p/original/";

  return (
    <Spin size="large" spinning={isLoading}>
      <Row>
        <Col xl={24}>
          <div className="videos-main-div">
            {data?.backdrops?.slice(0, 4).map((elem) => {
                return (
                  <Col xl={6}>
                    <div>
                      <Image
                        style={{ width: "90%", height: "90%" }}
                        src={`${baseURl}${elem.file_path}`}
                      />
                    </div>
                  </Col>
                );
              })}
          </div>
        </Col>
      </Row>
    </Spin>
  );
}
export { Images };
