// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G1072Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 1"}
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
          "M0 .106C0 .048.105 0 .234 0H4.67c.13 0 .234.048.234.106 0 .059-.105.106-.234.106H.234C.104.212 0 .165 0 .106z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G1072Icon;
/* prettier-ignore-end */
