// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Stroke75Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 73 47"}
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
          "M.326.137a.76.76 0 01.97.083l.088.105 30.97 44.405 38.572-27.506a.76.76 0 01.971.073l.09.104a.76.76 0 01-.074.971l-.104.09-39.197 27.952a.76.76 0 01-.977-.078l-.088-.106L.137 1.195A.76.76 0 01.326.137z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Stroke75Icon;
/* prettier-ignore-end */
