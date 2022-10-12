// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wLUabMsNeZ89NRgMWCB4bs
// Component: 8Xp_TC-k1p5AjL
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
import sty from "./PlasmicForecast.module.css"; // plasmic-import: 8Xp_TC-k1p5AjL/css

export const PlasmicForecast__VariantProps = new Array("variants");

export const PlasmicForecast__ArgProps = new Array("children");

function PlasmicForecast__RenderFunc(props) {
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
        { [sty.rootvariants_row]: hasVariant(variants, "variants", "row") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__bymSr, {
          [sty.freeBoxvariants_row__bymSrdmGpy]: hasVariant(
            variants,
            "variants",
            "row"
          )
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Wednesday",
          value: args.children
        })}
      </div>

      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img, {
          [sty.imgvariants_row]: hasVariant(variants, "variants", "row")
        })}
        displayHeight={"64px"}
        displayMaxHeight={"none"}
        displayMaxWidth={"none"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"64px"}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__oq3Be, {
          [sty.freeBoxvariants_row__oq3BedmGpy]: hasVariant(
            variants,
            "variants",
            "row"
          )
        })}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__vk6Jv,
            {
              [sty.textvariants_row__vk6JvdmGpy]: hasVariant(
                variants,
                "variants",
                "row"
              )
            }
          )}
        >
          {"68°"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__o6Sye,
            {
              [sty.textvariants_row__o6SyEdmGpy]: hasVariant(
                variants,
                "variants",
                "row"
              )
            }
          )}
        >
          {"36°"}
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__oIsYj, {
          [sty.freeBoxvariants_row__oIsYjdmGpy]: hasVariant(
            variants,
            "variants",
            "row"
          )
        })}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__rdAxS,
            {
              [sty.textvariants_row__rdAxSdmGpy]: hasVariant(
                variants,
                "variants",
                "row"
              )
            }
          )}
        >
          {"Pollen"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__eu6N1,
            {
              [sty.textvariants_row__eu6N1DmGpy]: hasVariant(
                variants,
                "variants",
                "row"
              )
            }
          )}
        >
          {"35"}
        </div>
      </p.Stack>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicForecast__ArgProps,
          internalVariantPropNames: PlasmicForecast__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicForecast__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicForecast";
  } else {
    func.displayName = `PlasmicForecast.${nodeName}`;
  }
  return func;
}

export const PlasmicForecast = Object.assign(
  // Top-level PlasmicForecast renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicForecast
    internalVariantProps: PlasmicForecast__VariantProps,
    internalArgProps: PlasmicForecast__ArgProps
  }
);

export default PlasmicForecast;
/* prettier-ignore-end */
