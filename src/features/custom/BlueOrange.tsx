import React, {FC} from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const BlueOrange: FC = () => {

  const fill = makeColor({ custom: '#0508EE'  })
  const border = makeColor({ custom: '#EE7D0F' })

  return <Swatch fill={fill} border={border} />

}