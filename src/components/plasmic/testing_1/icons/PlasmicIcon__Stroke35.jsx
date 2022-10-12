// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Stroke35Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 94 4"}
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
          "M.643 0L93.08 2.077a.629.629 0 01.1 1.247l-.128.01L.615 1.257A.629.629 0 01.516.01L.643 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Stroke35Icon;
/* prettier-ignore-end */
