import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CheckmarkIcon(props) {
  return (
    <Svg
      width={10}
      height={7}
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 3l2.93 2.93a.1.1 0 00.14 0L9 1"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  )
}

export default CheckmarkIcon
