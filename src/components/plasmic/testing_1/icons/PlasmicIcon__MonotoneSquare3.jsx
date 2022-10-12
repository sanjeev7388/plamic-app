// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MonotoneSquare3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 20"}
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
          "M14.675 3.322H3.806a.586.586 0 00-.578.594v11.191c0 .328.259.594.577.594h10.871a.586.586 0 00.577-.594V3.916a.586.586 0 00-.577-.594z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MonotoneSquare3Icon;
/* prettier-ignore-end */
