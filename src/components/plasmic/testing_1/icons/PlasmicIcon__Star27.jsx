// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Star27Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
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
        d={
          "M6.133 0L7.51 4.233h4.457L8.36 6.85l1.377 4.233-3.605-2.616-3.605 2.616L3.905 6.85.3 4.233h4.456L6.133 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star27Icon;
/* prettier-ignore-end */
