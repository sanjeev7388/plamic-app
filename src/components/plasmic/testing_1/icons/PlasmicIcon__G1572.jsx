// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G1572Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 17"}
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
          "M36.625 14.427H34.26v1.711c.209.013.373.091.373.19 0 .108-.19.195-.426.195h-5.162c-.235 0-.426-.087-.426-.195 0-.099.165-.178.374-.19v-1.71H3.77L0 9.098h2.872V0H38.78v9.099h2.513l-4.667 5.328z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G1572Icon;
/* prettier-ignore-end */
