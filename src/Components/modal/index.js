import React from "react";
import { Modal } from "antd";
import "./modal.scss";
function ModalComp(props) {
  const {
    modalString,
    title,
    open,
    handleCancel,
    width,
    height,
    footer,
    children,
  } = props;
  return (
    <React.Fragment>
      <Modal
        className={modalString}
        title={title}
        open={open}
        onCancel={handleCancel}
        width={width}
        height={height}
        footer={footer}
      >
        {children}
      </Modal>
    </React.Fragment>
  );
}
export { ModalComp };
