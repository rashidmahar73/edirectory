import { Row, Col } from "antd";

import { Card } from "../../Components";

import styles from "./styles.module.scss";

function Lists(props) {
  const { data = [], onChangeHandler } = props;

  return (
    <Container>
      <Row
        style={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
      >
        {data?.map((item, index) => (
          <Col
            xl={4}
            lg={4}
            md={4}
            sm={4}
            xs={10}
            key={`card-main-div ${index}`}
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

function Container({ children }) {
  return (
    <div style={{ overflowX: "scroll", overflowY: "hidden", height: "60dvh", padding:"30px 0px" }}>
      {children}
    </div>
  );
}

export { Lists };
