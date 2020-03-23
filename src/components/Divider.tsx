import React, {FC} from 'react'
import styled from "styled-components";
import {ColorHex} from "@css-in-ts/design-system/types/composite";


const StyledDivider = styled.h1<{ color: ColorHex }>`
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 6;
  text-align: center;
  border-bottom-style: solid;
  border-bottom-color: ${({ color }) => color };
  color: ${({ color }) => color };
`

export const Divider: FC<{ content: string, color: ColorHex }> = ({ content, color }) => (
  <StyledDivider color={color}>{content}</StyledDivider>
)