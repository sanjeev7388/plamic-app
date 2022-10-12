// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MonotonePiontIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 59 59"}
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
          "M8.697 16.664c1.394 1.395 3.664 1.386 5.07-.02 1.405-1.405 1.413-3.674.019-5.069-1.395-1.394-3.664-1.385-5.07.02-1.405 1.405-1.414 3.675-.02 5.07zM38.41 46.69c1.373 1.374 3.608 1.367 4.99-.015 1.383-1.383 1.39-3.618.017-4.991-1.374-1.374-3.609-1.367-4.991.016-1.383 1.382-1.39 3.617-.016 4.99zM18.57 23.84c3.59-3.588 9.426-3.57 13.036.04 3.61 3.61 3.628 9.446.04 13.035-3.59 3.59-9.426 3.572-13.036-.039-3.61-3.61-3.628-9.446-.04-13.035zm33.531 2.381a3.527 3.527 0 11-7.053 0 3.527 3.527 0 017.053 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MonotonePiontIcon;
/* prettier-ignore-end */
