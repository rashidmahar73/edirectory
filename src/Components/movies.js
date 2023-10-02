import React from "react";
import { Table, Col, Row, Button, Space,Spin } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { productList } from "../ReduxSaga/actions/productAction";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const { Column, ColumnGroup } = Table;

export function GenreIds() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // useEffect(() => {
  //   dispatch(fetchMoviesData());
  // }, []);
  // 640146
  // let id = 385687;
  // let getApiData = async () => {
  //   let response = await axios.get(
  //     `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=c12531a82a60035f2bcdef9bb2c8ff3c&language=en-US`
  //   );
  //   console.log(response);
  // };
  // getApiData();
  let thunkLoading = useSelector((state) => state.MoviesGenreReducer.loading);
  let stat = useSelector((state) => state.MoviesGenreReducer.data.genres);
  function handleCategory(e, item) {
    // console.log(item.record.name,"item");
    navigate(`/Movies-data`, { state: item });
  }
  return (
    <React.Fragment>
      <Row>
        <Col lg={8}></Col>
        <Col lg={8}>
            <Spin loading={thunkLoading}>
            <Table dataSource={stat} rowKey={(record) => record.id}>
              <ColumnGroup>
                <Column title="Id" dataIndex="id" />
                <Column title="Name" dataIndex="name" />
              </ColumnGroup>
              <Column
                title="Action"
                key="action"
                render={(record) => (
                  <Space size="middle">
                    <Button
                      type="primary"
                      onClick={(e) => {
                        return (
                          handleCategory(e, { record }),
                          dispatch(productList(record.id))
                        );
                      }}
                    >
                      Movies
                    </Button>
                  </Space>
                )}
              />
            </Table>
          </Spin>
        </Col>
      </Row>
    </React.Fragment>
  );
}



