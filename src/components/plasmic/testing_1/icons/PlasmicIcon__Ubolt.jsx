// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UboltIcon(props) {
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
          "M14.903 6.45a.75.75 0 00-.652-.45h-3.435l.952-3.555a.748.748 0 00-.72-.945h-5.25a.75.75 0 00-.75.555l-2.01 7.5a.75.75 0 00.728.945h2.902l-1.357 5.055a.75.75 0 001.282.698l8.175-9a.75.75 0 00.135-.803zm-7.342 6.51l.802-3a.75.75 0 00-.72-.945h-2.88L6.368 3h3.698l-.953 3.555a.75.75 0 00.75.945h2.678l-4.98 5.46z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UboltIcon;
/* prettier-ignore-end */
