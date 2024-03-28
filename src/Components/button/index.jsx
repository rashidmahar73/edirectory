import { Button as AntDButton } from "antd";
function Button({ className, onClickHandler, data }) {
  return (
    <AntDButton className={className} onClick={onClickHandler}>
      {data}
    </AntDButton>
  );
}

export { Button };
