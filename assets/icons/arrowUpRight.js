import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArrowUpRight(props) {
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
        d="M6.293 16.293a1 1 0 101.414 1.414L16 9.414V16a1 1 0 102 0V7.1l-.001-.051A.997.997 0 0016.95 6 1.12 1.12 0 0016.9 6H8a1 1 0 100 2h6.586l-8.293 8.293z"
        fill="#fff"
      />
    </Svg>
  )
}

export default ArrowUpRight
