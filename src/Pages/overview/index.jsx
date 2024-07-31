import { useLocation } from "react-router-dom";
import { Col, Row } from "antd";

import { Card } from "../../Components";
import { Header, SideDetail } from "../../packages";
import { useFetchHook } from "../../utils/hooks";

function Overview() {
  const location = useLocation();

  const { selectedVideo, videoId } = location.state;

  const [
    detailsHandle,
    {
      isLoading: videoDetailsLoading,
      data: videoDetailsData,
      error: videoDetailserror,
    },
  ] = useFetchHook({
    method: "GET",
    search: videoId,
  });

  return (
    <>
      <Header
        selected={selectedVideo || []}
        data={videoDetailsData}
        id={videoId}
        isMoreDetails
      />
      <Row>
        <Col xxl={4} xl={3} lg={6} md={7} xs={12}>
          {selectedVideo?.map((elem) => (
            <Card item={elem} key={`card-${elem.id}`} isMeta>
              <Card.Cover path={elem?.poster_path} />
            </Card>
          ))}
        </Col>
        <Col xl={1} />
        <Col xxl={20} xl={20} lg={18} md={17}>
          <h2>Overview</h2>
          <SideDetail
            isLoading={videoDetailsLoading}
            data={videoDetailsData || {}}
          />
        </Col>
      </Row>
    </>
  );
}

export { Overview };
