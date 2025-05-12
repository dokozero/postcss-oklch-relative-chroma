// Between 0 and 100.
export type Lightness = number

// Between 0 and 100.
export type RelativeChroma = number

// Between 0 and 0.467 (maximum value in rec2020) and more in theory.
export type AbsoluteChroma = number

// Between 0 and 360.
export type Hue = number

export type Lrch = {
  l: Lightness
  rc: RelativeChroma
  h: Hue
}

export type GamutRegularName = 'srgb' | 'display-p3' | 'p3' | 'rec2020'

export type GamutCuloriName = 'rgb' | 'p3' | 'rec2020'
