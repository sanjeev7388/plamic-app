// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G148Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 10"}
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
        opacity={".9"}
        d={
          "M39.044 5.28H35.47c.376.349.593.74.593 1.156 0 1.458-2.6 2.64-5.805 2.64H5.806C2.599 9.076 0 7.894 0 6.436c0-1.458 2.599-2.64 5.806-2.64h3.572c-.376-.35-.593-.741-.593-1.156 0-1.458 2.6-2.64 5.805-2.64h24.453c3.207 0 5.806 1.182 5.806 2.64 0 1.458-2.599 2.64-5.805 2.64z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G148Icon;
/* prettier-ignore-end */
