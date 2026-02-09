import { ACategoryT } from "@entities/a-category"
import { ATransactionT } from "@entities/a-transaction"
import { DashboardT } from "@widgets/dashboard"
import { create } from "zustand"

type HomeStore = {
  transactions: ATransactionT[]
  categories: ACategoryT[]
  balance: DashboardT
}

export const useHomeStore = create(
  (): HomeStore => ({
    transactions: [
      {
        id: "1",
        title: "McDonald`s",
        icon: "fast-food",
        category: "Food & Dining",
        amount: -12.34,
      },
      { id: "2", title: "Salary", icon: "cash", category: "Income", amount: 2500.0 },
      { id: "3", title: "Uber", icon: "car", category: "Transport", amount: -23.45 },
    ],
    categories: [
      { id: "1", name: "Fast food", icon: "fast-food", amount: 1234.56, progress: 70 },
      { id: "2", name: "Car", icon: "car", amount: 45.56, progress: 40 },
      { id: "3", name: "Shopping", icon: "cart", amount: 228.1, progress: 10 },
      { id: "4", name: "Rent", icon: "home", amount: 500.0, progress: 100 },
    ],
    balance: {
      totalBalance: 12345.67,
      expenses: 2423.46,
      incomes: 4769.13,
    },
  }),
)
