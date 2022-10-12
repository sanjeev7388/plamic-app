// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group441Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 142 107"}
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
          "M73.438 0H0c0 58.98 47.011 106.957 104.745 106.957V31.962C87.481 31.962 73.438 17.628 73.438 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M104.714 31.902c20.405 0 36.949 16.797 36.949 37.528 0 20.73-16.514 37.527-36.949 37.527-20.434 0-36.948-16.807-36.948-37.527 0-20.721 16.544-37.528 36.948-37.528"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group441Icon;
/* prettier-ignore-end */
