// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector19Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 199 199"}
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
          "M99.023 198.045c54.688 0 99.022-44.334 99.022-99.022C198.045 44.333 153.711 0 99.023 0 44.333 0 0 44.334 0 99.023c0 54.688 44.334 99.022 99.023 99.022z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector19Icon;
/* prettier-ignore-end */
