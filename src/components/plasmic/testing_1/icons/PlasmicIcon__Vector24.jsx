// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector24Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 25"}
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
          "M20.453 2a5.47 5.47 0 013.91 1.64 5.7 5.7 0 010 8l-10.36 10.49-10.36-10.49a5.7 5.7 0 010-8 5.48 5.48 0 017.82 0l2.54 2.6 2.53-2.58A5.439 5.439 0 0120.453 2m0-2a7.47 7.47 0 00-5.34 2.24l-1.11 1.12-1.11-1.12a7.49 7.49 0 00-10.68 0 7.72 7.72 0 000 10.82L14.003 25l11.79-11.94a7.72 7.72 0 000-10.82A7.49 7.49 0 0020.453 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector24Icon;
/* prettier-ignore-end */
