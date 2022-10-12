// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wLUabMsNeZ89NRgMWCB4bs
// Component: b8TGq9uoLxAA6o
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: lhXiJJyjHgyzNh/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_testing_1.module.css"; // plasmic-import: wLUabMsNeZ89NRgMWCB4bs/projectcss
import sty from "./PlasmicPage1.module.css"; // plasmic-import: b8TGq9uoLxAA6o/css
import creditCardJvZbyYzWsWfUl from "./images/creditCard.png"; // plasmic-import: JV_ZbyYzWSWfUl/picture

export const PlasmicPage1__VariantProps = new Array();

export const PlasmicPage1__ArgProps = new Array();

function PlasmicPage1__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
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
          <div
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            className={classNames(projectcss.all, sty.columns)}
          >
            <div className={classNames(projectcss.all, sty.column__cty3B)}>
              <h1
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1___8EUlB
                )}
              >
                {"Business finance simplified."}
              </h1>

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__sgIqf
                )}
              >
                {
                  "Take control of your spending in one refreshingly easy solution."
                }
              </div>

              <Button
                className={classNames("__wab_instance", sty.button__cfxCy)}
              >
                {"Learn more"}
              </Button>
            </div>

            <div className={classNames(projectcss.all, sty.column__tdr4S)}>
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                loading={"lazy"}
                src={{
                  src: creditCardJvZbyYzWsWfUl,
                  fullWidth: 1664,
                  fullHeight: 1664,
                  aspectRatio: undefined
                }}
              />
            </div>
          </div>

          <h1
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1___6YvvO
            )}
          >
            {"Get early access."}
          </h1>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__h9FT
            )}
          >
            {
              "Fill out a quick survey to join the waitlist. We'll be in touch to schedule a call."
            }
          </div>

          <Button className={classNames("__wab_instance", sty.button__kgigX)}>
            {"Join the waitlist"}
          </Button>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ge3Jp
            )}
          >
            {"Objective:"}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "columns", "img"],
  columns: ["columns", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPage1__ArgProps,
          internalVariantPropNames: PlasmicPage1__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPage1__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPage1";
  } else {
    func.displayName = `PlasmicPage1.${nodeName}`;
  }
  return func;
}

export const PlasmicPage1 = Object.assign(
  // Top-level PlasmicPage1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicPage1
    internalVariantProps: PlasmicPage1__VariantProps,
    internalArgProps: PlasmicPage1__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPage1;
/* prettier-ignore-end */