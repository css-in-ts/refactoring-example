import React, {FC} from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const FixedDark: FC = () => {

  const fill = makeColor({ type: 'fixed', color: 'dark' })

  return <Swatch fill={fill} border={fill} />

}