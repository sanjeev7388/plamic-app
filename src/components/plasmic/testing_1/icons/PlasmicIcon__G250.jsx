// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G250Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 6"}
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
          "M7.836 2.55c0 1.409-1.754 2.55-3.918 2.55S0 3.96 0 2.55C0 1.142 1.754 0 3.918 0s3.918 1.142 3.918 2.55z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G250Icon;
/* prettier-ignore-end */
