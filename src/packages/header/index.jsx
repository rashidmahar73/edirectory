import React from "react";

import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

import { Button, ConditionalRenderer } from "../../Components";
import { baseURL } from "../../utils/constants";

import styles from "./styles.module.scss";

function Header(props) {
  const navigate = useNavigate();

  const { selected, data, id, isMoreDetails = false } = props;

  function clickHandler() {
    localStorage.setItem("movieid", id);
    return navigate(`/${id}/details`, {
      state: {
        videoId: id,
        videoDetails: data || {},
      },
    });
  }

  return (
    <Row>
      <Col lg={24}>
        <div className={styles.header}>
          {selected?.map(({ title, backdrop_path, overview }) => (
            <div
              className={styles.headerContainer}
              style={{
                backgroundImage: `url(${baseURL.imageBaseURL + backdrop_path})`,
              }}
            >
              <div className={styles.headerChild}>
                <h1 className={styles.heading}>{title}</h1>
                <h4 className={styles.text}>{overview?.slice(0, 148)}</h4>
                <ConditionalRenderer condition={isMoreDetails}>
                <Button
                  className={styles.moreDetailsBtn}
                  onClickHandler={clickHandler}
                >
                  {" "}
                  More Details
                </Button>

                </ConditionalRenderer>
              </div>
            </div>
          ))}
        </div>
      </Col>
    </Row>
  );
}
export { Header };
