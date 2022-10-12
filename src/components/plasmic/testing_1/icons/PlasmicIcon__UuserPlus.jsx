// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UuserPlusIcon(props) {
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
          "M15.75 7.875H15v-.75a.75.75 0 10-1.5 0v.75h-.75a.75.75 0 100 1.5h.75v.75a.75.75 0 101.5 0v-.75h.75a.75.75 0 100-1.5zm-5.775 1.29a3.69 3.69 0 001.275-2.79 3.75 3.75 0 00-7.5 0 3.69 3.69 0 001.275 2.79 6 6 0 00-3.525 5.46.75.75 0 101.5 0 4.5 4.5 0 119 0 .75.75 0 101.5 0 6 6 0 00-3.525-5.46zM7.5 8.625a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UuserPlusIcon;
/* prettier-ignore-end */
