// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector14Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 313 284"}
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
          "M104.905 14.482C83.255 16.177 19.412 151.256 0 200.16c2.585 9.849 30.831 28.913 30.831 28.913s-1.688 7.84-2.73 12.551c18.475 15.189 54.205 23.44 54.205 23.44l.079 6.738c57.127 26.296 133.625 1.095 133.625 1.095s1.427-1.461.404-6.745c25.937-.302 81.476-33.197 81.476-33.197l-7.895-16.275 22.843-23.373s-61.686-113.44-80.672-145.172c-16.67-27.855-32.305-35.876-32.305-35.876s-56.543-.784-94.956 2.223z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M203.998 14.48l-1.631-12.372S153.506 2.4 105.584 0c-1.21 5.493-2.601 15.376-2.601 15.376 4.028-3.308 47.558 6.353 101.015-.896z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector14Icon;
/* prettier-ignore-end */
