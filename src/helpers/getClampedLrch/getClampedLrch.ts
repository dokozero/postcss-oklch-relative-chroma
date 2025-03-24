import { Hue, Lightness, Lrch, RelativeChroma } from '../../types.js'
import getClampedValue from '../getClampedValue/getClampedValue.js'

export default function getClampedLrch(props: Lrch): Lrch {
  const { l, rc, h } = props

  const clampedLrch: Lrch = {
    l: l,
    rc: rc,
    h: h
  }

  clampedLrch.l = getClampedValue<Lightness>({
    value: l,
    min: 0,
    max: 100
  })

  clampedLrch.rc = getClampedValue<RelativeChroma>({
    value: rc,
    min: 0,
    max: 100
  })

  clampedLrch.h = getClampedValue<Hue>({
    value: h,
    min: 0,
    max: 360
  })

  return clampedLrch
}
