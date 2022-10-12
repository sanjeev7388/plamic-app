// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GrayCorrelation2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 87 87"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M77.287 11.42a4.667 4.667 0 01-.722 6.551 4.628 4.628 0 01-3.007 1.023l-.001-.001c-10.765 1.374-12.504 8.017-12.78 9.839a3.303 3.303 0 00-.05.463l-.017-.023a4.654 4.654 0 01-5.07 3.703 4.66 4.66 0 01-4.113-5.145 4.654 4.654 0 015.059-4.13l.076.009c8.473.614 11.575-7.3 12.39-10.031a4.646 4.646 0 011.697-2.983 4.646 4.646 0 016.538.724z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M74.24 9.616a4.666 4.666 0 11-1.025 9.275 4.666 4.666 0 011.025-9.275z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GrayCorrelation2Icon;
/* prettier-ignore-end */
