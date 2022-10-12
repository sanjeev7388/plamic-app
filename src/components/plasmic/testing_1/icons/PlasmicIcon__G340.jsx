// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G340Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 1"}
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
          "M1.75.062C1.75.028 1.706 0 1.65 0H.101C.046 0 0 .028 0 .062c0 .035.046.063.102.063h1.547c.056 0 .102-.028.102-.063z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G340Icon;
/* prettier-ignore-end */
