import React, {FC} from "react"
import {Swatch} from "../../components/Swatch";
import {makeColor} from "../../utils/makeColor";

export const Error: FC = () => {

  const fill = makeColor({ scalable: { color: 'error', scale: 3 } })
  const border = makeColor({ scalable: { color: 'error' } })

  return <Swatch fill={fill} border={border} />

}