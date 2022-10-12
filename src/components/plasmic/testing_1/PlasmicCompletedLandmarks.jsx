// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wLUabMsNeZ89NRgMWCB4bs
// Component: 9RP-XJh7t8J5iT
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
import sty from "./PlasmicCompletedLandmarks.module.css"; // plasmic-import: 9RP-XJh7t8J5iT/css
import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: Ln2SB_kH6f9ih8/icon

export const PlasmicCompletedLandmarks__VariantProps = new Array("variants");

export const PlasmicCompletedLandmarks__ArgProps = new Array();

function PlasmicCompletedLandmarks__RenderFunc(props) {
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
        { [sty.rootvariants_wide]: hasVariant(variants, "variants", "wide") }
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__xq2Nv,
          {
            [sty.textvariants_wide__xq2NvsLgPa]: hasVariant(
              variants,
              "variants",
              "wide"
            )
          }
        )}
      >
        {"Landmarks"}
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__z1Xh, {
          [sty.freeBoxvariants_wide__z1XhsLgPa]: hasVariant(
            variants,
            "variants",
            "wide"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__jsFp, {
            [sty.freeBoxvariants_wide__jsFpsLgPa]: hasVariant(
              variants,
              "variants",
              "wide"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cRvCr
            )}
          >
            {"Mission Dolores Park"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__h6Kni
            )}
          >
            {"Park"}
          </div>

          <Icon12Icon
            className={classNames(projectcss.all, sty.svg___5EcCm)}
            role={"img"}
          />
        </div>

        <div
          className={classNames(projectcss.all, sty.freeBox__q00Kf, {
            [sty.freeBoxvariants_wide__q00KfsLgPa]: hasVariant(
              variants,
              "variants",
              "wide"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__wwro0,
              {
                [sty.textvariants_wide__wwro0SLgPa]: hasVariant(
                  variants,
                  "variants",
                  "wide"
                )
              }
            )}
          >
            {"Mission Dolores Park"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ghmCf
            )}
          >
            {"Park"}
          </div>

          <Icon12Icon
            className={classNames(projectcss.all, sty.svg__kn0Wx)}
            role={"img"}
          />
        </div>

        <div
          className={classNames(projectcss.all, sty.freeBox__bHiXb, {
            [sty.freeBoxvariants_wide__bHiXbsLgPa]: hasVariant(
              variants,
              "variants",
              "wide"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__dvewi
            )}
          >
            {"Mission Dolores Park"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___6Jetj
            )}
          >
            {"Park"}
          </div>

          <Icon12Icon
            className={classNames(projectcss.all, sty.svg__yjIej)}
            role={"img"}
          />
        </div>
      </p.Stack>
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
          internalArgPropNames: PlasmicCompletedLandmarks__ArgProps,
          internalVariantPropNames: PlasmicCompletedLandmarks__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCompletedLandmarks__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedLandmarks";
  } else {
    func.displayName = `PlasmicCompletedLandmarks.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedLandmarks = Object.assign(
  // Top-level PlasmicCompletedLandmarks renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCompletedLandmarks
    internalVariantProps: PlasmicCompletedLandmarks__VariantProps,
    internalArgProps: PlasmicCompletedLandmarks__ArgProps
  }
);

export default PlasmicCompletedLandmarks;
/* prettier-ignore-end */
