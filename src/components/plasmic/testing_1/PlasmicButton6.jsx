// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wLUabMsNeZ89NRgMWCB4bs
// Component: 0qWI99_iuJw5_L
import * as React from "react";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_testing_1.module.css"; // plasmic-import: wLUabMsNeZ89NRgMWCB4bs/projectcss
import sty from "./PlasmicButton6.module.css"; // plasmic-import: 0qWI99_iuJw5_L/css

export const PlasmicButton6__VariantProps = new Array("type", "border", "size");

export const PlasmicButton6__ArgProps = new Array();

function PlasmicButton6__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root,
        {
          [sty.rootborder_link]: hasVariant(variants, "border", "link"),
          [sty.rootborder_rounded]: hasVariant(variants, "border", "rounded"),
          [sty.rootsize_large]: hasVariant(variants, "size", "large"),
          [sty.rootsize_small]: hasVariant(variants, "size", "small"),
          [sty.roottype_danger]: hasVariant(variants, "type", "danger"),
          [sty.roottype_primary]: hasVariant(variants, "type", "primary")
        }
      )}
    >
      {"Click me"}
    </div>
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
          internalArgPropNames: PlasmicButton6__ArgProps,
          internalVariantPropNames: PlasmicButton6__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicButton6__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton6";
  } else {
    func.displayName = `PlasmicButton6.${nodeName}`;
  }
  return func;
}

export const PlasmicButton6 = Object.assign(
  // Top-level PlasmicButton6 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicButton6
    internalVariantProps: PlasmicButton6__VariantProps,
    internalArgProps: PlasmicButton6__ArgProps
  }
);

export default PlasmicButton6;
/* prettier-ignore-end */
