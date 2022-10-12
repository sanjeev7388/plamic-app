// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wLUabMsNeZ89NRgMWCB4bs
// Component: n3GtXKFiQ9Vch9
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_testing_1.module.css"; // plasmic-import: wLUabMsNeZ89NRgMWCB4bs/projectcss
import sty from "./PlasmicCompletedButton7.module.css"; // plasmic-import: n3GtXKFiQ9Vch9/css

export const PlasmicCompletedButton7__VariantProps = new Array(
  "type",
  "border",
  "size"
);

export const PlasmicCompletedButton7__ArgProps = new Array("children");

function PlasmicCompletedButton7__RenderFunc(props) {
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
      {p.renderPlasmicSlot({
        defaultContents: "Click me",
        value: args.children,
        className: classNames(sty.slotTargetChildren, {
          [sty.slotTargetChildrenborder_link]: hasVariant(
            variants,
            "border",
            "link"
          ),

          [sty.slotTargetChildrenborder_rounded]: hasVariant(
            variants,
            "border",
            "rounded"
          ),

          [sty.slotTargetChildrensize_large]: hasVariant(
            variants,
            "size",
            "large"
          ),

          [sty.slotTargetChildrensize_small]: hasVariant(
            variants,
            "size",
            "small"
          ),

          [sty.slotTargetChildrentype_danger]: hasVariant(
            variants,
            "type",
            "danger"
          ),

          [sty.slotTargetChildrentype_primary]: hasVariant(
            variants,
            "type",
            "primary"
          )
        })
      })}
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
          internalArgPropNames: PlasmicCompletedButton7__ArgProps,
          internalVariantPropNames: PlasmicCompletedButton7__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCompletedButton7__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedButton7";
  } else {
    func.displayName = `PlasmicCompletedButton7.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedButton7 = Object.assign(
  // Top-level PlasmicCompletedButton7 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCompletedButton7
    internalVariantProps: PlasmicCompletedButton7__VariantProps,
    internalArgProps: PlasmicCompletedButton7__ArgProps
  }
);

export default PlasmicCompletedButton7;
/* prettier-ignore-end */
