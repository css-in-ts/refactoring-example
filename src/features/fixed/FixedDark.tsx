import React, {FC} from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const FixedDark: FC = () => {

  const fill = makeColor({ fixed: 'dark' })

  return <Swatch fill={fill} border={fill} />

}