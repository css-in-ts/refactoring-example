import React, { FC } from 'react';
import {Button} from './Button'
import styled from "styled-components";

const GridWrapper: FC = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

const Grid: FC = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 12px;
  grid-row-gap: 12px;
`

function App() {
  return (
    <GridWrapper>
      <Grid>
        <Button label="A Button!" styleType="primary" />
        <Button label="Another One!" styleType="secondary" />
        <Button label="Warning!" styleType="warning" />
        <Button label="Error!" styleType="error" />
      </Grid>
    </GridWrapper>
  );
}

export default App;
