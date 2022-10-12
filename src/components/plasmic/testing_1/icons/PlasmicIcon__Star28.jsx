// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Star28Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 19"}
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
          "M10.5 0l2.357 7.255h7.63l-6.173 4.484 2.358 7.256L10.5 14.51l-6.172 4.484 2.358-7.256L.514 7.255h7.629L10.5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star28Icon;
/* prettier-ignore-end */
