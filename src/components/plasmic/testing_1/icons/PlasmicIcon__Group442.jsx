// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group442Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 209 250"}
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
          "M73.438 37.527H0C0 154.684 93.342 250 208.05 250v-74.996c-74.238 0-134.642-61.671-134.642-137.477"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M36.949 0c20.405 0 36.939 16.807 36.939 37.528 0 20.72-16.534 37.527-36.94 37.527C16.545 75.055 0 58.258 0 37.528 0 16.797 16.544 0 36.949 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group442Icon;
/* prettier-ignore-end */
