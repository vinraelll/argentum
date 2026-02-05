import { AScreen } from "@shared/ui/a-screen"
import { Dashboard } from "@widgets/dashboard"
import { useHomeStore } from "../model/use-home-store"
import Categories from "./categories"
import Transactions from "./transactions"

export default function HomePage() {
  const transactions = useHomeStore((state) => state.transactions)
  const categories = useHomeStore((state) => state.categories)
  const balance = useHomeStore((state) => state.balance)

  return (
    <AScreen>
      <Dashboard {...balance} />
      <Categories categories={categories} />
      <Transactions transactions={transactions} />
    </AScreen>
  )
}
