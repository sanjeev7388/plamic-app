// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function CarbonlocationFilledIcon(props) {
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
          "M8.076 1.047a5.392 5.392 0 00-3.854 1.641 5.677 5.677 0 00-1.6 3.956A5.635 5.635 0 003.721 10s.149.201.173.23l4.182 5.061 4.185-5.063c.022-.027.171-.228.171-.228a5.634 5.634 0 001.099-3.356 5.678 5.678 0 00-1.6-3.956 5.392 5.392 0 00-3.854-1.64zm0 7.632a1.95 1.95 0 01-1.101-.343 2.025 2.025 0 01-.73-.914 2.084 2.084 0 01-.114-1.175c.077-.395.266-.758.543-1.042.277-.285.63-.479 1.016-.557a1.937 1.937 0 011.145.116c.363.154.673.414.89.749a2.073 2.073 0 01-.247 2.569 1.96 1.96 0 01-1.402.597z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default CarbonlocationFilledIcon;
/* prettier-ignore-end */
