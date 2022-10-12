// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AntDesignplusCircleFilledIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 60 60"}
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
          "M29.906 3.75C15.456 3.75 3.738 15.504 3.738 30s11.717 26.25 26.168 26.25c14.45 0 26.167-11.754 26.167-26.25S44.356 3.75 29.906 3.75zM41.12 31.406a.47.47 0 01-.467.469h-8.878v8.906a.47.47 0 01-.467.469h-2.804a.47.47 0 01-.467-.469v-8.906h-8.879a.47.47 0 01-.467-.469v-2.812a.47.47 0 01.467-.469h8.879v-8.906a.47.47 0 01.467-.469h2.803a.47.47 0 01.468.469v8.906h8.878a.47.47 0 01.467.469v2.812z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AntDesignplusCircleFilledIcon;
/* prettier-ignore-end */
