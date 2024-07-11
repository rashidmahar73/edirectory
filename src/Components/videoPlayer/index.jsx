import { useState } from "react";

import ReactPlayer from "react-player";

import { ModalComp } from "../modal";
import { Button } from "../button";

function VideoPlayer({ data }) {
  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState({ name: "", key: "" });

  const trailerBaseURl = "http://www.youtube.com/watch?v=";

  function handleModal(close) {
    if (close) {
      setOpen(!open);
      setVideoUrl({ name: "", key: "" });
      setVideo(false);
      return;
    }

    setOpen(!open);
    setVideoUrl({ name: data?.name, key: data?.key });
    setVideo(true);
  }

  return (
    <>
      {/* <h5> {data?.name}</h5> */}
      <Button style={{marginLeft:"10px"}} onClickHandler={() => handleModal(false)}>Play Trailer</Button>

      {video && (
        <ModalComp
          modalString={"details"}
          title={videoUrl?.name}
          open={open}
          handleCancel={() => handleModal(true)}
          width={800}
          height={400}
          footer={null}
        >
          <ReactPlayer
            width={800}
            height={400}
            url={trailerBaseURl + videoUrl?.key}
          />
        </ModalComp>
      )}
    </>
  );
}
export { VideoPlayer };
