import {mix} from "polished";
import {ColorFixed, ColorScalable} from "@css-in-ts/design-system/types/primitive/color.primitive";
import {
  ColorBlendRatios,
  ColorHex,
  ColorProperties,
  ColorScalePosition,
  ColorScales
} from "@css-in-ts/design-system/types/composite";
import {colorConfig} from "@css-in-ts/design-system/configs";

type ColorMapScalable = { [key in ColorScalable]: ColorScales };
type ColorMapFixed = { [key in ColorFixed]: ColorHex };

const createColor = (
  scaler: ColorBlendRatios,
  color: ColorScalable
): ColorHex =>
  mix(scaler, colorConfig.fixed.light, colorConfig.scalable[color]);

const createColorScale = (hex: ColorScalable): ColorScales => [
  colorConfig.scalable[hex],
  createColor(0.25, hex),
  createColor(0.5, hex),
  createColor(0.75, hex)
];

const scalableColorMap: ColorMapScalable = {
  primary: createColorScale("primary"),
  secondary: createColorScale("secondary"),
  accent: createColorScale("accent"),
  gray: createColorScale("gray"),
  light: createColorScale("light"),
  success: createColorScale("success"),
  warning: createColorScale("warning"),
  error: createColorScale("error")
};

const fixedColorMap: ColorMapFixed = {
  light: colorConfig.fixed.light,
  dark: colorConfig.fixed.dark
};

interface Fixed {
  type: 'fixed',
  color: ColorFixed
}

interface Scalable {
  type: 'scalable',
  color: ColorScalable,
  scale?: ColorScalePosition
}

interface Custom {
  type: 'custom',
  color: ColorHex
}

type NewColorProperties = Fixed | Scalable | Custom

export const makeColor = (config: NewColorProperties): ColorHex => {
  switch (config.type) {
    case 'fixed':
      return fixedColorMap[config.color];
    case 'scalable':
      return scalableColorMap[config.color][config.scale || 0];
    case 'custom':
      console.warn(
        "You're attempting to use a custom color that falls outside of the design system. This color will not be regulated by the design system any longer and thusly isn't type-safe. You'll be required to update this value manually for any subsequent changes. Use with cation."
      );
      console.log(config.color);
      return config.color;
  }
};
