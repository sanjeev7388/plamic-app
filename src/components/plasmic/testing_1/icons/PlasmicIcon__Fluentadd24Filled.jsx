// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Fluentadd24FilledIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
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
          "M8.912 2.255L9 2.25a.75.75 0 01.745.662L9.75 3v5.25H15a.75.75 0 01.745.662L15.75 9a.75.75 0 01-.662.745L15 9.75H9.75V15a.75.75 0 01-.662.745L9 15.75a.75.75 0 01-.745-.662L8.25 15V9.75H3a.75.75 0 01-.745-.662L2.25 9a.75.75 0 01.662-.745L3 8.25h5.25V3a.75.75 0 01.662-.745L9 2.25l-.088.005z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fluentadd24FilledIcon;
/* prettier-ignore-end */
