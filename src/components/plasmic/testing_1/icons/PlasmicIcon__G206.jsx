// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G206Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 60 13"}
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
          "M52.037 6.47H41.63c1.571.594 2.572 1.489 2.572 2.49 0 1.787-3.186 3.236-7.115 3.236H7.114C3.185 12.196 0 10.747 0 8.96c0-1.787 3.186-3.235 7.115-3.235h10.407c-1.57-.594-2.571-1.488-2.571-2.49C14.95 1.448 18.136 0 22.066 0h29.971c3.93 0 7.116 1.448 7.116 3.235s-3.186 3.236-7.116 3.236z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G206Icon;
/* prettier-ignore-end */
