// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G166Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 41 8"}
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
        opacity={".8"}
        d={
          "M32.436 7.745H0V0h32.436c4.704 0 8.517 1.734 8.517 3.873 0 2.139-3.813 3.872-8.517 3.872z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G166Icon;
/* prettier-ignore-end */
