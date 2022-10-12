// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G988Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
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
          "M1.354.308C1.354.138 1.051 0 .677 0 .303 0 0 .138 0 .308v.7c0 .17.303.309.677.309.374 0 .677-.138.677-.308V.308z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G988Icon;
/* prettier-ignore-end */
