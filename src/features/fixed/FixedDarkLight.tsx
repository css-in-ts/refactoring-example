import React, {FC} from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const FixedDarkLight: FC = () => {

  const fill = makeColor({ fixed: 'dark' })
  const border = makeColor({ fixed: 'light' })

  return <Swatch fill={fill} border={border} />

}