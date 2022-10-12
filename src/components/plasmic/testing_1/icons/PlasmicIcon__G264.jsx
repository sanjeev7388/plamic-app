// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G264Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 53 24"}
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
          "M52.38 8.42l-3.708 3.233H26.904v8.233h1.29L24.6 23.118H3.04L0 19.886h1.29V0h49.792v8.42h1.297z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G264Icon;
/* prettier-ignore-end */
