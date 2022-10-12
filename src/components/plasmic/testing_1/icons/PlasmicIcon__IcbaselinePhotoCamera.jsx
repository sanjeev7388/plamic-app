// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IcbaselinePhotoCameraIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 50"}
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
        d={"M25 31.667a6.667 6.667 0 100-13.334 6.667 6.667 0 000 13.334z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M18.75 4.167l-3.813 4.166H8.334A4.179 4.179 0 004.167 12.5v25a4.179 4.179 0 004.166 4.167h33.334a4.179 4.179 0 004.166-4.167v-25a4.179 4.179 0 00-4.166-4.167h-6.605L31.25 4.167h-12.5zM25 35.417c-5.75 0-10.417-4.667-10.417-10.417S19.25 14.583 25 14.583 35.417 19.25 35.417 25 30.75 35.417 25 35.417z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IcbaselinePhotoCameraIcon;
/* prettier-ignore-end */
