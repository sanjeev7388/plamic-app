// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UfavoriteIcon(props) {
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
          "M16.5 7.253a.75.75 0 00-.646-.503l-4.267-.622L9.674 2.25a.75.75 0 00-1.35 0L6.412 6.12l-4.268.63a.75.75 0 00-.607.51.75.75 0 00.187.75l3.098 3-.75 4.26a.75.75 0 001.102.81L9 14.078l3.825 2.002c.105.06.224.09.345.09a.75.75 0 00.702-.473.75.75 0 00.04-.42l-.75-4.26 3.098-3a.75.75 0 00.24-.764zm-4.613 3a.75.75 0 00-.218.66l.54 3.15-2.82-1.5a.795.795 0 00-.705 0l-2.82 1.5.54-3.15a.75.75 0 00-.217-.66l-2.25-2.25 3.157-.458a.75.75 0 00.57-.412L9 4.275l1.41 2.865a.75.75 0 00.57.413l3.158.457-2.25 2.243z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UfavoriteIcon;
/* prettier-ignore-end */
