import { ColorSpaceRegularName, ColorSpaceCuloriName } from './types.js'

export const DEBUG = false

export const MAX_CHROMA_REC2020 = 0.467

export const COLOR_SPACE_CULORI_NAME_MAPPING: Record<ColorSpaceRegularName, ColorSpaceCuloriName> = {
  'srgb': 'rgb',
  'display-p3': 'p3',
  'rec2020': 'rec2020'
}

export const ABSOLUTE_CHROMA_DECIMAL_PRECISION = 6

export const OKLCH_RELATIVE_CHROMA_REGEX = /oklch\(([a-zA-Z0-9-]+)\s+([\d.]+)%\s+([\d.]+)%\s+([\d.]+)\)/g
