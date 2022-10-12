// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CiyoutubeIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
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
          "M15.764 23.25h-.023c-.07 0-7.042-.013-8.801-.49a2.81 2.81 0 01-1.983-1.985 29.78 29.78 0 01-.456-5.406 29.953 29.953 0 01.468-5.415A2.882 2.882 0 016.955 7.95c1.71-.45 8.49-.45 8.779-.45h.023c.071 0 7.062.013 8.803.491a2.814 2.814 0 011.98 1.982c.326 1.792.48 3.61.458 5.43a29.867 29.867 0 01-.47 5.408 2.822 2.822 0 01-1.986 1.982c-1.709.453-8.49.457-8.778.457zm-2.248-11.248l-.006 6.744 5.859-3.372-5.853-3.372z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CiyoutubeIcon;
/* prettier-ignore-end */
