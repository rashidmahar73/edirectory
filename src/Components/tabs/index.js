import React from "react";
import { Spin, Row, Col, Button, Progress, Tabs } from "antd";
import moment from "moment";
import { MediaComp } from "../mediaComp";
import "./styles.scss";
function TabsComp(props) {
  const {
    key,
    contentKey,
    onChange,
    objKey1,
    objKey2,
    objKey3,
    video,
    open,
    Handler,
  } = props;
  const duration = moment.duration(objKey1?.data?.runtime, "minutes");
  const baseURl = "https://image.tmdb.org/t/p/original/";

  const conditionalChildren = (JSXArgType, objByKeys) => {
    if ((JSXArgType = "side-content")) {
      const overview = (
        <>
          <Spin size="large" spinning={objByKeys?.loading}>
            <span className="overview-container">
              <Row>
                <Col xl={24}>
                  <span
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <a href="https://www.equalizer.movie" className="title">
                      {objByKeys?.data?.original_title}
                    </a>
                    <Button
                      type="primary"
                      onClick={() => objByKeys?.setUpdate(false)}
                    >
                      SideContent
                    </Button>
                  </span>
                  <div className="second-head">
                    <p className="text">
                      {moment(objByKeys?.data?.release_date).format("DD:MM")}
                    </p>
                    <p className="sub-text-1">
                      {`${duration._data.hours} hr : ${duration._data.minutes} m`}
                    </p>
                    {objByKeys?.data?.genres?.map((elem, index) => {
                      return (
                        <p className="sub-text-1" key={index}>
                          {elem?.name}
                        </p>
                      );
                    })}
                  </div>
                  <div className="third-div">
                    <p className="text">{objByKeys?.data?.tagline}</p>
                    <h1 className="overview-head">Overview</h1>
                    <p className="text">{objByKeys?.data?.overview}</p>
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
                        {objByKeys?.data?.spoken_languages?.map(
                          (elem, index) => {
                            return (
                              <h2 className="inner-text" key={index}>
                                {elem.name}
                              </h2>
                            );
                          }
                        )}
                      </span>
                    </Col>
                    <Col xl={1} />
                    <Col xl={4}>
                      <h2 className="inner-text">
                        {objByKeys?.data?.adult === false
                          ? "Not for Adult"
                          : "For Adult Also"}
                      </h2>
                    </Col>
                    <Col xl={1} />
                    <Col xl={4}>
                      <h2 className="inner-text">{objByKeys?.data?.status}</h2>
                    </Col>
                    <Col xl={1} />
                    <Col xl={4}>
                      <Progress
                        type="circle"
                        className="progress-bar"
                        percent={objByKeys?.data?.vote_average}
                      />
                    </Col>
                    <Col xl={1} />
                    <Col xl={4}>
                      <h2 className="inner-text">
                        {objByKeys?.data?.vote_count}
                      </h2>
                    </Col>
                  </Row>
                  <div className="fourth-div">
                    <h1 className="head">Production Companies</h1>
                    <div className="inner-div">
                      {objByKeys?.data?.production_companies?.map((elem) => {
                        return (
                          <React.Fragment key={elem.id}>
                            {elem?.logo_path !== null ? (
                              <>
                                <img
                                  src={`${baseURl}${elem?.logo_path}`}
                                  alt="logo-not-available"
                                  style={{
                                    width: "3%",
                                    height: "40px",
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
        </>
      );
      const videos = (
        <>
          <MediaComp
            mediaCompType={"videos"}
            objByKeys={objByKeys}
            open={open}
            video={video}
            Handler={Handler?.videosFun}
          />
        </>
      );
      const images = (
        <>
          <MediaComp
            mediaCompType={"images"}
            objByKeys={objByKeys}
            Handler={Handler?.imagesFun}
          />
        </>
      );
      return { key1: overview, key2: videos, key3: images };
    }
  };
  const array = [
    {
      key: "1",
      label: "Overview",
      children: <>{conditionalChildren(contentKey, objKey1)?.key1}</>,
    },
    {
      key: "2",
      label: <p>Videos</p>,
      children: <>{conditionalChildren(contentKey, objKey2)?.key2}</>,
    },
    {
      key: "3",
      label: <p>Photos</p>,
      children: <>{conditionalChildren(contentKey, objKey3)?.key3}</>,
    },
  ];
  return (
    <React.Fragment>
      <Tabs activeKey={key} items={array} onChange={onChange} />
    </React.Fragment>
  );
}
export { TabsComp };
