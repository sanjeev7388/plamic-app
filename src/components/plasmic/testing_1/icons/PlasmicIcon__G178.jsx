// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G178Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 8"}
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
          "M8.517 7.745h32.436V0H8.517C3.813 0 0 1.734 0 3.873c0 2.139 3.813 3.872 8.517 3.872z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G178Icon;
/* prettier-ignore-end */
