// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G1066Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 1"}
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
          "M32.32.481c0-.266-.475-.481-1.06-.481H1.059C.474 0 0 .215 0 .481s.474.482 1.058.482h30.203c.584 0 1.058-.216 1.058-.482z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G1066Icon;
/* prettier-ignore-end */
