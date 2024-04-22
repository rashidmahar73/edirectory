import React from "react";

import { Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";

import { baseURL } from "../../utils/constants";

import styles from "./styles.module.scss";

function DashboardHeader(props) {
  const navigate = useNavigate();

  const { filtered, data, id } = props;

  return (
    <React.Fragment>
      <div className={styles.headerDiv}>
        {filtered.map((elem) => {
          const { title, backdrop_path, overview } = elem;
          return (
            <React.Fragment key={elem.id}>
              <Row
                className={styles.headerParent}
                style={{
                  height: "35vh",
                  backgroundImage: `url(${
                    baseURL.imageBaseURL + backdrop_path
                  })`,
                }}
              >
                <Col lg={24} className={styles.header}>
                  <div className={styles.mainDivHeader}>
                    <h1 className={styles.mainTitleHeading}>{title}</h1>
                    <h4 className={styles.mainSubTitleHeading}>
                      {overview?.slice(0, 148)}
                    </h4>
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
                            videoId: id,
                            videoDetails: data || {},
                          },
                        });
                      }}
                    >
                      More Details
                    </Button>
                  </div>
                </Col>
              </Row>
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
}
export { DashboardHeader };
