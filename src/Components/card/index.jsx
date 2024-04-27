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
  if (isMeta)
    return (
      <CardWrapper
        className={className}
        width={width}
        handleChange={handleChange}
        coverChildren={children}
      >
        <AntdCard.Meta title={item?.name || item?.title || ""} />
      </CardWrapper>
    );

  return (
    <CardWrapper
      className={className}
      width={width}
      handleChange={handleChange}
      coverChildren={children}
    />
  );
}

function CardWrapper({
  children,
  className,
  width,
  handleChange,
  coverChildren,
}) {
  return (
    <AntdCard
      hoverable
      className={className}
      style={{
        width: width,
      }}
      onClick={handleChange}
      cover={coverChildren}
    >
      {children}
    </AntdCard>
  );
}

function Cover({ path, isModification, children, isPreviewImage = true }) {
  const baseURl = "https://image.tmdb.org/t/p/original/";

  if (isModification) return <>{children}</>;

  return (
    <Image
      preview={isPreviewImage}
      loading="lazy"
      alt="example"
      src={`${baseURl}${path || ""}`}
    />
  );
}

Card.Cover = Cover;

export { Card };
