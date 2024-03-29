import { Button as AntDButton } from "antd";
function Button({ className, onClickHandler, children }) {
  return (
    <AntDButton className={className} onClick={onClickHandler}>
      {children}
    </AntDButton>
  );
}

export { Button };
