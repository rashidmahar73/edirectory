import { useState } from "react";

import ReactPlayer from "react-player";
import { Button } from "antd";

import { ModalComp } from "../modal";
import { ConditionalRenderer } from "../conditionalRenderer";

function VideoPlayer({ data, isModification }) {
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState({ name: "", key: "" });

  const trailerBaseURl = "http://www.youtube.com/watch?v=";

  function handleModal() {
    setOpen(!open);
  }

  return (
    <>
      <ConditionalRenderer condition={isModification}>
        <Button
          type="primary"
          style={{
            background:
              "linear-gradient(to right,rgb(230, 226, 226),rgba(255, 122, 89, 0)",
            color: "white",
            fontWeight: "700",
            marginLeft: "10px",
          }}
          onClick={() => {
            return handleModal(), setVideo(true);
          }}
        >
          Trailer
        </Button>
      </ConditionalRenderer>
      <ConditionalRenderer condition={!isModification}>
        <ReactPlayer
          width={350}
          height={300}
          url={trailerBaseURl + data.key}
          playing={false}
          onClick={() => {
            setVideoUrl({
              name: data.name,
              key: data.key,
            });
            setVideo(true);
            handleModal();
          }}
        />
      </ConditionalRenderer>
      {video && (
        <ModalComp
          modalString={"details"}
          title={videoUrl?.name}
          open={open}
          handleCancel={handleModal}
          width={1000}
          height={200}
          footer={null}
        >
          <ReactPlayer
            width={1000}
            height={600}
            url={trailerBaseURl + videoUrl?.key}
          />
        </ModalComp>
      )}
    </>
  );
}
export { VideoPlayer };
