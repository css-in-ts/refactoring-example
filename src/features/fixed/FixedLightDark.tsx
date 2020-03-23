import React, {FC} from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const FixedLightDark: FC = () => {

  const fill = makeColor({ fixed: 'light' })
  const border = makeColor({ fixed: 'dark' })

  return <Swatch fill={fill} border={border} />

}