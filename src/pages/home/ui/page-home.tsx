import { Dashboard } from "@widgets/dashboard"
import { SafeAreaView } from "react-native-safe-area-context"
import { useHomeStore } from "../model/use-home-store"
import Categories from "./categories"
import Transactions from "./transactions"

export default function HomePage() {
  const transactions = useHomeStore((state) => state.transactions)
  const categories = useHomeStore((state) => state.categories)
  const balance = useHomeStore((state) => state.balance)

  return (
    <SafeAreaView className="flex-1 p-6 pt-0">
      <Dashboard {...balance} />
      <Categories categories={categories} />
      <Transactions transactions={transactions} />
    </SafeAreaView>
  )
}
