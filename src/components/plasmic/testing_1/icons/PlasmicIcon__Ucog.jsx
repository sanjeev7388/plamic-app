// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function UcogIcon(props) {
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
          "M15.99 7.162l-1.418-.472.668-1.335a.75.75 0 00-.143-.855L13.5 2.902a.75.75 0 00-.863-.142l-1.335.668-.472-1.418a.75.75 0 00-.705-.51h-2.25a.75.75 0 00-.713.51L6.69 3.428 5.355 2.76a.75.75 0 00-.855.143L2.902 4.5a.75.75 0 00-.142.862l.668 1.335-1.418.473a.75.75 0 00-.51.705v2.25a.75.75 0 00.51.713l1.418.472-.668 1.335a.75.75 0 00.143.855L4.5 15.098a.75.75 0 00.862.142l1.335-.668.473 1.418a.75.75 0 00.713.51h2.25a.75.75 0 00.712-.51l.473-1.418 1.335.668a.75.75 0 00.847-.143l1.598-1.597a.75.75 0 00.142-.863l-.668-1.335 1.418-.472a.75.75 0 00.51-.705v-2.25a.75.75 0 00-.51-.713zM15 9.585l-.9.3A1.501 1.501 0 0013.23 12l.428.855-.825.825-.833-.45a1.5 1.5 0 00-2.092.87l-.3.9H8.415l-.3-.9A1.5 1.5 0 006 13.23l-.855.428-.825-.825.45-.833a1.5 1.5 0 00-.87-2.115l-.9-.3v-1.17l.9-.3A1.5 1.5 0 004.77 6l-.427-.832.825-.825L6 4.77a1.5 1.5 0 002.115-.87l.3-.9h1.17l.3.9A1.5 1.5 0 0012 4.77l.855-.427.825.825-.45.832a1.5 1.5 0 00.87 2.092l.9.3v1.193zM9 6a3 3 0 100 6 3 3 0 000-6zm0 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default UcogIcon;
/* prettier-ignore-end */
