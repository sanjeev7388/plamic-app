// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Vector11Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 53 26"}
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
          "M19.334 14.326c.7-.112 1.359.365 1.47 1.065.778 4.87-2.25 9.444-6.832 10.18-4.58.73-8.886-2.674-9.664-7.543a1.284 1.284 0 012.536-.404c.561 3.514 3.594 5.91 6.722 5.412 3.132-.503 5.264-3.724 4.703-7.24a1.284 1.284 0 011.065-1.47zm32.126-4.245a1.218 1.218 0 011.396 1.01c.771 4.812-1.887 9.323-6.077 9.993-4.189.67-8.122-2.786-8.893-7.598a1.218 1.218 0 112.406-.385c.573 3.574 3.353 6.017 6.103 5.578 2.749-.44 4.628-3.63 4.056-7.203a1.218 1.218 0 011.01-1.395zM5.953 1.4c4.215-1.633 8.664-1.713 12.8-.88l.665.144a15 15 0 011.392.38 1.283 1.283 0 11-.825 2.43l-.283-.088a18.26 18.26 0 00-1.457-.349c-3.697-.745-7.672-.673-11.364.757a15.948 15.948 0 00-4.753 2.87A1.284 1.284 0 01.44 4.727 18.515 18.515 0 015.953 1.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector11Icon;
/* prettier-ignore-end */
