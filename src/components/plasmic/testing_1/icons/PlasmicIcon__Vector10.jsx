// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector10Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 282 268"}
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
          "M59.725 19.16c-19.967 6.891-28.699-7.653-28.699-7.653s-11.98-20.531-12-6.745c-.012 7.326-12.574-.384-16.433 8.04C-.003 18.473 9.596 23.708.68 39.146c-5.166 8.941 21.218 11.197 7.898 28.287 0 0 13.982 16.026-4.208 24.891l1.315 21.201c.765 12.338 12.01 21.325 24.22 19.353 11.64-1.879 19.426-13 17.212-24.578L42.27 82.968c29.685-4.747 24.607-45.767 17.456-63.807zm171.381 96.016l15.063-53.214s24.67-43.178 33.578-40.523c8.275 3.621-10.429 15.98-14.137 28.18 7.875-.564 4.299 11.148 4.299 11.148s6.269-.227 4.583 9.314c5.822 3.444 1.155 14.396 1.155 14.396s-11.697 28.847-24.656 48.088c0 0-21.499 16.597-19.885-17.389z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M234.453 97.196s2.247-18.25 3.928-27.546c1.681-9.298-2.247-26.089 4.536-21.64 4.559 2.992 3.765 12.98 3.6 20.347-.162 7.364 11.738 24.822 2.87 36.906-5.992 8.167-15.439 9.238-14.934-8.067z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M248.282 111.554c-6.175-4.104-14.489-2.625-18.869 3.358l-84.568 115.473c-7.421 10.868-4.526 25.704 6.439 32.986 11.061 7.345 26.002 4.14 33.072-7.096l68.452-126.578c3.412-6.307 1.449-14.173-4.526-18.143z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector10Icon;
/* prettier-ignore-end */
