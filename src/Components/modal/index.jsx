import React from "react";

import { Modal } from "antd";

import "./modal.scss";

function ModalComp({
  modalString,
  title,
  open,
  handleCancel,
  width,
  height,
  footer,
  children,
}) {
  return (
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
  );
}
export { ModalComp };
