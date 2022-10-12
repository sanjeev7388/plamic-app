// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EosIconsfileSystemOutlinedIcon(props) {
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
          "M22.75 8.667h-2.806l-1.083-1.084H16.25a2.173 2.173 0 00-2.167 2.167v4.333a2.174 2.174 0 002.167 2.167h6.5a2.173 2.173 0 002.167-2.167v-3.25a2.173 2.173 0 00-2.167-2.166zm0 5.416h-6.5V9.75h2.167l1.083 1.083h3.25v3.25zm0 4.334h-2.806l-1.083-1.084H16.25a2.174 2.174 0 00-2.167 2.167v4.333A2.174 2.174 0 0016.25 26h6.5a2.173 2.173 0 002.167-2.167v-3.25a2.173 2.173 0 00-2.167-2.166zm0 5.416h-6.5V19.5h2.167l1.083 1.083h3.25v3.25zm-14.083-3.25V13h5.416v-2.167H8.667V8.667H6.5V22.75h7.583v-2.167H8.667zm2.166-19.5H8.027L6.944 0h-2.61a2.173 2.173 0 00-2.167 2.167V6.5a2.173 2.173 0 002.166 2.167h6.5A2.173 2.173 0 0013 6.5V3.25a2.173 2.173 0 00-2.167-2.167zm0 5.417h-6.5V2.167H6.5L7.583 3.25h3.25V6.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EosIconsfileSystemOutlinedIcon;
/* prettier-ignore-end */
