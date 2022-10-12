// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G984Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 9"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 0v7.564c0 .277.482.502 1.077.502h4.386c.595 0 1.077-.225 1.077-.502V0"
        }
        stroke={"currentColor"}
        strokeWidth={".333"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default G984Icon;
/* prettier-ignore-end */
