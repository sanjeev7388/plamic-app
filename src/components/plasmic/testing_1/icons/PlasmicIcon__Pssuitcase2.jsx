// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Pssuitcase2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
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
          "M11.082 3.83H9.275v-.914c0-.383-.131-.706-.394-.968a1.315 1.315 0 00-.967-.393h-1.83c-.382 0-.705.13-.967.393a1.315 1.315 0 00-.393.968v.914H2.916c-.383 0-.706.128-.968.383s-.393.581-.393.978v5.891c0 .383.13.706.393.968.262.262.585.394.968.394h8.166c.383 0 .706-.132.968-.394s.394-.585.394-.968v-5.89c0-.398-.132-.724-.394-.979a1.334 1.334 0 00-.968-.383zm-5.444-.914c0-.298.149-.447.447-.447h1.829c.297 0 .446.15.446.447v.914H5.638v-.914zm-2.722 8.613c-.298 0-.447-.149-.447-.447v-5.89c0-.313.15-.468.447-.468h.446v6.805h-.446zm1.36 0V4.724h5.445v6.805H4.277zm7.253-.447c0 .298-.149.447-.447.447h-.446V4.724h.447c.297 0 .446.155.446.467v5.891z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Pssuitcase2Icon;
/* prettier-ignore-end */
