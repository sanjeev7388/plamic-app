// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Stroke15Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 94 3"}
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
          "M93.071 0a.629.629 0 01.143 1.243l-.126.014-92.451 1.2a.629.629 0 01-.143-1.243L.621 1.2 93.07 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Stroke15Icon;
/* prettier-ignore-end */
