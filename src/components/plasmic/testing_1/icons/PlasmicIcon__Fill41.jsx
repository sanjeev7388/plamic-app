// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Fill41Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 252 202"}
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
          "M186.355 62.86s24.993-7.805 36.082 18.152c26.236 5.048 23.802 33.169 23.802 33.169s15.852 19.247-7.144 34.083c1.504 22.08-23.869 22.08-23.869 22.08s-3.245 17.764-23.154 13.846c-17.762 19.017-56.496 21.966-73.156 4.855-23.701 24.389-74.458 7.364-71.518-11.91-31.737 3.124-52.311-27.769-38.422-59.025-17.731-20.13-3.72-35.926-3.72-35.926S-7.428 31.46 27.085 18.838C40.957-11.789 84.099 4.14 84.099 4.14s25.352-9.634 38.394 11.614c30.023-.181 31.226 16.14 35.642 29.299 26.461-2.708 28.22 17.806 28.22 17.806z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Fill41Icon;
/* prettier-ignore-end */
