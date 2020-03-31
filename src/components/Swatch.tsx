import React, {FC} from "react";
import {ColorHex} from "@css-in-ts/design-system/types/composite";
import styled from "styled-components";
import {makeColor} from "../utils/makeColor";

const swatchBackground = makeColor({ type: 'custom', color: '#eeeeee'})

const SwatchWrapper = styled.div`
  border-radius: 1rem;
  background: ${swatchBackground};
  padding: 1rem;
`

const SwatchBorder = styled.div<{ border: ColorHex }>`
  padding: .5rem;
  border-color: ${({ border }) => border};
  padding: 1rem;
  border-style: dotted;
`



export const Swatch: FC<{ fill: ColorHex, border: ColorHex }> = ({ fill, border}) => (
  <SwatchWrapper>
    <SwatchBorder border={border}>
      <div
        style={{
          backgroundColor: fill,
          height: '25px',
          width: '50px',
          borderColor: border,
          borderStyle: 'solid',
          borderRadius: '1rem'
        }}
      />
    </SwatchBorder>
  </SwatchWrapper>
)