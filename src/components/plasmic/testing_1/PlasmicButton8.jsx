// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wLUabMsNeZ89NRgMWCB4bs
// Component: 7kKbHwQ5DbV
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import * as pp from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantshAqKz7Gm8RnE6 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: hAQKz7GM8RnE6_/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_testing_1.module.css"; // plasmic-import: wLUabMsNeZ89NRgMWCB4bs/projectcss
import sty from "./PlasmicButton8.module.css"; // plasmic-import: 7kKbHwQ5DbV/css

export const PlasmicButton8__VariantProps = new Array(
  "showStartIcon",
  "showEndIcon",
  "color",
  "iconOnly",
  "large",
  "isDisabled"
);

export const PlasmicButton8__ArgProps = new Array(
  "startIcon",
  "children",
  "endIcon",
  "link"
);

function PlasmicButton8__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantshAqKz7Gm8RnE6()
  });
  return (
    <p.Stack
      as={"button"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root,
        {
          [sty.rootcolor_blueBorderSmall]: hasVariant(
            variants,
            "color",
            "blueBorderSmall"
          ),

          [sty.rootcolor_blueSmall]: hasVariant(variants, "color", "blueSmall"),
          [sty.rootcolor_blue]: hasVariant(variants, "color", "blue"),
          [sty.rootcolor_darkGray]: hasVariant(variants, "color", "darkGray"),
          [sty.rootcolor_footerButton]: hasVariant(
            variants,
            "color",
            "footerButton"
          ),

          [sty.rootcolor_green]: hasVariant(variants, "color", "green"),
          [sty.rootcolor_indigo]: hasVariant(variants, "color", "indigo"),
          [sty.rootcolor_navLinkBlue]: hasVariant(
            variants,
            "color",
            "navLinkBlue"
          ),

          [sty.rootcolor_navLink]: hasVariant(variants, "color", "navLink"),
          [sty.rootcolor_red]: hasVariant(variants, "color", "red"),
          [sty.rootcolor_white]: hasVariant(variants, "color", "white"),
          [sty.rooticonOnly]: hasVariant(variants, "iconOnly", "iconOnly"),
          [sty.rootisDisabled]: hasVariant(
            variants,
            "isDisabled",
            "isDisabled"
          ),

          [sty.rootlarge]: hasVariant(variants, "large", "large"),
          [sty.rootshowEndIcon]: hasVariant(
            variants,
            "showEndIcon",
            "showEndIcon"
          ),

          [sty.rootshowStartIcon]: hasVariant(
            variants,
            "showStartIcon",
            "showStartIcon"
          )
        }
      )}
    >
      {(hasVariant(variants, "iconOnly", "iconOnly") ? false : true)
        ? p.renderPlasmicSlot({
            defaultContents: "Label",
            value: args.children,
            className: classNames(sty.slotTargetChildren, {
              [sty.slotTargetChildrencolor_blue]: hasVariant(
                variants,
                "color",
                "blue"
              ),

              [sty.slotTargetChildrencolor_darkGray]: hasVariant(
                variants,
                "color",
                "darkGray"
              ),

              [sty.slotTargetChildrencolor_footerButton]: hasVariant(
                variants,
                "color",
                "footerButton"
              ),

              [sty.slotTargetChildrencolor_green]: hasVariant(
                variants,
                "color",
                "green"
              ),

              [sty.slotTargetChildrencolor_indigo]: hasVariant(
                variants,
                "color",
                "indigo"
              ),

              [sty.slotTargetChildrencolor_link]: hasVariant(
                variants,
                "color",
                "link"
              ),

              [sty.slotTargetChildrencolor_navLink]: hasVariant(
                variants,
                "color",
                "navLink"
              ),

              [sty.slotTargetChildrencolor_red]: hasVariant(
                variants,
                "color",
                "red"
              ),

              [sty.slotTargetChildrencolor_white]: hasVariant(
                variants,
                "color",
                "white"
              ),

              [sty.slotTargetChildreniconOnly]: hasVariant(
                variants,
                "iconOnly",
                "iconOnly"
              ),

              [sty.slotTargetChildrenisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),

              [sty.slotTargetChildrenlarge]: hasVariant(
                variants,
                "large",
                "large"
              ),

              [sty.slotTargetChildrenshowEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              ),

              [sty.slotTargetChildrenshowStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })
        : null}
      {(
        hasVariant(variants, "showEndIcon", "showEndIcon")
          ? true
          : hasVariant(variants, "iconOnly", "iconOnly")
          ? false
          : hasVariant(variants, "showStartIcon", "showStartIcon")
          ? false
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg__gZvsg)}
                role={"img"}
              />
            ),

            value: args.endIcon,
            className: classNames(sty.slotTargetEndIcon, {
              [sty.slotTargetEndIconcolor_blue]: hasVariant(
                variants,
                "color",
                "blue"
              ),

              [sty.slotTargetEndIconcolor_darkGray]: hasVariant(
                variants,
                "color",
                "darkGray"
              ),

              [sty.slotTargetEndIconcolor_green]: hasVariant(
                variants,
                "color",
                "green"
              ),

              [sty.slotTargetEndIconcolor_indigo]: hasVariant(
                variants,
                "color",
                "indigo"
              ),

              [sty.slotTargetEndIconcolor_link]: hasVariant(
                variants,
                "color",
                "link"
              ),

              [sty.slotTargetEndIconcolor_navLink]: hasVariant(
                variants,
                "color",
                "navLink"
              ),

              [sty.slotTargetEndIconcolor_red]: hasVariant(
                variants,
                "color",
                "red"
              ),

              [sty.slotTargetEndIconcolor_white]: hasVariant(
                variants,
                "color",
                "white"
              ),

              [sty.slotTargetEndIconiconOnly]: hasVariant(
                variants,
                "iconOnly",
                "iconOnly"
              ),

              [sty.slotTargetEndIconisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),

              [sty.slotTargetEndIconshowEndIcon]: hasVariant(
                variants,
                "showEndIcon",
                "showEndIcon"
              ),

              [sty.slotTargetEndIconshowStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })
        : null}
      {(
        hasVariant(variants, "color", "blue")
          ? false
          : hasVariant(variants, "iconOnly", "iconOnly")
          ? true
          : hasVariant(variants, "showStartIcon", "showStartIcon")
          ? true
          : false
      )
        ? p.renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg__m0Aei)}
                role={"img"}
              />
            ),

            value: args.startIcon,
            className: classNames(sty.slotTargetStartIcon, {
              [sty.slotTargetStartIconcolor_blue]: hasVariant(
                variants,
                "color",
                "blue"
              ),

              [sty.slotTargetStartIconcolor_darkGray]: hasVariant(
                variants,
                "color",
                "darkGray"
              ),

              [sty.slotTargetStartIconcolor_green]: hasVariant(
                variants,
                "color",
                "green"
              ),

              [sty.slotTargetStartIconcolor_indigo]: hasVariant(
                variants,
                "color",
                "indigo"
              ),

              [sty.slotTargetStartIconcolor_link]: hasVariant(
                variants,
                "color",
                "link"
              ),

              [sty.slotTargetStartIconcolor_navLink]: hasVariant(
                variants,
                "color",
                "navLink"
              ),

              [sty.slotTargetStartIconcolor_red]: hasVariant(
                variants,
                "color",
                "red"
              ),

              [sty.slotTargetStartIconcolor_white]: hasVariant(
                variants,
                "color",
                "white"
              ),

              [sty.slotTargetStartIconiconOnly]: hasVariant(
                variants,
                "iconOnly",
                "iconOnly"
              ),

              [sty.slotTargetStartIconisDisabled]: hasVariant(
                variants,
                "isDisabled",
                "isDisabled"
              ),

              [sty.slotTargetStartIconshowEndIcon_color_green]:
                hasVariant(variants, "showEndIcon", "showEndIcon") &&
                hasVariant(variants, "color", "green"),
              [sty.slotTargetStartIconshowEndIcon_color_green_showStartIcon]:
                hasVariant(variants, "showStartIcon", "showStartIcon") &&
                hasVariant(variants, "showEndIcon", "showEndIcon") &&
                hasVariant(variants, "color", "green"),
              [sty.slotTargetStartIconshowStartIcon]: hasVariant(
                variants,
                "showStartIcon",
                "showStartIcon"
              )
            })
          })
        : null}
    </p.Stack>
  );
}

function useBehavior(props, ref) {
  const b = pp.useButton(
    PlasmicButton8,
    props,
    {
      showStartIconVariant: {
        group: "showStartIcon",
        variant: "showStartIcon"
      },
      showEndIconVariant: { group: "showEndIcon", variant: "showEndIcon" },
      isDisabledVariant: { group: "isDisabled", variant: "isDisabled" },
      contentSlot: "children",
      startIconSlot: "startIcon",
      endIconSlot: "endIcon",
      root: "root"
    },
    ref
  );

  return b;
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
          internalArgPropNames: PlasmicButton8__ArgProps,
          internalVariantPropNames: PlasmicButton8__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicButton8__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton8";
  } else {
    func.displayName = `PlasmicButton8.${nodeName}`;
  }
  return func;
}

export const PlasmicButton8 = Object.assign(
  // Top-level PlasmicButton8 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicButton8
    internalVariantProps: PlasmicButton8__VariantProps,
    internalArgProps: PlasmicButton8__ArgProps,
    useBehavior
  }
);

export default PlasmicButton8;
/* prettier-ignore-end */
