// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G542Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 59 1"}
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
          "M58.59.481c0-.266-.476-.481-1.065-.481H1.065C.478 0 0 .215 0 .481s.477.482 1.066.482h56.459c.589 0 1.066-.216 1.066-.482z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G542Icon;
/* prettier-ignore-end */
