function ConditionalRenderer({ condition, children }) {
  return <>{condition ? children : null}</>;
}
export { ConditionalRenderer };
