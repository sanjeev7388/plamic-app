// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector12Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 183 183"}
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
          "M143.541 90.709L112.129 45.67c-7.572-10.856-4.883-25.933 5.979-33.503 10.86-7.57 25.942-4.88 33.514 5.978l31.114 44.608-39.195 27.955z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M132.977 51.187c5.143 11.203 14.671 30.487 15.854 43.226 1.922 20.656-11.529 36.025-11.529 36.025s-.136-6.074-1.442 47.439c-61.62 10.806-100.907-.683-100.907-.683l1.2-14.186-10.006-33.531s-6.08-12.489-18.573-40.346C-1.11 69.764-.507 45.755.67 32.917c.505-5.5-2.109-16.982 3.35-17.84 18.546-2.916 31.417-4.486 31.417-4.486l2.257-6.934A4.263 4.263 0 0141.913 0h47.685a4.258 4.258 0 014.127 3.203l3.342 7.388 25.131.896c4.402.863 8.209 14.65 8.668 19.11l2.111 20.59z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector12Icon;
/* prettier-ignore-end */
