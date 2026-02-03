import { AIcon } from "@shared/types"

export type ATransaction = {
  id: string
  title: string
  icon: AIcon
  category: string
  amount: number
}
