// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EvapersonFillIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
          "M8.391 7.681a2.8 2.8 0 002.584-1.724 2.79 2.79 0 00-2.038-3.808 2.8 2.8 0 00-2.871 1.187 2.79 2.79 0 00.347 3.527 2.8 2.8 0 001.978.818zm4.196 6.983a.7.7 0 00.699-.698c0-1.297-.516-2.54-1.434-3.457a4.899 4.899 0 00-6.922 0 4.885 4.885 0 00-1.434 3.457.698.698 0 00.7.698h8.39z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EvapersonFillIcon;
/* prettier-ignore-end */
