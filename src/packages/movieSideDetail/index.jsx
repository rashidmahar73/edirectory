import { Col, Row } from "antd";
import React from "react";
import moment from "moment";
import { Progress } from "antd";
import { Button } from "antd";
import { Spin } from "antd";

function MovieSideDetail({ isLoading, data, setShow }) {
  const baseURl = "https://image.tmdb.org/t/p/original/";

  const duration = moment.duration(data?.runtime, "minutes");
  return (
    <Spin size="large" spinning={isLoading}>
      <span className="overview-container">
        <Row>
          <Col xl={24}>
            <span style={{ display: "flex", justifyContent: "space-between" }}>
              <a href="https://www.equalizer.movie" className="title">
                {data?.original_title}
              </a>
              <Button type="primary" onClick={() => setShow(false)}>
                SideContent
              </Button>
            </span>
            <div className="second-head">
              <p className="text">
                {moment(data?.release_date).format("DD:MM")}
              </p>
              <p className="sub-text-1">
                {`${duration._data.hours} hr : ${duration._data.minutes} m`}
              </p>
              {data?.genres?.map((elem, index) => (
                <p className="sub-text-1" key={index}>
                  {elem?.name}
                </p>
              ))}
            </div>
            <div className="third-div">
              <p className="text">{data?.tagline}</p>
              <h1 className="overview-head">Overview</h1>
              <p className="text">{data?.overview}</p>
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
                  {data?.spoken_languages?.map((elem, index) => (
                    <h2 className="inner-text" key={index}>
                      {elem.name}
                    </h2>
                  ))}
                </span>
              </Col>
              <Col xl={1} />
              <Col xl={4}>
                <h2 className="inner-text">
                  {data?.adult === false ? "Not for Adult" : "For Adult Also"}
                </h2>
              </Col>
              <Col xl={1} />
              <Col xl={4}>
                <h2 className="inner-text">{data?.status}</h2>
              </Col>
              <Col xl={1} />
              <Col xl={4}>
                <Progress
                  type="circle"
                  className="progress-bar"
                  percent={data?.vote_average}
                />
              </Col>
              <Col xl={1} />
              <Col xl={4}>
                <h2 className="inner-text">{data?.vote_count}</h2>
              </Col>
            </Row>
            <div className="fourth-div">
              <h1 className="head">Production Companies</h1>
              <div className="inner-div">
                {data?.production_companies?.map((elem) => {
                  return (
                    <React.Fragment key={elem.id}>
                      {elem?.logo_path !== null ? (
                        <>
                          <img
                            src={`${baseURl}${elem?.logo_path}`}
                            alt="logo-not-available"
                            style={{
                              width: "100px",
                              height: "70px",
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
          </Col>
        </Row>
      </span>
    </Spin>
  );
}

export { MovieSideDetail };
