// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MonotoneDarkArrowIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 59 59"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M27.86 32.798a.647.647 0 01.619.46l3.29 10.895a.823.823 0 00.73.594.82.82 0 00.822-.455L48.366 14.75a.826.826 0 00-.075-.886.823.823 0 00-.825-.324L14.37 19.666a.824.824 0 00-.67.656.825.825 0 00.352.869l9.738 6.588a.648.648 0 01.022 1.057L9.96 39.065a.33.33 0 00-.076.454l3.037 4.404a.328.328 0 00.475.072l14.065-11.059a.645.645 0 01.398-.138z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MonotoneDarkArrowIcon;
/* prettier-ignore-end */
