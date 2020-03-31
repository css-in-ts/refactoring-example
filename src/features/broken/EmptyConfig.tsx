import React, {FC} from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const EmptyConfig: FC = () => {

  const fill = makeColor({ type: 'scalable', color: 'primary' })
  const border = makeColor({ type: 'scalable', color: 'secondary' })

  return <Swatch fill={fill} border={border} />

}