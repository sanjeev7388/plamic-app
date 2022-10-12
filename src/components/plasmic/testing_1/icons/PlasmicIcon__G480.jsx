// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G480Icon(props) {
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
          "M4.904.106C4.904.048 4.799 0 4.67 0H.234C.104 0 0 .048 0 .106c0 .059.105.106.234.106H4.67c.13 0 .234-.047.234-.106z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G480Icon;
/* prettier-ignore-end */
