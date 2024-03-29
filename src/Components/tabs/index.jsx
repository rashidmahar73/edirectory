import React from "react";

import { Tabs } from "antd";

import "./styles.scss";

function TabsComp({ key, data, onChange }) {
  return <Tabs activeKey={key} items={data} onChange={onChange} />;
}
export { TabsComp };
