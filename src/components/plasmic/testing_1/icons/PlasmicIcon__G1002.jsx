// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G1002Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 2"}
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
          "M3.853.876C3.853.392 2.99 0 1.926 0 .863 0 0 .392 0 .876s.863.876 1.926.876c1.064 0 1.927-.392 1.927-.876z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G1002Icon;
/* prettier-ignore-end */
