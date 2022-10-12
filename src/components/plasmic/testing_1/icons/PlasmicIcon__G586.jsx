// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G586Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 1"}
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
          "M8.898.193c0-.107-.19-.193-.423-.193H.424C.19 0 0 .086 0 .193c0 .106.19.192.424.192h8.05c.234 0 .424-.086.424-.192z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G586Icon;
/* prettier-ignore-end */
