// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G336Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
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
          "M1.27.289C1.27.129.984 0 .634 0 .284 0 0 .13 0 .289v.656c0 .16.284.289.635.289.35 0 .634-.13.634-.289V.29z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G336Icon;
/* prettier-ignore-end */
