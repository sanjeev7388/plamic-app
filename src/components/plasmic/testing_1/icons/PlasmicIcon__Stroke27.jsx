// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Stroke27Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 4"}
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
          "M1.257 0l39.67.892a1.23 1.23 0 01.112 2.448l-.167.008-39.67-.892A1.23 1.23 0 011.09.007L1.257 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Stroke27Icon;
/* prettier-ignore-end */
