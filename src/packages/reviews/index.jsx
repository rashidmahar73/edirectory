import { ConditionalRenderer } from "../../Components";
import { StarFilled } from "@ant-design/icons";

function Reviews({ updatedIndex, setUpdatedIndex, reviewsData }) {
  if (reviewsData?.results === undefined) return <h1>Something went wrong</h1>;
  if (reviewsData?.results?.length < 0) return <h1>There is no Reviews</h1>;
  return (
    <ConditionalRenderer
      condition={
        reviewsData?.results !== undefined && reviewsData?.results?.length > 0
      }
    >
      {[
        reviewsData?.results[
          reviewsData?.results !== undefined
            ? updatedIndex === reviewsData?.results?.length
              ? setUpdatedIndex((updatedIndex) => {
                  if (updatedIndex) {
                    return updatedIndex - reviewsData?.results?.length;
                  }
                })
              : updatedIndex
            : 0
        ],
      ]?.map((elem) => {
        const stringPart = elem?.content.slice(0, 559);
        const date = new Date(elem?.updated_at);
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const year = date.getFullYear();
        const datee = date.getDate();
        const month = monthNames[date.getMonth()];
        return (
          <div style={{ height: "13vh" }}>
            <p style={{ margin: "0px" }}>
              A review by {elem?.author} <StarFilled />{" "}
              {elem?.author_details.rating} written by {elem?.author} on {month}{" "}
              {datee} ,{year}
              {stringPart} <a>Read More</a>
            </p>
          </div>
        );
      })}
    </ConditionalRenderer>
  );
}

export { Reviews };
