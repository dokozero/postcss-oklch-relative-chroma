import { clampChroma } from 'culori'
import { AbsoluteChroma, ColorSpaceCuloriName, Hue, Lightness, RelativeChroma } from '../../types.js'

type Props = {
  lightness: Lightness
  relativeChroma: RelativeChroma
  hue: Hue
  colorSpace: ColorSpaceCuloriName
}

export default function convertRelativeChromaToAbsolute(props: Props): AbsoluteChroma {
  const { lightness, relativeChroma, hue, colorSpace } = props

  try {
    // First, we need to get the current maximum chroma for the given lightness and hue. For that, we clamp the color with an absolute chroma of 1, which is way out of display-p3 or rec2020 gamuts.
    const currentMaxChroma = clampChroma({ mode: 'oklch', l: lightness / 100, c: 1, h: hue }, 'oklch', colorSpace).c

    // Then, as we know the absolute chroma value of a relative one of 100%, we can get the absolute chroma from the requested relative one.
    return Number(((relativeChroma * currentMaxChroma) / 100).toFixed(6))
  } catch (error: any) {
    throw new Error(error)
  }
}
