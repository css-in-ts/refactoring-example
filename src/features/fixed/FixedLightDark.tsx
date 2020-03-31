import React, {FC} from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const FixedLightDark: FC = () => {

  const fill = makeColor({ type: 'fixed', color: 'light' })
  const border = makeColor({ type: 'fixed', color: 'dark' })

  return <Swatch fill={fill} border={border} />

}