import { Fragment } from "react";
import { CardComponent } from "../card";

function SideContent({ filtered }) {
  return (
    <>
      <div className="filtered-main-div">
        {filtered !== undefined ? (
          filtered?.map((elem) => {
            return (
              <Fragment key={elem.id}>
                <CardComponent
                  cardComp={"filtered"}
                  width={220}
                  item={elem}
                  handleChange={() => {}}
                />
              </Fragment>
            );
          })
        ) : (
          <Fragment>
            <h2>No Filtered Data</h2>
          </Fragment>
        )}
      </div>
    </>
  );
}
export { SideContent };
