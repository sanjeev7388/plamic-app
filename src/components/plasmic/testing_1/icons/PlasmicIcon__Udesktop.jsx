// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UdesktopIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M14.25 2.25H3.75A2.25 2.25 0 001.5 4.5v6a2.25 2.25 0 002.25 2.25h4.5v1.5h-3a.75.75 0 100 1.5h7.5a.75.75 0 100-1.5h-3v-1.5h4.5a2.25 2.25 0 002.25-2.25v-6a2.25 2.25 0 00-2.25-2.25zM15 10.5a.75.75 0 01-.75.75H3.75A.75.75 0 013 10.5v-6a.75.75 0 01.75-.75h10.5a.75.75 0 01.75.75v6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UdesktopIcon;
/* prettier-ignore-end */
