// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wLUabMsNeZ89NRgMWCB4bs
// Component: HY_uRD5Lh-GRYi
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
import sty from "./PlasmicCompletedDashboard.module.css"; // plasmic-import: HY_uRD5Lh-GRYi/css
import Icon16Icon from "./icons/PlasmicIcon__Icon16"; // plasmic-import: Qvtdp1uBfBdO61/icon
import Icon17Icon from "./icons/PlasmicIcon__Icon17"; // plasmic-import: ErsRxOOztY54cf/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: mc9V_quMbA_m1u/icon
import Icon18Icon from "./icons/PlasmicIcon__Icon18"; // plasmic-import: rB2XLFa9ZxnYHG/icon

export const PlasmicCompletedDashboard__VariantProps = new Array();

export const PlasmicCompletedDashboard__ArgProps = new Array();

function PlasmicCompletedDashboard__RenderFunc(props) {
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
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__i2Y1P)}
      >
        <Icon16Icon
          className={classNames(projectcss.all, sty.svg__gnWt2)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__iHl0U
          )}
        >
          {"Dashboard"}
        </div>

        <Icon17Icon
          className={classNames(projectcss.all, sty.svg__wEs5I)}
          role={"img"}
        />

        <Icon15Icon
          className={classNames(projectcss.all, sty.svg__sK8Yv)}
          role={"img"}
        />
      </p.Stack>

      <div className={classNames(projectcss.all, sty.freeBox__khcpW)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___2Nxi)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___07Ldl
            )}
          >
            {"Dashboard"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___591WJ
            )}
          >
            {"Reports"}
          </div>
        </p.Stack>

        <div className={classNames(projectcss.all, sty.freeBox__eqTF)}>
          <Icon18Icon
            className={classNames(projectcss.all, sty.svg__ixXtR)}
            role={"img"}
          />
        </div>
      </div>
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
          internalArgPropNames: PlasmicCompletedDashboard__ArgProps,
          internalVariantPropNames: PlasmicCompletedDashboard__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCompletedDashboard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedDashboard";
  } else {
    func.displayName = `PlasmicCompletedDashboard.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedDashboard = Object.assign(
  // Top-level PlasmicCompletedDashboard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCompletedDashboard
    internalVariantProps: PlasmicCompletedDashboard__VariantProps,
    internalArgProps: PlasmicCompletedDashboard__ArgProps
  }
);

export default PlasmicCompletedDashboard;
/* prettier-ignore-end */
