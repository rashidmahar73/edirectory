import { useSelector } from "react-redux";
import { Card, Row, Col,Spin } from "antd";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const MoviesData = () => {
  let data = useSelector((state) => state.SagaReducer.data);
//   let thunkLoading = useSelector((state) => state.MoviesGenreReducer.loading);
const sagaLoading = useSelector((state) => state.SagaReducer.loading);
  //   console.log(thunkLoading,"thunkLoading");
  const navigate = useNavigate();
  let [data1] = data;
  let { results } = data1;
  const { Meta } = Card;
  let baseURl = "https://image.tmdb.org/t/p/original/";
  function handleComponentPage(e, item) {
    navigate("/SingleMovieDetail", { state: item });
  }
  //   console.log(results, "Results");
  return (
    <React.Fragment>
      <Row>
        <Spin loading={sagaLoading}>
       
          <Row>
            {results &&
              results.map((item, index) => {
                let {
                  original_title,
                  poster_path,
                  release_date,
                  backdrop_path,
                } = item;
                let intialCompleteDate = new Date(release_date);
                let month = intialCompleteDate.toLocaleString("default", {
                  month: "long",
                });
                let length = 3;
                let trimmedMonth = month.substring(0, length);
                let date = intialCompleteDate.getDate() + 1;
                let year = intialCompleteDate.getFullYear();
                return (
                  <React.Fragment>
                    <Col lg={5} key={index}>
                      <Card
                        hoverable
                        key={index}
                        style={{ width: 240 }}
                        cover={
                          <img
                            alt={baseURl + backdrop_path}
                            src={baseURl + poster_path}
                          />
                        }
                        onClick={(e) => {
                          return handleComponentPage(e, { item });
                        }}
                      >
                        <Meta
                          title={original_title}
                          description={`${trimmedMonth} ${date}, ${year}`}
                        />
                      </Card>
                    </Col>
                  </React.Fragment>
                );
              })}
          </Row>
          </Spin>
      </Row>
    </React.Fragment>
  );
};
