import React from 'react';
import { Horse } from '../components/Horse';
import { makeColor } from '../utils/makeColor';

export const Broken = () => {

  const black = makeColor({ type: 'fixed', color: 'dark' });

  const white = makeColor({ type: 'fixed', color: 'light' });

  const blue = makeColor({ type: 'scalable', color: 'secondary' });

  const orange = makeColor({ type: 'custom', color: '#EE6C0D' });

  return (
    <>
      <Horse
        headFill={white}
        headOutline={blue}
        maneFill={white}
        maneOutline={blue}
      />

      <Horse
        headFill={blue}
        headOutline={white}
        maneFill={blue}
        maneOutline={white}
      />

      <Horse
        headFill={white}
        headOutline={black}
        maneFill={white}
        maneOutline={black}
      />

      <Horse
        headFill={orange}
        headOutline={white}
        maneFill={orange}
        maneOutline={white}
      />

      <Horse
        headFill={white}
        headOutline={orange}
        maneFill={white}
        maneOutline={orange}
      />
    </>
  );
};