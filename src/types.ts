// Between 0 and 100.
export type Lightness = number

// Between 0 and 100.
export type RelativeChroma = number

// Between 0 and 0.46 (maximum value in rec2020).
export type AbsoluteChroma = number

// Between 0 and 360.
export type Hue = number

export type ColorSpaceRegularName = 'srgb' | 'display-p3' | 'rec2020'

export type ColorSpaceCuloriName = 'rgb' | 'p3' | 'rec2020'
