import * as React from "react";
import { PlasmicButton8 } from "./plasmic/testing_1/PlasmicButton8";

function Button8_(props, ref) {
  const { plasmicProps } = PlasmicButton8.useBehavior(props, ref);
  return <PlasmicButton8 {...plasmicProps} />;
}

const Button8 = React.forwardRef(Button8_);

export default Object.assign(Button8, {
  __plumeType: "button"
});
