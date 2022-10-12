// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 10"}
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
        d={"M9.188 4.813a2.188 2.188 0 11-4.376 0 2.188 2.188 0 014.375 0z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M0 4.813S2.625 0 7 0s7 4.813 7 4.813-2.625 4.812-7 4.812-7-4.813-7-4.813zm7 3.062A3.062 3.062 0 107 1.75a3.062 3.062 0 000 6.125z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
