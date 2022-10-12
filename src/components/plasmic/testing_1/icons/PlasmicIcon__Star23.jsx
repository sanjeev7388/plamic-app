// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Star23Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 11"}
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
          "M6 0l1.347 4.146h4.36L8.18 6.708l1.347 4.146L6 8.292l-3.527 2.562L3.82 6.708.294 4.146h4.359L6 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star23Icon;
/* prettier-ignore-end */
