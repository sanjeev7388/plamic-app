// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G1308Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 1"}
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
          "M4.904.106C4.904.047 4.799 0 4.67 0H.234C.104 0 0 .047 0 .106s.105.106.234.106H4.67c.13 0 .234-.047.234-.106z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G1308Icon;
/* prettier-ignore-end */
