export const formatValue = (value: number | string, options: Intl.NumberFormatOptions = {}): string => {
  const numericValue = typeof value === "string" ? parseFloat(value) : value

  if (isNaN(numericValue)) return "0.00"

  const defaultOptions: Intl.NumberFormatOptions = {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  }

  return new Intl.NumberFormat("en-US", defaultOptions).format(numericValue)
}
