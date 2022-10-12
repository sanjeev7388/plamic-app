// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function BxlspotifyIcon(props) {
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
          "M15.75 4.5C9.564 4.5 4.5 9.563 4.5 15.75S9.563 27 15.75 27 27 21.937 27 15.75 21.994 4.5 15.75 4.5zm5.175 16.256c-.224.337-.618.45-.957.226-2.645-1.633-5.964-1.97-9.902-1.07-.392.114-.73-.167-.842-.506-.114-.394.168-.73.507-.844 4.273-.957 7.987-.562 10.911 1.239.394.168.45.617.283.955zm1.351-3.093c-.282.393-.788.561-1.183.28-3.037-1.854-7.649-2.419-11.192-1.293-.449.114-.958-.112-1.069-.56-.114-.453.113-.96.562-1.072 4.106-1.237 9.17-.618 12.656 1.52.338.169.506.73.226 1.125zm.112-3.152c-3.6-2.136-9.62-2.362-13.052-1.29a1.056 1.056 0 01-1.292-.676 1.055 1.055 0 01.674-1.296c3.994-1.182 10.576-.958 14.74 1.52.505.281.674.957.392 1.463-.281.394-.956.56-1.462.279z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default BxlspotifyIcon;
/* prettier-ignore-end */
