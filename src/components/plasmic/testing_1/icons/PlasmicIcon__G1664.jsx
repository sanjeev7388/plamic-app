// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G1664Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 1"}
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
          "M4.157.077C4.157.035 4.08 0 3.987 0H.17C.076 0 0 .035 0 .077 0 .12.076.155.17.155h3.817c.093 0 .17-.035.17-.078z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G1664Icon;
/* prettier-ignore-end */
