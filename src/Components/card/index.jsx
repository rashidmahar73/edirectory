import React from "react";

import { Card as AntdCard, Image } from "antd";

import "./card.scss";

function Card({
  isMeta = false,
  className = "",
  width,
  item = {},
  handleChange = () => {},
  children,
}) {
  return (
    <AntdCard
      hoverable
      className={className}
      style={{
        width: width,
      }}
      onClick={handleChange}
      cover={children}
    >
      {isMeta ? (
        <></>
      ) : (
        <AntdCard.Meta title={item?.name || item?.title || ""} />
      )}
    </AntdCard>
  );
}

function Cover({ path, isModification, children }) {
  const baseURl = "https://image.tmdb.org/t/p/original/";

  return (
    <>
      {isModification ? (
        <>{children}</>
      ) : (
        <Image loading="lazy" alt="example" src={`${baseURl}${path || ""}`} />
      )}
    </>
  );
}

Card.Cover = Cover;

export { Card };
