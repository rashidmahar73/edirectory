import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { CardComponent } from "../card";
import "./styles.scss";
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
    <React.Fragment>
      <Row style={{ display: show ? "none" : "flex" }}>
        <Col xl={24}>
          <div className="card-main-div">
            {moviesListData !== undefined ? (
              moviesListData?.results?.map((item) => {
                const handleChange = () => {
                  setMovieDataId(item.id);
                  setVariable(moviesListData);
                  setShow(true);
                  setKey("1");
                };
                return (
                  <React.Fragment key={item.id}>
                    <Col xl={2}>
                      <CardComponent
                        cardComp={"dashboard"}
                        width={130}
                        item={item}
                        handleChange={handleChange}
                      />
                    </Col>
                  </React.Fragment>
                );
              })
            ) : (
              <React.Fragment>
                <h2>No Movies List Data</h2>
              </React.Fragment>
            )}
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}
export { TypesComp };
