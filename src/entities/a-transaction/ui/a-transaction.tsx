import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"
import { ATransaction as ATransactionType } from "../types"

type Props = {
  transaction: ATransactionType
}

export default function ATransaction({ transaction }: Props) {
  const isPositive = transaction.amount > 0
  const amountColor = transaction.amount < 0 ? "color-danger" : "color-success"
  const amountValue = isPositive
    ? `+$${transaction.amount.toFixed(2)}`
    : `-$${Math.abs(transaction.amount).toFixed(2)}`

  return (
    <View className="flex-row items-center justify-between mb-4">
      <View className="w-9 items-center rounded-sm border color-border p-1 justify-center">
        <Ionicons name={transaction.icon} size={24} />
      </View>
      <View className="flex-1 ml-3">
        <Text className="text-base font-bold text-text-primary">{transaction.title}</Text>
        <Text className="text-xs text-text-secondary">{transaction.category}</Text>
      </View>
      <Text className={`text-base font-bold ${amountColor}`}>{amountValue}</Text>
    </View>
  )
}
