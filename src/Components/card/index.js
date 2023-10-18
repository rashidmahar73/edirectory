import React from "react";
import { Card, Image } from "antd";
import "./card.scss";
const { Meta } = Card;
export function CardComponent(props) {
  const { cardComp, width, item, handleChange } = props;
  const baseURl = "https://image.tmdb.org/t/p/original/";

  return (
    <React.Fragment>
      <Card
        hoverable
        style={{
          width: width,
          marginTop: cardComp === "head-card-details" ? "20px" : "0px",
        }}
        className={`${cardComp === "head-card-details" ? "" : "card-hover"}`}
        onClick={handleChange}
        cover={
          <>
            {cardComp === "filtered" ||
            cardComp === "movieCast" ||
            cardComp === "head-card-details" ? (
              <>
                <Image
                  loading="lazy"
                  alt="example"
                  src={`${baseURl}${
                    cardComp === "movieCast"
                      ? item?.profile_path
                      : item?.poster_path
                  }`}
                />
              </>
            ) : (
              <>
                <img alt="example" src={`${baseURl}${item?.poster_path}`} />
              </>
            )}
          </>
        }
      >
        {cardComp === "head-card-details" ? (
          <React.Fragment />
        ) : (
          <Meta
            title={
              cardComp === "movieCast" || cardComp === "tv-series"
                ? item?.name
                : item?.title
            }
          />
        )}
      </Card>
    </React.Fragment>
  );
}
