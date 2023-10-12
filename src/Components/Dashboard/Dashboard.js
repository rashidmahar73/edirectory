import React, { useEffect, useMemo, useState } from "react";
import "./dashboard.css";
import { Select, Row, Col, Card, Spin, Button } from "antd";
import ApiHandler from "../../utils/ApiHandler";
const { Meta } = Card;
const Dashboard = () => {
  const [genreIdsData, setGenreIdsData] = useState([]);
  const [genereIdValue, setGenreIdValue] = useState(28);
  const [movieslist, setMoviesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movieDataId, setMovieDataId] = useState(569094);

  const filtered = useMemo(() => {
    return movieslist.filter((item) => {
      if (item.id === movieDataId) {
        return item;
      }
    });
  }, [movieslist, movieDataId]);
  console.log(filtered);
  const dataResponse = async () => {
    setLoading(true);
    // setTimeout(async () => {
    try {
      const { data } = await ApiHandler(
        "GET",
        "https://api.themoviedb.org/3/genre/movie/list"
      );
      if (data !== undefined && data !== null) {
        let changable = data?.genres.map((item) => {
          item.value = item.id;
          item.label = item.name;
          delete item.id;
          delete item.name;
          return item;
        });
        setGenreIdsData(changable);
      }
      const moviesData = await ApiHandler("moviesData", genereIdValue);
      if (moviesData !== undefined && moviesData !== null) {
        let { data } = moviesData;
        let { results } = data;
        setMoviesList(results);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    // }, 2000);
  };
  useEffect(() => {
    dataResponse();
  }, [genereIdValue]);
  const baseURl = "https://image.tmdb.org/t/p/original/";
  return (
    <React.Fragment>
      <div className="dashboard-Container">
        {/* <Select
          defaultValue="Action"
          style={{
            width: 120,
          }}
          onChange={(value) => setGenreIdValue(value)}
          options={genreIdsData}
        /> */}
          <Spin size="large" spinning={loading}>
              <Row>
                {filtered &&
                  filtered.map((item) => {
                    let { title, backdrop_path, overview } = item;
                    return (
                      <React.Fragment>
                        <Col lg={12}>
                          <div className="mainDivHeader">
                            <h1 className="mainTitleHeading">{title}</h1>
                            <h4 className="mainTitleHeading">{overview}</h4>
                            <Button type="primary">More Details</Button>
                          </div>
                        </Col>
                        <Col lg={12}>
                          <img
                            className="img-fluid headerimg"
                            src={`${baseURl}${backdrop_path}`}
                          />
                        </Col>
                      </React.Fragment>
                    );
                  })}
              </Row>
              <Row className="cardMainRow">
                {movieslist &&
                  movieslist.map((item) => {
                    const { title, poster_path, backdrop_path } = item;
                    return (
                      <React.Fragment>
                        <Col lg={4}>
                          <Card
                            hoverable
                            style={{
                              width: 200,
                            }}
                            onClick={() => setMovieDataId(item.id)}
                            cover={
                              <img
                                loading="lazy"
                                alt="example"
                                src={`${baseURl}${poster_path}`}
                              />
                            }
                          >
                            <Meta
                              title={title}
                            />
                          </Card>
                        </Col>
                      </React.Fragment>
                    );
                  })}
              </Row>
        </Spin>
      </div>
    </React.Fragment>
  );
};
export default Dashboard;
