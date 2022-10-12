// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G332Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 8"}
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
          "M1 0v6.657c0 .244.452.442 1.01.442h4.11c.557 0 1.01-.198 1.01-.442V0"
        }
        stroke={"currentColor"}
        strokeWidth={".333"}
        strokeMiterlimit={"10"}
      ></path>
    </svg>
  );
}

export default G332Icon;
/* prettier-ignore-end */
