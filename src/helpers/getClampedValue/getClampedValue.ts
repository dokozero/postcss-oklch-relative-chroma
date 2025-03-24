type Props<T extends number> = {
  value: T
  min: T
  max: T
}

export default function getClampedValue<T extends number>(props: Props<T>): T {
  const { value, min, max } = props

  if (value < min) {
    return min
  }

  if (value > max) {
    return max
  }

  return value
}
