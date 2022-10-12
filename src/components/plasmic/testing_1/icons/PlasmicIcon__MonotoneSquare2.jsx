// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MonotoneSquare2Icon(props) {
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
          "M14.244 3.132H3.692a.56.56 0 00-.56.56v10.552c0 .31.25.56.56.56h10.552c.31 0 .56-.25.56-.56V3.692a.56.56 0 00-.56-.56z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MonotoneSquare2Icon;
/* prettier-ignore-end */
