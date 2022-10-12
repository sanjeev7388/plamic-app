// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector17Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 222 68"}
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
          "M178.135 49.01c-1.05 7.338-7.689 12.553-15.07 11.839L20.574 47.04C7.522 45.339-1.624 33.302.241 20.278 2.121 7.135 14.463-1.874 27.556.333l140.049 33.22c6.982 1.657 11.546 8.359 10.53 15.457z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M178.158 66.318s-32.696-3.313-36.901-17.866c-3.809-13.18 8.884-18.562 8.884-18.562s11.771-7.348 26.987-9.884c10.025-1.668 29.413-2.91 31.001 2.235 2.073 6.71-19.952 6.838-19.993 11.949-.041 5.241 4.512 5.552 14.63 9.663 6.327 2.57 10.269.975 15.216 4.175 9.669 6.255-1.705 24.856-39.824 18.29z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector17Icon;
/* prettier-ignore-end */
