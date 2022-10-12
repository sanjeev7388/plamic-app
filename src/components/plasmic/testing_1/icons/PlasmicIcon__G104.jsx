// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G104Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 14"}
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
        opacity={".3"}
        d={
          "M0 6.703c0 3.702 6.6 6.703 14.741 6.703s14.742-3.001 14.742-6.703C29.483 3.001 22.883 0 14.74 0 6.601 0 0 3.001 0 6.703z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G104Icon;
/* prettier-ignore-end */
