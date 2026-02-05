import { AIcon } from "@/src/shared/ui/a-icon"
import { formatCurrency } from "@shared/lib/helpers/currency"
import { Text, View } from "react-native"

type Props = {
  totalBalance: string
  expenses: string
  incomes: string
}

export default function Dashboard({ totalBalance, expenses, incomes }: Props) {
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
        <View className="flex-1 rounded-xl border border-border p-4">
          <View className="flex-row items-center gap-1 mb-2">
            <AIcon name="arrow-down-circle" size={24} className="text-success" />
            <Text className="text-text-primary">Incomes</Text>
          </View>
          <Text className="text-xl font-bold mb-1 text-success">{formatted.incomes}</Text>
          <Text className="text-sm text-text-secondary">This month</Text>
        </View>

        <View className="flex-1 rounded-xl border border-border p-4">
          <View className="flex-row items-center gap-1 mb-2">
            <AIcon name="arrow-up-circle" size={24} className="text-danger" />
            <Text className="text-text-primary">Expenses</Text>
          </View>
          <Text className="text-xl font-bold mb-1 text-danger">{formatted.expenses}</Text>
          <Text className="text-sm text-text-secondary">This month</Text>
        </View>
      </View>
    </View>
  )
}
