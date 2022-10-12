// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wLUabMsNeZ89NRgMWCB4bs
// Component: xhfxv28SdTB0Be
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import ActionButton from "../../ActionButton"; // plasmic-import: J654ViboYJ0mNj/component
import BlockButton from "../../BlockButton"; // plasmic-import: hyUU3yVtMZGRM3/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_testing_1.module.css"; // plasmic-import: wLUabMsNeZ89NRgMWCB4bs/projectcss
import sty from "./PlasmicCompletedFollowableProfile.module.css"; // plasmic-import: xhfxv28SdTB0Be/css
import image115Tacu8KGwoSqLt from "./images/image11.png"; // plasmic-import: 5tacu8kGwoSqLT/picture

export const PlasmicCompletedFollowableProfile__VariantProps = new Array(
  "following"
);

export const PlasmicCompletedFollowableProfile__ArgProps = new Array();

function PlasmicCompletedFollowableProfile__RenderFunc(props) {
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
        sty.root,
        { [sty.rootfollowing]: hasVariant(variants, "following", "following") }
      )}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img, {
          [sty.imgfollowing]: hasVariant(variants, "following", "following")
        })}
        displayHeight={"50px"}
        displayMaxHeight={"none"}
        displayMaxWidth={"none"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"50px"}
        src={{
          src: image115Tacu8KGwoSqLt,
          fullWidth: 150,
          fullHeight: 184,
          aspectRatio: undefined
        }}
      />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___6ZLg0, {
          [sty.freeBoxfollowing___6ZLg0KGerK]: hasVariant(
            variants,
            "following",
            "following"
          )
        })}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___6QVvc, {
            [sty.freeBoxfollowing___6QVvCkGerK]: hasVariant(
              variants,
              "following",
              "following"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__idPur,
              {
                [sty.textfollowing__idPuRkGerK]: hasVariant(
                  variants,
                  "following",
                  "following"
                )
              }
            )}
          >
            {"Totoro"}
          </div>
        </p.Stack>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__axlW5,
            {
              [sty.textfollowing__axlW5KGerK]: hasVariant(
                variants,
                "following",
                "following"
              )
            }
          )}
        >
          {"@friendlyneighbor"}
        </div>
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__t5Kiq)}
      >
        <ActionButton
          data-plasmic-name={"actionButton"}
          data-plasmic-override={overrides.actionButton}
          className={classNames("__wab_instance", sty.actionButton, {
            [sty.actionButtonfollowing]: hasVariant(
              variants,
              "following",
              "following"
            )
          })}
          variants={
            hasVariant(variants, "following", "following")
              ? "primary"
              : undefined
          }
        >
          {hasVariant(variants, "following", "following")
            ? "Unfollow"
            : "Follow"}
        </ActionButton>

        {(hasVariant(variants, "following", "following") ? false : true) ? (
          <BlockButton
            data-plasmic-name={"blockButton"}
            data-plasmic-override={overrides.blockButton}
            className={classNames("__wab_instance", sty.blockButton, {
              [sty.blockButtonfollowing]: hasVariant(
                variants,
                "following",
                "following"
              )
            })}
          />
        ) : null}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "actionButton", "blockButton"],
  img: ["img"],
  actionButton: ["actionButton"],
  blockButton: ["blockButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCompletedFollowableProfile__ArgProps,
          internalVariantPropNames:
            PlasmicCompletedFollowableProfile__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCompletedFollowableProfile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedFollowableProfile";
  } else {
    func.displayName = `PlasmicCompletedFollowableProfile.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedFollowableProfile = Object.assign(
  // Top-level PlasmicCompletedFollowableProfile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    actionButton: makeNodeComponent("actionButton"),
    blockButton: makeNodeComponent("blockButton"),
    // Metadata about props expected for PlasmicCompletedFollowableProfile
    internalVariantProps: PlasmicCompletedFollowableProfile__VariantProps,
    internalArgProps: PlasmicCompletedFollowableProfile__ArgProps
  }
);

export default PlasmicCompletedFollowableProfile;
/* prettier-ignore-end */
