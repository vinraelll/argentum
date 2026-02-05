import { AIcon } from "@/src/shared/ui/a-icon"
import { formatCurrency } from "@shared/lib/helpers/currency"
import { Text, View } from "react-native"
import { ACategoryT } from "./types"

type Props = {
  category: ACategoryT
}

export default function ACategory({ category }: Props) {
  const amount = formatCurrency(category.amount)

  return (
    <View className="mb-4">
      <View className="flex-row justify-between items-center mb-2">
        <View className="flex-row items-center gap-2">
          <View className="items-center justify-center w-9 rounded-sm border border-border p-1">
            <AIcon name={category.icon} size={24} className="text-text-primary" />
          </View>
          <Text className="text-base text-text-primary font-bold">{category.name}</Text>
        </View>
        <Text className="text-base font-bold text-text-primary">{amount}</Text>
      </View>
      <View className="h-1.5 rounded-full bg-background-secondary overflow-hidden">
        <View className="h-full rounded-lg bg-success" style={{ width: `${category.progress}%` }} />
      </View>
    </View>
  )
}
