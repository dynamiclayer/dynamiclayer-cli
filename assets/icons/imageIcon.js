import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ImageIcon(props) {
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
        d="M2 4a2 2 0 012-2h16a2 2 0 012 2v11.586l-6.223-6.223-.083-.075a1.1 1.1 0 00-1.388 0l-.083.075L9 14.586l-2.223-2.223-.083-.075a1.1 1.1 0 00-1.388 0l-.083.075L2 15.586V4zm0 14.414V20a2 2 0 002 2h16a2 2 0 002-2v-1.586l-7-7-5.223 5.223a1.1 1.1 0 01-1.554 0L6 14.414l-4 4zM10 8a2 2 0 11-4 0 2 2 0 014 0z"
        fill="#757575"
      />
    </Svg>
  )
}

export default ImageIcon
