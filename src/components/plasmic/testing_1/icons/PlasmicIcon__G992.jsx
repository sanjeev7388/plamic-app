// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G992Icon(props) {
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
          "M1.868.067C1.868.03 1.82 0 1.76 0H.11C.049 0 0 .03 0 .067c0 .037.049.067.109.067h1.65c.06 0 .11-.03.11-.067z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G992Icon;
/* prettier-ignore-end */
