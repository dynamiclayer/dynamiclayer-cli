import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MicrophoneIcon(props) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 7a3 3 0 116 0v4a3 3 0 11-6 0V7zm-4 4V9a1 1 0 012 0v2a5 5 0 0010 0V9a1 1 0 112 0v2a7.001 7.001 0 01-6 6.93V20a1 1 0 11-2 0v-2.07A7.001 7.001 0 015 11z"
        fill="#757575"
      />
    </Svg>
  )
}

export default MicrophoneIcon
