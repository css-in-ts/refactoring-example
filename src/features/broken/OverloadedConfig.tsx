import React, {FC} from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const OverloadedConfig: FC = () => {

  const fill = makeColor({ type: 'scalable', color: 'primary', scale: 1 } )
  const border = makeColor({ type: 'scalable', color: 'gray' })

  return <Swatch fill={fill} border={border} />

}

export const OverloadedConfigAgain: FC = () => {

  const fill = makeColor({ type: 'scalable', color: 'primary', scale: 1 })
  const border = makeColor({ type: 'fixed', color: 'light' })

  return <Swatch fill={fill} border={border} />

}