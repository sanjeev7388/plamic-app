// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Fill109Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 67 84"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M44.692 83.947L64.57 32.765c4.79-12.338-1.387-26.352-13.73-31.142-12.34-4.79-26.359 1.384-31.153 13.722L0 66.043l44.692 17.904z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill109Icon;
/* prettier-ignore-end */
