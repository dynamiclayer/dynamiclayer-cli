import * as React from "react"
import Svg, { Path } from "react-native-svg"

function StarEmptyIcon(props) {
  return (
    <Svg
      width={16}
      height={15}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.552.908a.5.5 0 01.896 0l1.787 3.62a.5.5 0 00.376.274l3.995.58a.5.5 0 01.277.853l-2.89 2.818a.5.5 0 00-.144.442l.682 3.979a.5.5 0 01-.726.527l-3.572-1.879a.5.5 0 00-.466 0l-3.573 1.879a.5.5 0 01-.725-.527l.682-3.979a.5.5 0 00-.143-.442L1.117 6.235a.5.5 0 01.277-.853l3.995-.58a.5.5 0 00.376-.274L7.552.908z"
        fill="#E2E2E2"
      />
    </Svg>
  )
}

export default StarEmptyIcon
