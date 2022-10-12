// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function AntDesigntwitterOutlinedIcon(props) {
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
          "M28.945 6.422c-1.018.44-2.127.756-3.268.879a5.662 5.662 0 002.496-3.129 11.204 11.204 0 01-3.601 1.371 5.662 5.662 0 00-4.148-1.794 5.674 5.674 0 00-5.675 5.679c0 .439.054.878.14 1.301A16.13 16.13 0 013.187 4.788a5.636 5.636 0 00-.773 2.866 5.68 5.68 0 002.53 4.73 5.726 5.726 0 01-2.566-.723v.07c0 2.76 1.95 5.046 4.55 5.572a6.01 6.01 0 01-1.495.193c-.37 0-.719-.037-1.072-.087a5.686 5.686 0 005.306 3.938 11.375 11.375 0 01-7.046 2.426c-.476 0-.916-.017-1.372-.07a16.072 16.072 0 008.717 2.546c10.438 0 16.15-8.647 16.15-16.152 0-.247 0-.493-.017-.74a12.225 12.225 0 002.846-2.935z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default AntDesigntwitterOutlinedIcon;
/* prettier-ignore-end */
