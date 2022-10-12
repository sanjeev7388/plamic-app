// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G154Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 47 7"}
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
        opacity={".8"}
        d={
          "M46.486 3.403c0-1.88-3.35-3.403-7.483-3.403H7.483C3.35 0 0 1.523 0 3.403c0 1.879 3.35 3.402 7.483 3.402h31.52c4.133 0 7.483-1.523 7.483-3.402z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G154Icon;
/* prettier-ignore-end */
