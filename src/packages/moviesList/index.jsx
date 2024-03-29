import React from "react";

import { Row, Col } from "antd";

import { Card } from "../../Components/card";

import styles from "./styles.module.scss";

function MoviesList(props) {
  const { show, moviesListData, handleChangeMovieList } = props;

  return (
    <div className={show ? styles.noMovieCard : styles.movieCard}>
      <Row style={{ display: show ? "none" : "flex" }}>
        {moviesListData?.results?.map((item) => (
          <Col xl={3} key={`movie-card-main-div ${item.id}`}>
            <Card
              width={170}
              item={item}
              handleChange={() => handleChangeMovieList(item.id)}
            >
              <Card.Cover path={item?.poster_path} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export { MoviesList };
