// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MonotoneSquareIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 31"}
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
          "M24.603 5.41H6.378a.967.967 0 00-.968.967v18.226c0 .534.433.967.968.967h18.225a.967.967 0 00.967-.967V6.377a.967.967 0 00-.967-.967z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MonotoneSquareIcon;
/* prettier-ignore-end */
