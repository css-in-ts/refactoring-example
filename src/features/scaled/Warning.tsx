import React, {FC} from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const Warning: FC = () => {

  const fill = makeColor({ type: 'scalable', color: 'warning' })
  const border = makeColor({ type: 'scalable', color: 'warning', scale: 3 })

  return <Swatch fill={fill} border={border} />

}