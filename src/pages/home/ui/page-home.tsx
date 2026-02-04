import { Dashboard } from "@widgets/dashboard"
import { SafeAreaView } from "react-native-safe-area-context"
import Categories from "./categories"
import Transactions from "./transactions"

export default function HomePage() {
  const transactions = [
    {
      id: "1",
      title: "McDonald`s",
      icon: "fast-food" as const,
      category: "Food & Dining",
      amount: -12.34,
    },
    { id: "2", title: "Salary", icon: "cash" as const, category: "Income", amount: 2500.0 },
    { id: "3", title: "Uber", icon: "car" as const, category: "Transport", amount: -23.45 },
  ]

  const categories = [
    { id: "1", name: "Fast food", icon: "fast-food" as const, amount: 1234.56, progress: 70 },
    { id: "2", name: "Car", icon: "car" as const, amount: 45.56, progress: 40 },
    { id: "3", name: "Shopping", icon: "cart" as const, amount: 228.1, progress: 10 },
    { id: "4", name: "Rent", icon: "home" as const, amount: 500.0, progress: 100 },
  ]

  const balance = {
    totalBalance: "12,345.67",
    expenses: "2,423.46",
    incomes: "4,769.13",
  }

  return (
    <SafeAreaView className="flex-1 p-6 pt-0">
      <Dashboard {...balance} />
      <Categories categories={categories} />
      <Transactions transactions={transactions} />
    </SafeAreaView>
  )
}
