import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const ToggleOnIcon = (props) => {
  const { width = 28, height = 28, ...otherProps } = props;
  
  return (
    <Svg
      width={50}
      height={32}
      viewBox="0 0 50 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={50} height={32} rx={16} fill="#7630F7" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34 30c7.732 0 14-6.268 14-14S41.732 2 34 2 20 8.268 20 16s6.268 14 14 14z"
        fill="#fff"
      />
    </Svg>
  );
};

export default ToggleOnIcon;