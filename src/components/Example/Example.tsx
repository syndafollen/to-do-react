import React from "react";
import { Tags } from "../Tags";
import { List } from "../List";

export const Example = ({ property1, property2, ...restProps }) => {
    

  return (
    <>
      <List property1={property1} property2={property2} />
      <Tags {...tagsProps} />
    </>
  );
};
