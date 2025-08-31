import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../../src/style";

function ChevronRightIcon(props) {
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
        d="M9 18l5.93-5.93a.1.1 0 000-.14L9 6"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default ChevronRightIcon;