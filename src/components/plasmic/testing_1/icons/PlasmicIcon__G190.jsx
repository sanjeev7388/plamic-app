// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G190Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 11"}
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
          "M23.376 10.574H0V0h9.783c3.436 0 6.221 1.267 6.221 2.829 0 .828-.787 1.57-2.035 2.088h9.407c3.436 0 6.221 1.266 6.221 2.829 0 1.562-2.785 2.828-6.22 2.828z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G190Icon;
/* prettier-ignore-end */
