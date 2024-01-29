import React from "react";
import { Row, Col, Button } from "antd";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
function Header(props) {
  const { filtered, movieDetailsData, movieDataId } = props;
  const baseURl = "https://image.tmdb.org/t/p/original/";
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div
        style={{
          height: "35vh",
        }}
      >
        {filtered !== undefined ? (
          filtered.map((elem) => {
            const { title, backdrop_path, overview } = elem;
            return (
              <React.Fragment key={elem.id}>
                <Row
                  style={{
                    height: "35vh",
                  }}
                >
                  <Col lg={16} className="header">
                    <div className="main-div-header">
                      <h1 className="main-title-heading">{title}</h1>
                      <h4 className="main-sub-title-heading">{overview}</h4>
                      <Button
                        type="primary"
                        style={{
                          background:
                            "linear-gradient(to right,rgb(230, 226, 226),rgba(255, 122, 89, 0)",
                          color: "white",
                          fontWeight: "700",
                        }}
                        onClick={() => {
                          localStorage.setItem("movieid", elem?.id);
                          return navigate(`/${elem?.id}/details`, {
                            state: {
                              movieDataId: movieDataId,
                              movieDetailsData:
                                movieDetailsData !== undefined
                                  ? movieDetailsData
                                  : {},
                            },
                          });
                        }}
                      >
                        More Details
                      </Button>
                    </div>
                  </Col>
                  <Col lg={8}>
                    <div className="header-img-div">
                      <img
                        className="img-fluid header-img"
                        src={`${baseURl}${backdrop_path}`}
                        alt="head"
                      />
                    </div>
                  </Col>
                </Row>
              </React.Fragment>
            );
          })
        ) : (
          <React.Fragment>
            <h2>Fetching Data ....</h2>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
}
export { Header };
