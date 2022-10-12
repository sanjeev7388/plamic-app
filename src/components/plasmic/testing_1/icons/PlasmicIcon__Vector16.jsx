// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector16Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 122 78"}
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
          "M121.083 0a.76.76 0 01.136 1.508l-.136.012H80.298a.76.76 0 01-.137-1.508L80.298 0h40.785zM64.622 25.404a.76.76 0 011.455.418l-.038.132-19.878 51.18a.76.76 0 01-.86.47l-.132-.04L.478 59.66a.76.76 0 01.434-1.45l.131.04 43.979 17.617 19.6-50.463z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector16Icon;
/* prettier-ignore-end */
