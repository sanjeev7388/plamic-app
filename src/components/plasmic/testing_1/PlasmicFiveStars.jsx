// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wLUabMsNeZ89NRgMWCB4bs
// Component: S78_0gY8Wek-rE
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_testing_1.module.css"; // plasmic-import: wLUabMsNeZ89NRgMWCB4bs/projectcss
import sty from "./PlasmicFiveStars.module.css"; // plasmic-import: S78_0gY8Wek-rE/css
import Icon10Icon from "./icons/PlasmicIcon__Icon10"; // plasmic-import: TanMDBu4xioyU6/icon

export const PlasmicFiveStars__VariantProps = new Array();

export const PlasmicFiveStars__ArgProps = new Array();

function PlasmicFiveStars__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <Icon10Icon
        className={classNames(projectcss.all, sty.svg__uLPpP)}
        role={"img"}
      />

      <Icon10Icon
        className={classNames(projectcss.all, sty.svg__kjjIi)}
        role={"img"}
      />

      <Icon10Icon
        className={classNames(projectcss.all, sty.svg__agnOp)}
        role={"img"}
      />

      <Icon10Icon
        className={classNames(projectcss.all, sty.svg__kYvXi)}
        role={"img"}
      />

      <Icon10Icon
        className={classNames(projectcss.all, sty.svg__kq1M1)}
        role={"img"}
      />
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFiveStars__ArgProps,
          internalVariantPropNames: PlasmicFiveStars__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFiveStars__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFiveStars";
  } else {
    func.displayName = `PlasmicFiveStars.${nodeName}`;
  }
  return func;
}

export const PlasmicFiveStars = Object.assign(
  // Top-level PlasmicFiveStars renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicFiveStars
    internalVariantProps: PlasmicFiveStars__VariantProps,
    internalArgProps: PlasmicFiveStars__ArgProps
  }
);

export default PlasmicFiveStars;
/* prettier-ignore-end */
