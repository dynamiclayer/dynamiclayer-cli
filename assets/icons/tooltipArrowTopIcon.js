import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../../src/style";

function TooltipArrowTopIcon(props) {
  return (
    <Svg
      width={20}
      height={10}
      viewBox="0 0 19 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path 
        d="M0 0L8.58579 8.58579C9.36683 9.36683 10.6332 9.36683 11.4142 8.58579L20 0L0 0Z" 
        fill={props.fill || colors.grey800}
      />
    </Svg>
  );
}

export default TooltipArrowTopIcon;