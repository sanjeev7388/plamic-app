// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Stroke45Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 6"}
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
          "M.254.552A1.334 1.334 0 012.117.253l.168.114c.112.073.265.168.457.28.55.32 1.19.642 1.912.944 3.348 1.402 7.097 1.865 11.043.835a1.334 1.334 0 01.674 2.581c-4.566 1.191-8.897.656-12.747-.955-1.435-.6-2.48-1.21-3.072-1.638A1.333 1.333 0 01.254.552z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Stroke45Icon;
/* prettier-ignore-end */
