import React, {FC} from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const BlueOrange: FC = () => {

  const fill = makeColor({ custom: '#46ee4e'  })
  const border = makeColor({ custom: '#ed44ee' })

  return <Swatch fill={fill} border={border} />

}