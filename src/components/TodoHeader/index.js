import React from "react";

function TodoHeader({ children, loading }) {
  const isChildren = React.Children.toArray(children).map((child) =>
    React.cloneElement(child, { loading })
  );

  return <header>{isChildren}</header>;
}
export { TodoHeader };
