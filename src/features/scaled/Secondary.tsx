import React, {FC} from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const Secondary: FC = () => {

  const fill = makeColor({ scalable: { color: 'accent'} })
  const border = makeColor({ scalable: { color: 'secondary', scale: 1 } })

  return <Swatch fill={fill} border={border} />

}