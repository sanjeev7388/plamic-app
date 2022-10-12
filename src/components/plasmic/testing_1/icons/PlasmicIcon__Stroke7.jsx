// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Stroke7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 43 3"}
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
          "M40.89 0a1.229 1.229 0 01.2 2.444l-.167.013-39.678.514A1.229 1.229 0 011.047.527l.166-.013L40.891 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Stroke7Icon;
/* prettier-ignore-end */
