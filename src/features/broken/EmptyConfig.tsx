import React, {FC} from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const EmptyConfig: FC = () => {

  const fill = makeColor({})
  const border = makeColor({})

  return <Swatch fill={fill} border={border} />

}