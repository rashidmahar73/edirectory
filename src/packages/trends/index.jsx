import { useEffect, useState } from "react";
import { useFetchCalls, useLazyCalls } from "../../hooks";
import { Col, Row, Tabs } from "antd";
import { Lists } from "..";

function Trends({ onChangeHandler }) {
  const [key, setKey] = useState("1");

  const { handlers: lazyHandlers, data: lazyData } = useLazyCalls();
  const { UpcomingHandle, TopRatedHandle, PopularHandle } = lazyHandlers;
  const { popularData, topRatedData, upcomingData } = lazyData;
  const { nowPlayingData } = useFetchCalls();

  useEffect(() => {
    if (key === "upcoming") {
      UpcomingHandle();
    } else if (key === "topRated") {
      TopRatedHandle();
    } else if (key === "popular") {
      PopularHandle();
    }
  }, [key]);

  const onTabsChange = (currentKey) => setKey(currentKey);

  const createTab = (key, label, data) => ({
    key,
    label: <p>{label}</p>,
    children: (
      <Lists data={data?.results || []} onChangeHandler={onChangeHandler} />
    ),
  });
  const dashboardTabs = [
    createTab("nowPlaying", "Now Playing", nowPlayingData),
    createTab("popular", "Popular", popularData),
    createTab("topRated", "Top Rated", topRatedData),
    createTab("upcoming", "Upcoming", upcomingData),
  ];
  return (
    <Row>
      <Col xl={24}>
        <Tabs items={dashboardTabs} onChange={onTabsChange} />
      </Col>
    </Row>
  );
}

export { Trends };
