import { AIconT } from "@shared/ui/a-icon"

export type ATransactionT = {
  id: string
  title: string
  icon: AIconT
  category: string
  amount: number
}
