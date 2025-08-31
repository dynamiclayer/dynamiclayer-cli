import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../../src/style";

function TooltipArrowBottomIcon(props) {
  return (
    <Svg
      width={20}
      height={10}
      viewBox="0 0 20 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path 
        d="M20 10L11.4142 1.41421C10.6332 0.633165 9.36683 0.633164 8.58579 1.41421L0 10L20 10Z" 
        fill={props.fill || colors.grey800}
      />
    </Svg>
  );
}

export default TooltipArrowBottomIcon;