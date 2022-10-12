// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EvaarrowIosBackFillIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M12.09 16.666c-.16 0-.318-.031-.462-.092a1.063 1.063 0 01-.373-.26L6.079 10.6a.89.89 0 01-.244-.605.89.89 0 01.244-.605l5.358-5.713a1.12 1.12 0 01.727-.34 1.16 1.16 0 01.784.216.926.926 0 01.382.645.884.884 0 01-.243.697L8.297 10l4.63 5.104c.13.14.214.31.24.49a.86.86 0 01-.096.529 1 1 0 01-.4.399 1.174 1.174 0 01-.58.144z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EvaarrowIosBackFillIcon;
/* prettier-ignore-end */
