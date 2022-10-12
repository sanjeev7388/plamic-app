// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G1586Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 1"}
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
          "M6.014.194c0-.107-.19-.194-.426-.194H.426C.191 0 0 .087 0 .194c0 .107.19.194.426.194h5.162c.235 0 .426-.087.426-.194z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G1586Icon;
/* prettier-ignore-end */
