// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G724Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 21"}
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
        opacity={".2"}
        d={
          "M31.944 18.382c0 .292-.54.53-1.207.53h-3.421v2.06h-10.46v-2.06H0V0h30.824v17.856c.625.02 1.12.246 1.12.526z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G724Icon;
/* prettier-ignore-end */
