import React from "react";
import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Card } from "../../../Components";
import { VideoPlayer } from "../../../Components/videoPlayer";
import { Button } from "../../../Components/button";
import "./styles.scss";

function Header({ movieDetailsData, duration, videosData, crewData }) {
  const navigate = useNavigate();

  function onClickHandler(item) {
    localStorage.setItem("genreId", item?.id);
    navigate(`/dashboard/${item?.id}`, {
      state: { id: item?.id },
    });
  }
  return (
    <div className="header">
      <Col xl={3} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Col lg={4} md={8}>
          <Card isMeta={true} width={250} item={movieDetailsData}>
            <Card.Cover path={movieDetailsData?.poster_path} />
          </Card>
        </Col>
        <Col lg={14} md={14}>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              height: "42vh",
              justifyContent: "center",
            }}
          >
            <h1
              style={{
                color: "white",
                fontSize: "2rem",
                margin: "0px",
                paddingTop: "10px",
              }}
            >
              {movieDetailsData?.original_title}{" "}
              {new Date(movieDetailsData.release_date).getFullYear()}
            </h1>
            <h3
              style={{
                color: "white",
                margin: "0px",
                paddingTop: "10px",
              }}
            >
              <span style={{ display: "flex", fontWeight: "100" }}>
                {moment(movieDetailsData?.release_date).format("DD:MM")}
                <span style={{ paddingLeft: "10px" }}>
                  {" "}
                  {`${duration._data.hours} h : ${duration._data.minutes} m`}
                </span>
                {movieDetailsData?.genres.map((item) => (
                  <Button
                    onClickHandler={() => onClickHandler(item)}
                    className="genres-btn"
                    data={item.name}
                  />
                ))}

                {videosData?.results
                  .filter((elem) => elem.name === "Official Trailer")
                  .map((elem) => (
                    <Col xl={6}>
                      <VideoPlayer data={elem} isModification={true} />
                    </Col>
                  ))}
              </span>
              <p style={{ margin: "0px", fontSize: "2rem" }}>Overview</p>
              <p
                style={{
                  lineHeight: "1.9",
                  margin: "0px",
                  paddingTop: "10px",
                  fontWeight: "100",
                }}
              >
                {movieDetailsData?.overview}
              </p>
              <Row>
                {crewData?.crew !== undefined ? (
                  <>
                    {crewData.crew
                      .filter(
                        (elem) =>
                          elem.job === "Characters" ||
                          elem.job === "Director" ||
                          (elem.job === "Writer" && elem)
                      )
                      ?.map((elem) => {
                        return (
                          <React.Fragment>
                            <Col lg={8} md={8} sm={8}>
                              <p
                                style={{
                                  margin: "0px",
                                  fontSize: "1.3rem",
                                  paddingTop: "10px",
                                }}
                              >
                                {elem?.name}
                              </p>
                              <p
                                style={{
                                  margin: "0px",
                                  fontSize: "15px",
                                  paddingBottom: "10px",
                                }}
                              >
                                <br /> {elem?.job}
                              </p>
                            </Col>
                          </React.Fragment>
                        );
                      })}
                  </>
                ) : (
                  <React.Fragment />
                )}
              </Row>
            </h3>
          </span>
        </Col>
      </div>
      <Col xl={3} />
    </div>
  );
}

export { Header };
