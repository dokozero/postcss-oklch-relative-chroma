import { COLOR_SPACE_CULORI_NAME_MAPPING, DEBUG } from '../../data.js'
import { AbsoluteChroma, ColorSpaceRegularName, Hue, Lightness, RelativeChroma } from '../../types.js'
import convertRelativeChromaToAbsolute from '../convertRelativeChromaToAbsolute/convertRelativeChromaToAbsolute.js'

export default function getConvertedOklchCode(
  match: any,
  colorSpaceRegularName: ColorSpaceRegularName,
  lightness: string,
  relativeChroma: string,
  hue: string
): string {
  // We need to convert the color space name to the one used in Culori as they are different from CSS one like in color().
  const colorSpaceCuloriName = COLOR_SPACE_CULORI_NAME_MAPPING[colorSpaceRegularName]

  // If colorSpace value is not in COLOR_SPACE_CULORI_NAME_MAPPING we get and undefined value.
  if (colorSpaceCuloriName === undefined) {
    console.error(
      `Invalid color space: '${colorSpaceRegularName}', supported color spaces are: ${Object.keys(COLOR_SPACE_CULORI_NAME_MAPPING).join(', ')}`
    )
    return match
  }

  const absoluteChroma: AbsoluteChroma = convertRelativeChromaToAbsolute({
    lightness: parseFloat(lightness) as Lightness,
    relativeChroma: parseFloat(relativeChroma) as RelativeChroma,
    hue: parseFloat(hue) as Hue,
    colorSpace: colorSpaceCuloriName
  })

  const convertedOklchCode = `oklch(${lightness}% ${absoluteChroma} ${hue})`

  if (DEBUG) {
    console.log(`PostCSS – converted: '${match}' to '${convertedOklchCode}'`)
  }

  return convertedOklchCode
}
