import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../../src/style";

function TooltipArrowRightIcon(props) {
  return (
    <Svg
      width={10}
      height={20}
      viewBox="0 0 10 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path 
        d="M10 20V0L1.41421 8.58579C0.633165 9.36683 0.633163 10.6332 1.41421 11.4142L10 20Z" 
        fill={props.fill || colors.grey800}
      /> 
    </Svg>
  );
}

export default TooltipArrowRightIcon;