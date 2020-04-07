import React from 'react';
import { Horse } from '../components/Horse';
import { makeColor } from '../utils/makeColor';

export const Broken = () => {

  const black = makeColor({});

  const white = makeColor({});

  const blue = makeColor({ custom: '#EE6C0D', fixed: 'dark' });

  const green = makeColor({ custom: '#EE6C0D', fixed: 'light' });

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
        headFill={green}
        headOutline={white}
        maneFill={green}
        maneOutline={white}
      />

      <Horse
        headFill={white}
        headOutline={green}
        maneFill={white}
        maneOutline={green}
      />
    </>
  );
};