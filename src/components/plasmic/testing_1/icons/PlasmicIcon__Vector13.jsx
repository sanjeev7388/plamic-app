// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector13Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 94 165"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M15.817 162.418l-.686-.265c-12.203-4.738-18.255-18.467-13.518-30.666l45.19-116.362c4.74-12.2 18.476-18.249 30.679-13.512l.686.266c12.204 4.737 18.255 18.466 13.516 30.668L46.495 148.904c-4.738 12.202-18.474 18.251-30.678 13.514z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector13Icon;
/* prettier-ignore-end */
