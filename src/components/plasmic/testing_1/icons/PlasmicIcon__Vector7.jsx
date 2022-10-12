// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector7Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 287 77"}
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
          "M235.494.932l-41.155.536-1.102 75.387 92.732-1.202.077-11.573a8.784 8.784 0 00-7.211-8.669l-24.711-6.917-12.741-7.032a11.863 11.863 0 01-6.138-10.548c.125-9.417.318-25.395.249-29.982zM59.075 0l41.149.925-7.508 75.397L0 74.238l.033-11.573a8.784 8.784 0 017.293-8.6l24.777-6.683L44.91 40.47c3.86-2.082 7.25-6.324 8.631-10.486 2.554-7.696 5.42-25.4 5.535-29.984z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector7Icon;
/* prettier-ignore-end */
