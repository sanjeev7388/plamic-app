// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G218Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 17"}
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
        opacity={".8"}
        d={
          "M55.043 7.514h-4.475c.486.479.76 1.012.76 1.574 0 .926-.738 1.772-1.96 2.427h.849c2.842 0 5.147 1.048 5.147 2.34 0 1.293-2.305 2.341-5.147 2.341H28.536c-2.843 0-5.148-1.048-5.148-2.34 0-.363.187-.705.51-1.011H8.264C3.699 12.845 0 11.163 0 9.088S3.7 5.33 8.263 5.33h4.475c-.486-.479-.76-1.012-.76-1.574 0-2.075 3.7-3.757 8.263-3.757h34.802c4.564 0 8.263 1.682 8.263 3.757s-3.7 3.757-8.263 3.757z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G218Icon;
/* prettier-ignore-end */
