// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector20Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 306 306"}
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

      <g filter={"url(#pkr2AuO50la)"}>
        <path
          d={
            "M153 301c81.738 0 148-66.262 148-148S234.738 5 153 5 5 71.262 5 153s66.262 148 148 148z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"pkr2AuO50la"}
          x={".733"}
          y={".733"}
          width={"304.533"}
          height={"304.533"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={"2.133"}
            result={"effect1_foregroundBlur_153152_157531"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Vector20Icon;
/* prettier-ignore-end */
