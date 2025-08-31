import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../../src/style";

function TooltipArrowLeftIcon(props) {
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
      d="M0 20V0L8.58579 8.58579C9.36683 9.36683 9.36684 10.6332 8.58579 11.4142L0 20Z" 
      fill={props.fill || colors.grey800}
    />
    </Svg>
  );
}

export default TooltipArrowLeftIcon;