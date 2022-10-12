// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MonotonePointLineTriangleCubeIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 91 91"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        clipRule={"evenodd"}
        d={"M49.679 13.589l9.657 41.686 17.256 21.229-26.913-62.915z"}
        stroke={"currentColor"}
        strokeWidth={".611"}
        strokeLinejoin={"round"}
      ></path>

      <path
        clipRule={"evenodd"}
        d={"M12.706 70.945l46.59-15.642-9.648-41.714-36.942 57.356z"}
        stroke={"currentColor"}
        strokeWidth={".84"}
        strokeLinejoin={"round"}
      ></path>

      <path
        clipRule={"evenodd"}
        d={"M12.706 70.919l63.797 5.585-17.231-21.178L12.706 70.92z"}
        stroke={"currentColor"}
        strokeWidth={".611"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M49.679 18.09a4.5 4.5 0 100-9.001 4.5 4.5 0 000 9zM12.795 75.18a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm64.855 6.089a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM58.68 59.826a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MonotonePointLineTriangleCubeIcon;
/* prettier-ignore-end */
