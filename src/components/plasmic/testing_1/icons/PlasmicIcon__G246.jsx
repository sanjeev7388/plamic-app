// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function G246Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 19"}
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
          "M15.54 13.865c0-.627-.183-1.223-.498-1.775C14.022 10.121 7.282 0 7.282 0S.93 11.037.381 12.301A3.474 3.474 0 000 13.865c0 2.79 3.481 5.056 7.773 5.056 4.291 0 7.766-2.266 7.766-5.056z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default G246Icon;
/* prettier-ignore-end */
