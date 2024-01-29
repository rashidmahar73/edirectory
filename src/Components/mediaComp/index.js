import React, { useEffect, useState } from "react";
import { Row, Col, Image, Spin, Button } from "antd";
import ReactPlayer from "react-player";
import { ModalComp } from "../modal";
import "./styles.scss";
function MediaComp(props) {
  const { mediaCompType, objByKeys, open, video, Handler } = props;
  const [videoUrl, setVideoUrl] = useState("");
  const baseURl = "https://image.tmdb.org/t/p/original/";
  const trailerBaseURl = "http://www.youtube.com/watch?v=";
  useEffect(() => {
    if (mediaCompType === "videos") {
      Handler();
    } else if (mediaCompType === "images") {
      Handler();
    }
  }, []);
  return (
    <React.Fragment>
      {mediaCompType === "videos" ? (
        <>
          <Spin size="large" spinning={objByKeys?.loading}>
            <Row>
              <Col xl={24}>
                <div className="videos-main-div">
                  {objByKeys?.data?.results !== undefined ? (
                    <>
                      {objByKeys?.data?.results.slice(0, 4).map((elem) => {
                        return (
                          <React.Fragment>
                            <Col xl={6}>
                              <Button
                                type="primary"
                                onClick={() => {
                                  return (
                                    setVideoUrl({
                                      name: elem.name,
                                      key: elem.key,
                                    }),
                                    objByKeys?.setModalUpdate(),
                                    objByKeys?.setVideoUpdate(true)
                                  );
                                }}
                              >
                                trailer
                              </Button>
                              {/* <ReactPlayer
                                width={350}
                                height={300}
                                url={trailerBaseURl + elem.key}
                                playing={false}
                                onClick={() => {
                                  console.log(objByKeys?.setModalUpdate(),"objByKeys?.setModalUpdate()")
                                  return (
                                    objByKeys?.setModalUpdate(),
                                    objByKeys?.setVideoUpdate(true)
                                  );
                                }}
                              /> */}
                              {video && (
                                <ModalComp
                                  modalString={"details"}
                                  title={videoUrl?.name}
                                  open={open}
                                  handleCancel={objByKeys?.handle}
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
                            </Col>
                          </React.Fragment>
                        );
                      })}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </Col>
            </Row>
          </Spin>
        </>
      ) : (
        <>
          <Spin size="large" spinning={objByKeys?.loading}>
            <Row>
              <Col xl={24}>
                <div className="videos-main-div">
                  {objByKeys?.data?.backdrops !== undefined ? (
                    <>
                      {objByKeys?.data?.backdrops.slice(0, 4).map((elem) => {
                        return (
                          <React.Fragment>
                            <Col xl={6}>
                              <div>
                                <Image
                                  style={{ width: "90%", height: "90%" }}
                                  src={`${baseURl}${elem.file_path}`}
                                />
                              </div>
                            </Col>
                          </React.Fragment>
                        );
                      })}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </Col>
            </Row>
          </Spin>
        </>
      )}
    </React.Fragment>
  );
}
export { MediaComp };
