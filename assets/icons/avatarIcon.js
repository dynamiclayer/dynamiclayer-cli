import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AvatarIcon(props) {
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
        d="M12 12a5 5 0 100-10 5 5 0 000 10zm-8.904 9.006c-.086.546.352.994.904.994h16c.552 0 .99-.448.904-.994C20.564 18.863 19.017 14 12 14c-7.017 0-8.563 4.863-8.904 7.006z"
        fill="#757575"
      />
    </Svg>
  )
}

export default AvatarIcon