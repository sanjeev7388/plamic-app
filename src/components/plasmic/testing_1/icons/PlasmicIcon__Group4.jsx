// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
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
          "M22.5 11.319C22.5 5.067 17.463 0 11.251 0 5.037.001 0 5.067 0 11.32c0 5.648 4.114 10.33 9.491 11.18v-7.91H6.637v-3.27h2.857V8.825c0-2.837 1.68-4.403 4.249-4.403 1.232 0 2.518.22 2.518.22v2.785h-1.418c-1.397 0-1.833.873-1.833 1.769v2.123h3.12l-.499 3.27H13.01v7.91c5.377-.85 9.491-5.532 9.491-11.18z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group4Icon;
/* prettier-ignore-end */
