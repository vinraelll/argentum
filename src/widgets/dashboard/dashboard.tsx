import { formatCurrency } from "@shared/lib/helpers/currency"
import { ACard } from "@shared/ui/a-card"
import { AIcon } from "@shared/ui/a-icon"
import { Text, View } from "react-native"
import { DashboardT } from "./types"

export default function Dashboard({ totalBalance, expenses, incomes }: DashboardT) {
  const formatted = {
    totalBalance: formatCurrency(totalBalance),
    expenses: formatCurrency(expenses),
    incomes: formatCurrency(incomes),
  }

  return (
    <View>
      <View className="gap-1 mb-3">
        <Text className="text-sm font-bold text-text-primary">Total est. balance</Text>
        <Text className="text-4xl font-bold text-text-primary">{formatted.totalBalance}</Text>
      </View>

      <View className="flex-row gap-4">
        <ACard className="flex-1">
          <View className="flex-row items-center gap-2 mb-2">
            <Text className="text-text-primary">Incomes</Text>
            <AIcon name="trending-up" size={24} className="text-success" />
          </View>
          <Text className="text-xl font-bold mb-1 text-success">{formatted.incomes}</Text>
          <Text className="text-sm text-text-secondary">This month</Text>
        </ACard>

        <ACard className="flex-1">
          <View className="flex-row items-center gap-2 mb-2">
            <Text className="text-text-primary">Expenses</Text>
            <AIcon name="trending-down" size={24} className="text-danger" />
          </View>
          <Text className="text-xl font-bold mb-1 text-danger">{formatted.expenses}</Text>
          <Text className="text-sm text-text-secondary">This month</Text>
        </ACard>
      </View>
    </View>
  )
}
