// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function LegIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 193 493"}
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
          "M17.416 492.464C6.84 491.157-.817 484.12.07 473.503l18.996-229.499c1.368-16.361 16.074-28.3 32.37-26.282 16.3 2.017 27.65 17.18 24.986 33.38L37.055 478.377c-1.728 10.514-9.061 15.397-19.639 14.087zm129.566-3.245c10.657.248 19.609-7.955 20.283-18.588l14.415-227.447c1.04-16.384-11.764-30.343-28.18-30.73-16.421-.387-29.865 12.954-29.597 29.372l3.696 227.872c.172 10.653 8.727 19.27 19.383 19.521z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M158.5.01c19.346.454 34.523 16.74 33.608 36.065l-9.839 207.747c-.758 16.002-14.152 28.474-30.171 28.096-16.02-.378-28.811-13.466-28.814-29.483l-.052-207.98C123.227 15.107 139.155-.446 158.5.01zM77.554 6.826c-19.204-2.375-36.6 11.519-38.52 30.769L18.39 244.548c-1.59 15.94 9.837 30.236 25.739 32.203 15.902 1.967 30.47-9.111 32.818-24.956l30.46-205.739c2.834-19.138-10.649-36.851-29.853-39.23z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LegIcon;
/* prettier-ignore-end */
