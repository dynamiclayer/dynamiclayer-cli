import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../../src/style";

function ChevronDownIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6 9l5.93 5.93a.1.1 0 00.14 0L18 9"
        stroke={props.fill || colors.grey900}
        strokeWidth={2}
        strokeLinecap="round"
        {...props}
      />
    </Svg>
  );
}

export default ChevronDownIcon;