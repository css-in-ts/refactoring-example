import React, {FC} from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const Warning: FC = () => {

  const fill = makeColor({ scalable: { color: 'warning', scale: 1 } })
  const border = makeColor({ scalable: { color: 'primary', scale: 1 } })

  return <Swatch fill={fill} border={border} />

}