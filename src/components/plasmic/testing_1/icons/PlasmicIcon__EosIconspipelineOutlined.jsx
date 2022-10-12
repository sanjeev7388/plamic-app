// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EosIconspipelineOutlinedIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 26 26"}
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
          "M23.833 21.667V13a2.167 2.167 0 00-2.166-2.167H16.25V9.75h-2.167v6.5h2.167v-1.083h3.25v6.5h-1.083v2.166h6.5v-2.166h-1.084zm-1.083 0h-2.167v-7.584H16.25v-2.166h5.417A1.083 1.083 0 0122.75 13v8.667zM9.75 9.75v1.083H6.5v-6.5h1.083V2.167h-6.5v2.166h1.084V13a2.167 2.167 0 002.166 2.167H9.75v1.083h2.167v-6.5H9.75zm0 4.333H4.333A1.083 1.083 0 013.25 13V4.333h2.167v7.584H9.75v2.166z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EosIconspipelineOutlinedIcon;
/* prettier-ignore-end */
