import React, {FC} from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const BlueOrange: FC = () => {

  const fill = makeColor({ type: 'custom', color: '#46ee4e' })
  const border = makeColor({ type: 'custom', color: '#ed44ee' })

  return <Swatch fill={fill} border={border} />

}