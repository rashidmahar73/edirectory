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
        height: "100%",
      }}
      onClick={handleChange}
      cover={children}
    >
      {isMeta ? <></> : <AntdCard.Meta title={item?.name || item?.title || ""} />}
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
        <>
          {path === null ? (
            <div
              style={{
                height: "20.5vh",
                border: "1px solid lightGray",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              <h2 style={{ alignSelf: "center" }}>No image</h2>
            </div>
          ) : (
            <Image
              loading="lazy"
              alt="example"
              src={`${baseURl}${path || ""}`}
            />
          )}
        </>
      )}
    </>
  );
}

Card.Cover = Cover;

export { Card };
