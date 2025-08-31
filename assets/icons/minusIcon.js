import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MinusIcon(props) {
  return (
    <Svg
      width={10}
      height={2}
      viewBox="0 0 10 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1 1h8" stroke="#fff" strokeWidth={2} strokeLinecap="round" />
    </Svg>
  )
}

export default MinusIcon
