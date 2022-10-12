// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Fill71Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 123 155"}
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
          "M111.94 150.048c10.907-7.6 13.583-22.601 5.977-33.505L43.822 10.303C36.216-.598 21.212-3.274 10.305 4.326-.6 11.926-3.275 26.927 4.328 37.83l74.098 106.24c7.603 10.903 22.606 13.578 33.514 5.977z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill71Icon;
/* prettier-ignore-end */
