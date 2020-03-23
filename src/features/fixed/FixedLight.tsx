import React, {FC} from "react";
import {makeColor} from "../../utils/makeColor";
import {Swatch} from "../../components/Swatch";

export const FixedLight: FC = () => {

  const fill = makeColor({ fixed: 'light' })

  return <Swatch fill={fill} border={fill} />

}