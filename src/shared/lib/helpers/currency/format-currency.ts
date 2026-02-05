export const formatCurrency = (value: number | string, currency = "USD", locale = "en-US"): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 2,
  }).format(typeof value === "string" ? parseFloat(value) : value)
}
