// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PssuitcaseIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 17"}
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
          "M13.286 4.586h-2.167V3.491c0-.458-.157-.844-.472-1.158a1.578 1.578 0 00-1.16-.47H7.295c-.459 0-.846.156-1.16.47-.314.314-.472.7-.472 1.158v1.095H3.496a1.6 1.6 0 00-1.16.458c-.314.306-.471.696-.471 1.171v7.052c0 .459.157.845.471 1.159.315.314.701.47 1.16.47h9.79c.459 0 .846-.156 1.16-.47.314-.314.472-.7.472-1.159V6.215c0-.475-.158-.865-.472-1.17a1.6 1.6 0 00-1.16-.459zM6.76 3.491c0-.356.178-.534.535-.534h2.192c.357 0 .536.178.536.534v1.095H6.76V3.491zm-3.264 10.31c-.357 0-.535-.177-.535-.534V6.215c0-.373.178-.56.535-.56h.536v8.147h-.536zm1.632 0V5.656h6.526v8.147H5.128zm8.693-.534c0 .357-.178.535-.535.535h-.535V5.655h.535c.357 0 .535.187.535.56v7.052z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PssuitcaseIcon;
/* prettier-ignore-end */
