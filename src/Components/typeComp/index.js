import React, { Fragment, useEffect } from "react";
import { Row, Col } from "antd";
import { CardComponent } from "../card";
// import "./styles.scss";
import styles from "./styles.module.scss";
function TypesComp(props) {
  const {
    typeString,
    Handler,
    show,
    moviesListData,
    setMovieDataId,
    setVariable,
    setShow,
    setKey,
  } = props;
  useEffect(() => {
    if (typeString === "upcoming") {
      Handler();
    } else if (typeString === "top-rated") {
      Handler();
    } else if (typeString === "popular") {
      Handler();
    }
  }, []);
  return (
    <Fragment>
      <div className={styles.movieCard} style={{ display: show ? "none" : "flex" }}>
        <Row style={{ display: show ? "none" : "flex" }}>
          {moviesListData?.results?.map((item) => {
            const handleChange = () => {
              setMovieDataId(item.id);
              setVariable(moviesListData);
              setShow(true);
              setKey("1");
            };
            return (
              <Fragment key={`movie-card-main-div ${item.id}`}>
                <Col xl={4}>
                  <CardComponent
                    width={170}
                    item={item}
                    handleChange={handleChange}
                  />
                </Col>
              </Fragment>
            );
          })}
        </Row>
      </div>
    </Fragment>
  );
}
export { TypesComp };
