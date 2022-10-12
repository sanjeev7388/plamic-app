// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AntDesignplusOutlinedIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
          "M7.897 2.488h.983c.087 0 .131.044.131.131v11.518c0 .087-.044.13-.13.13h-.984c-.088 0-.131-.043-.131-.13V2.618c0-.087.043-.13.13-.13z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M2.881 7.754h11.014c.087 0 .13.044.13.13v.982c0 .088-.043.131-.13.131H2.88c-.087 0-.131-.043-.131-.13v-.982c0-.087.044-.131.131-.131z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AntDesignplusOutlinedIcon;
/* prettier-ignore-end */
