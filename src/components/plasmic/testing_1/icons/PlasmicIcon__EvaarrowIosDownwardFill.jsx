// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EvaarrowIosDownwardFillIcon(props) {
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
          "M8.993 11.998a.554.554 0 01-.41-.197L4.731 7.517a.972.972 0 01-.23-.58 1.063 1.063 0 01.146-.628c.11-.174.266-.284.436-.305a.544.544 0 01.47.194l3.439 3.838 3.44-3.7a.61.61 0 01.222-.157.489.489 0 01.25-.03.535.535 0 01.24.1c.074.054.14.127.193.215a.956.956 0 01.13.303 1.13 1.13 0 01-.049.683.834.834 0 01-.171.264l-3.85 4.138a.528.528 0 01-.405.146z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EvaarrowIosDownwardFillIcon;
/* prettier-ignore-end */
