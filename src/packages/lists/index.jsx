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
            lg={4}
            md={4}
            sm={4}
            xs={10}
            key={`card-main-div ${item.id}`}
            style={{
              display:
                index >= currentIndex && index < currentIndex + 6
                  ? "block"
                  : "none",
            }}
          >
            <Card
              item={item}
              className={styles.listsCard}
              handleChange={() => onChangeHandler(item.id, data)}
              isMeta={true}
            >
              <Card.Cover path={item?.poster_path} isPreviewImage={false} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

function Container({ children, onClickHandler }) {
  return (
    <Row>
      <Col xl={2} lg={2} md={2} sm={2} xs={24}>
        <div
          className={styles.btnsClass}
          onClick={() => onClickHandler("previous")}
        >
          <SlidePreviousIcon />
        </div>
      </Col>
      <Col xl={20} lg={20} md={20} sm={20} xs={24}>{children}</Col>
      <Col xl={2} lg={2} md={2} sm={2} xs={24}>
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

export { Lists };
