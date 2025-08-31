import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

const ToggleOffIcon = (props) => {
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
        <Rect width={50} height={32} rx={16} fill="#E2E2E2" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16s6.268 14 14 14z"
          fill="#fff"
        />
      </Svg>
    );
};

export default ToggleOffIcon;