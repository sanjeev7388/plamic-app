// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G532Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 59 36"}
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
        opacity={".5"}
        d={
          "M58.59 33.05c0 .265-.476.48-1.065.48H17.33v2.313H6.87V33.53H1.066C.477 33.53 0 33.315 0 33.049c0-.183.229-.34.562-.421V0h57.08v32.573c.533.027.949.229.949.476z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G532Icon;
/* prettier-ignore-end */
