// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Group5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
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
          "M0 1.88A1.88 1.88 0 011.88 0h18.738A1.879 1.879 0 0122.5 1.88v18.738a1.88 1.88 0 01-1.88 1.882H1.88A1.88 1.88 0 010 20.62V1.88zm8.906 6.699h3.047v1.53c.44-.88 1.564-1.671 3.255-1.671 3.241 0 4.009 1.751 4.009 4.966v5.954h-3.28v-5.222c0-1.83-.44-2.863-1.556-2.863-1.55 0-2.194 1.113-2.194 2.863v5.222H8.906V8.578zM3.28 19.219h3.28V8.436H3.28v10.782zM7.03 4.92a2.11 2.11 0 11-4.218.093A2.11 2.11 0 017.03 4.92z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group5Icon;
/* prettier-ignore-end */
