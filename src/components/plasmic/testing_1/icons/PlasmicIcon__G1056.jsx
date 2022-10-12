// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G1056Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 36"}
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
        opacity={".3"}
        d={
          "M32.32 33.026c0 .266-.475.481-1.06.481h-3.29v2.312H17.51v-2.312H1.058c-.584 0-1.058-.215-1.058-.48 0-.218.317-.399.75-.46V0h30.824v32.569c.43.06.745.241.745.457z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G1056Icon;
/* prettier-ignore-end */
