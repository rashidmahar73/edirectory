import React, { Fragment } from "react";

import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

import { Button } from "../../Components";
import { baseURL } from "../../utils/constants";

import styles from "./styles.module.scss";

function Header(props) {
  const navigate = useNavigate();

  const { selected, data, id } = props;

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
    <Fragment>
      {selected?.map(({ title, backdrop_path, overview }) => (
        <Row
          className={styles.headerContainer}
          style={{
            backgroundImage: `url(${baseURL.imageBaseURL + backdrop_path})`,
          }}
        >
          <Col lg={24}>
            <div className={styles.headerChild}>
              <h1 className={styles.heading}>{title}</h1>
              <h4 className={styles.text}>{overview?.slice(0, 148)}</h4>
              <Button
                className={styles.moreDetailsBtn}
                onClickHandler={clickHandler}
              >
                {" "}
                More Details
              </Button>
            </div>
          </Col>
        </Row>
      ))}
    </Fragment>
  );
}
export { Header };
