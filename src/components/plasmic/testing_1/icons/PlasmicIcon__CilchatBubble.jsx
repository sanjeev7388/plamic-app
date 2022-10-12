// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CilchatBubbleIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 19"}
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
          "M17.508 14.055c1.192-.974 1.867-2.272 1.867-3.62 0-1.431-.731-2.77-2.059-3.77-1.292-.973-3.002-1.509-4.816-1.509s-3.524.536-4.816 1.509c-1.328 1-2.059 2.339-2.059 3.77 0 1.432.731 2.771 2.059 3.77 1.292.974 3.002 1.51 4.816 1.51.242 0 .485-.01.726-.03l.412.327c1.42 1.128 3.234 1.748 5.112 1.748h.625v-1.22l-.183-.167a7.12 7.12 0 01-1.684-2.318zm-3.051 1.091l-.827-.656-.276.03a7.666 7.666 0 01-.854.048c-3.102 0-5.625-1.854-5.625-4.133S9.398 6.302 12.5 6.302s5.625 1.854 5.625 4.133c0 1.136-.618 2.196-1.74 2.985l-.36.253.166.431c.34.88.84 1.701 1.48 2.429a6.83 6.83 0 01-3.214-1.387z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M2.351 11.368a7.73 7.73 0 001.36-2.257l.165-.429-.36-.253c-1.058-.744-1.641-1.743-1.641-2.812 0-2.15 2.383-3.898 5.312-3.898 2.155 0 4.015.946 4.847 2.302a10.473 10.473 0 011.397.031c-.322-.764-.88-1.461-1.648-2.04C10.55 1.085 8.918.573 7.187.573c-1.73 0-3.362.512-4.595 1.44C1.324 2.969.625 4.249.625 5.618c0 1.282.639 2.517 1.768 3.446a6.74 6.74 0 01-1.585 2.174l-.183.168v1.2h.625a8.006 8.006 0 003.33-.722 5.198 5.198 0 01-.199-1.204 6.563 6.563 0 01-2.03.689z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CilchatBubbleIcon;
/* prettier-ignore-end */
