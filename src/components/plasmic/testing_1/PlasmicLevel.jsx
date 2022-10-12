// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wLUabMsNeZ89NRgMWCB4bs
// Component: m0b7aDKV2g8r3
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Footer from "../../Footer"; // plasmic-import: dVezMrobGLnRO/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_testing_1.module.css"; // plasmic-import: wLUabMsNeZ89NRgMWCB4bs/projectcss
import sty from "./PlasmicLevel.module.css"; // plasmic-import: m0b7aDKV2g8r3/css

export const PlasmicLevel__VariantProps = new Array(
  "variations",
  "showMaxLevels",
  "rightSide",
  "basics"
);

export const PlasmicLevel__ArgProps = new Array(
  "children",
  "number",
  "title",
  "right"
);

function PlasmicLevel__RenderFunc(props) {
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
          [sty.rootvariations_footerOnly]: hasVariant(
            variants,
            "variations",
            "footerOnly"
          ),

          [sty.rootvariations_noFooter]: hasVariant(
            variants,
            "variations",
            "noFooter"
          )
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__ql2V2, {
          [sty.freeBoxvariations_noFooter__ql2V2ETtJp]: hasVariant(
            variants,
            "variations",
            "noFooter"
          )
        })}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__xq29Q, {
            [sty.freeBoxbasics__xq29QLjY3R]: hasVariant(
              variants,
              "basics",
              "basics"
            )
          })}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__he4U5, {
              [sty.freeBoxrightSide__he4U55WBal]: hasVariant(
                variants,
                "rightSide",
                "rightSide"
              ),

              [sty.freeBoxshowMaxLevels__he4U5M7Nnc]: hasVariant(
                variants,
                "showMaxLevels",
                "showMaxLevels"
              ),

              [sty.freeBoxvariations_noFooter__he4U5ETtJp]: hasVariant(
                variants,
                "variations",
                "noFooter"
              )
            })}
          >
            <div
              className={classNames(projectcss.all, sty.freeBox__tYhFh, {
                [sty.freeBoxrightSide__tYhFh5WBal]: hasVariant(
                  variants,
                  "rightSide",
                  "rightSide"
                ),

                [sty.freeBoxshowMaxLevels__tYhFhm7Nnc]: hasVariant(
                  variants,
                  "showMaxLevels",
                  "showMaxLevels"
                )
              })}
            >
              {(hasVariant(variants, "basics", "basics") ? false : true) ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vo74Q,
                    {
                      [sty.textbasics__vo74QLjY3R]: hasVariant(
                        variants,
                        "basics",
                        "basics"
                      ),

                      [sty.textshowMaxLevels__vo74Qm7Nnc]: hasVariant(
                        variants,
                        "showMaxLevels",
                        "showMaxLevels"
                      )
                    }
                  )}
                >
                  {"Advanced "}
                </div>
              ) : null}
              {(hasVariant(variants, "variations", "footerOnly") ? false : true)
                ? p.renderPlasmicSlot({
                    defaultContents: (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__sf2T8
                        )}
                      >
                        {"Level 1"}
                      </div>
                    ),

                    value: args.number,
                    className: classNames(sty.slotTargetNumber, {
                      [sty.slotTargetNumbervariations_footerOnly]: hasVariant(
                        variants,
                        "variations",
                        "footerOnly"
                      )
                    })
                  })
                : null}
              {(
                hasVariant(variants, "showMaxLevels", "showMaxLevels")
                  ? true
                  : false
              ) ? (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__b2SdF,
                    {
                      [sty.textshowMaxLevels__b2SdFm7Nnc]: hasVariant(
                        variants,
                        "showMaxLevels",
                        "showMaxLevels"
                      )
                    }
                  )}
                >
                  {" of 7"}
                </div>
              ) : null}
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__sRyL)}
            >
              {(hasVariant(variants, "variations", "footerOnly") ? false : true)
                ? p.renderPlasmicSlot({
                    defaultContents: (
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__fsoaR
                        )}
                      >
                        {"Draw a box."}
                      </div>
                    ),

                    value: args.title,
                    className: classNames(sty.slotTargetTitle, {
                      [sty.slotTargetTitlevariations_footerOnly]: hasVariant(
                        variants,
                        "variations",
                        "footerOnly"
                      )
                    })
                  })
                : null}
            </p.Stack>

            {p.renderPlasmicSlot({
              defaultContents: (
                <React.Fragment>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__p7D1N
                    )}
                  >
                    {
                      "Press r to enter rectangle drawing mode. Drag to try drawing the given shape."
                    }
                  </div>

                  <div
                    className={classNames(projectcss.all, sty.freeBox__yaDds)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.freeBox__mzC8W)}
                    />
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__qfsp
                    )}
                  >
                    {"Tip: hold shift while dragging to draw a perfect square."}
                  </div>
                </React.Fragment>
              ),

              value: args.children
            })}
          </p.Stack>

          {(hasVariant(variants, "rightSide", "rightSide") ? true : false) ? (
            <div
              className={classNames(projectcss.all, sty.freeBox__vqa8M, {
                [sty.freeBoxrightSide__vqa8M5WBal]: hasVariant(
                  variants,
                  "rightSide",
                  "rightSide"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: null,
                value: args.right
              })}
            </div>
          ) : null}
        </p.Stack>

        {(hasVariant(variants, "variations", "noFooter") ? false : true) ? (
          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer, {
              [sty.footervariations_noFooter]: hasVariant(
                variants,
                "variations",
                "noFooter"
              )
            })}
          />
        ) : null}
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "footer"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicLevel__ArgProps,
          internalVariantPropNames: PlasmicLevel__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicLevel__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLevel";
  } else {
    func.displayName = `PlasmicLevel.${nodeName}`;
  }
  return func;
}

export const PlasmicLevel = Object.assign(
  // Top-level PlasmicLevel renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicLevel
    internalVariantProps: PlasmicLevel__VariantProps,
    internalArgProps: PlasmicLevel__ArgProps
  }
);

export default PlasmicLevel;
/* prettier-ignore-end */
