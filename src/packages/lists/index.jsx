import { useState } from "react";
import { Row, Col } from "antd";
import { Card } from "../../Components";

import { SlideNextIcon, SlidePreviousIcon } from "../../icons";

import styles from "./styles.module.scss";

function Lists(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data, onChangeHandler } = props;

  function onClickHandler(type) {
    if (type === "previous") {
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    } else {
      if (currentIndex < data?.length - 6) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }
  }

  return (
    <Container onClickHandler={onClickHandler}>
      <Row>
        {data?.map((item, index) => (
          <Col
            xl={4}
            key={`movie-card-main-div ${item.id}`}
            style={{
              display:
                index >= currentIndex && index < currentIndex + 6
                  ? "block"
                  : "none",
            }}
          >
            <Card
              width={220}
              item={item}
              className={styles.listsCard}
              handleChange={() => onChangeHandler(item.id, data)}
            >
              <Card.Cover path={item?.poster_path} isPreviewImage={false} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export { Lists };

function Container({ children, onClickHandler }) {
  return (
    <Row>
      <Col xl={1}>
        <div
          className={styles.btnsClass}
          onClick={() => onClickHandler("previous")}
        >
          <SlidePreviousIcon />
        </div>
      </Col>
      <Col xl={22}>{children}</Col>
      <Col xl={1}>
        <div
          className={styles.btnsClass}
          onClick={() => onClickHandler("next")}
        >
          <SlideNextIcon />
        </div>
      </Col>
    </Row>
  );
}
