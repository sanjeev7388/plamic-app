// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G228Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 12"}
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
          "M45.644 7.326c1.213.429 1.998 1.096 1.998 1.849 0 1.292-2.305 2.34-5.148 2.34H20.813c-2.843 0-5.148-1.048-5.148-2.34 0-.65.583-1.237 1.523-1.661H8.262C3.7 7.514 0 5.832 0 3.757S3.7 0 8.263 0h34.803c4.563 0 8.262 1.682 8.262 3.757 0 1.665-2.384 3.077-5.684 3.57z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G228Icon;
/* prettier-ignore-end */
