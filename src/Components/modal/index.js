import React from "react";
import { Modal } from "antd";
 function ModalComp(props) {
  const { title, open, handleCancel, width, height, footer, children } = props;
  return (
    <React.Fragment>
      <Modal
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
export {ModalComp};