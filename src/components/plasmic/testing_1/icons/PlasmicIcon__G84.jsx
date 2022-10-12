// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G84Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 13"}
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
        opacity={".4"}
        d={
          "M37.564 7.797l-3.318 3.833v.925H3.317v-.925L.265 8.064A.725.725 0 01.038 7.8l-.001-.002A.428.428 0 010 7.628c0-.484.862-.876 1.926-.876.092 0 .18.007.268.012V0h33.175v6.764c.09-.005.177-.012.268-.012 1.064 0 1.927.392 1.927.876a.422.422 0 01-.038.17h.038z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G84Icon;
/* prettier-ignore-end */
