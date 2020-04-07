import React from 'react';
import { Horse } from '../components/Horse';
import { makeColor } from '../utils/makeColor';

export const TwoTone = () => {

  const black = makeColor({ type: 'fixed', color: 'dark' });

  const white = makeColor({ type: 'fixed', color: 'light' });

  const blue = makeColor({ type: 'scalable', color: 'secondary' });

  const green = makeColor({ type: 'scalable', color: 'primary' });

  return (
    <>
      <Horse
        headFill={white}
        headOutline={blue}
        maneFill={white}
        maneOutline={green}
      />

      <Horse
        headFill={blue}
        headOutline={white}
        maneFill={green}
        maneOutline={white}
      />

      <Horse
        headFill={white}
        headOutline={black}
        maneFill={white}
        maneOutline={black}
      />

      <Horse
        headFill={green}
        headOutline={white}
        maneFill={blue}
        maneOutline={white}
      />

      <Horse
        headFill={white}
        headOutline={green}
        maneFill={white}
        maneOutline={blue}
      />
    </>
  );
};