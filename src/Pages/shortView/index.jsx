import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Col, Row } from "antd";

import { Card, TabsComp } from "../../Components";
import { DashboardHeader, Images, SideDetail, Videos } from "../../packages";
import { useLazyHook, useFetchHook } from "../../utils/hooks";

function ShortView() {
  const [key, setKey] = useState("1");
  const location = useLocation();

  const { selectedVideo, videoId } = location.state;

  const [
    DetailslHandle,
    {
      isLoading: videoDetailsLoading,
      data: videoDetailsData,
      error: videoDetailserror,
    },
  ] = useFetchHook({
    method: "GET",
    search: videoId,
  });

  const [
    VideosHandle,
    { isLoading: videosLoadingState, data: videosData, error: videosError },
  ] = useLazyHook({
    method: "GET",
    search: `${videoId}/videos`,
  });

  const [
    ImagesHandle,
    { isLoading: imagesLoadingState, data: imagesData, error: imagesError },
  ] = useLazyHook({
    method: "GET",
    search: `${videoId}/images`,
  });

  useEffect(() => {
    if (key === "videos") {
      VideosHandle();
    } else if (key === "posters") {
      ImagesHandle();
    }
  }, [key]);

  const onTabsChange = (currentKey) => setKey(currentKey);

  const siderTabsList = [
    {
      key: "1",
      label: "Overview",
      children: (
        <>
          {" "}
          <SideDetail
            isLoading={videoDetailsLoading}
            data={videoDetailsData || {}}
          />
        </>
      ),
    },
    {
      key: "videos",
      label: <p>Videos</p>,
      children: (
        <>
          {" "}
          <Videos isLoading={videosLoadingState} data={videosData || {}} />
        </>
      ),
    },
    {
      key: "posters",
      label: <p>Posters</p>,
      children: (
        <>
          {" "}
          <Images isLoading={imagesLoadingState} data={imagesData || {}} />
        </>
      ),
    },
  ];

  return (
    <>
      <DashboardHeader
        filtered={selectedVideo || []}
        data={videoDetailsData}
        id={videoId}
      />
      <Row>
        <Col xxl={4} xl={5} lg={6} md={7}>
          {selectedVideo?.map((elem) => (
            <Card width={250} item={elem} key={`selectedMovie-card-${elem.id}`}>
              <Card.Cover path={elem?.poster_path} />
            </Card>
          ))}
        </Col>
        <Col xxl={20} xl={19} lg={18} md={17}>
          <TabsComp key={key} data={siderTabsList} onChange={onTabsChange} />
        </Col>
      </Row>
    </>
  );
}

export { ShortView };
