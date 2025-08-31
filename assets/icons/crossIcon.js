import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CrossIcon(props) {
  return (
    <Svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.293 9.707a1 1 0 001.414-1.414L6.414 5l3.293-3.293A1 1 0 008.293.293L5 3.586 1.707.293A1 1 0 00.293 1.707L3.586 5 .293 8.293a1 1 0 001.414 1.414L5 6.414l3.293 3.293z"
        fill="#757575"
      />
    </Svg>
  )
}

export default CrossIcon
