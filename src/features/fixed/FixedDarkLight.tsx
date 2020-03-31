import React, {FC} from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const FixedDarkLight: FC = () => {

  const fill = makeColor({ type: 'fixed', color: 'dark' })
  const border = makeColor({ type: 'fixed', color: 'light' })

  return <Swatch fill={fill} border={border} />

}