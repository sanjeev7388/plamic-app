// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GrayCorrelationIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 87 87"}
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
          "M17.695 27.828a9.126 9.126 0 019.125 8.975v.151c.631 16.664 16.72 21.005 22.202 22.003a9.126 9.126 0 11-8.91 11.855l-.037.038c-4.603-22.544-18.627-24.621-22.34-24.77h-.04c-.15 0-.298-.004-.446-.01-.275 0-.423.01-.423.01l.04-.037a9.127 9.127 0 01.829-18.215zM77.287 11.42a4.667 4.667 0 01-.722 6.551 4.628 4.628 0 01-3.007 1.023l-.001-.001c-10.765 1.374-12.504 8.017-12.78 9.839l-.002.022a4.828 4.828 0 01-.03.227 3.271 3.271 0 00-.019.214l-.016-.023a4.654 4.654 0 01-5.07 3.703 4.659 4.659 0 01-4.113-5.145 4.654 4.654 0 015.059-4.13l.076.009c8.473.614 11.574-7.3 12.39-10.031a4.647 4.647 0 011.696-2.983 4.646 4.646 0 016.54.724z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M74.24 9.616a4.666 4.666 0 11-1.025 9.275 4.666 4.666 0 011.025-9.275z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GrayCorrelationIcon;
/* prettier-ignore-end */
