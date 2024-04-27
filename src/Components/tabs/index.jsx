import React from "react";
import { Tabs as AntdTabs } from "antd";

function Tabs({ items, onChange }) {
  return (
    <AntdTabs
      defaultActiveKey="1"
      items={items}
      onChange={(value) => onChange(value)}
    />
  );
}
export { Tabs };
