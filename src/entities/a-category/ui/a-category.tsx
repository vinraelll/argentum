import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"
import { ACategory as ACategoryType } from "../types"

type Props = {
  category: ACategoryType
}

export default function ACategory({ category }: Props) {
  const amount = `$${category.amount.toFixed(2)}`

  return (
    <View className="mb-4">
      <View className="flex-row justify-between items-center mb-2">
        <View className="flex-row items-center gap-2">
          <View className="items-center justify-center w-9 rounded-sm border color-border p-1">
            <Ionicons name={category.icon} size={24} />
          </View>
          <Text className="text-base text-text-primary font-bold">{category.name}</Text>
        </View>
        <Text className="text-base font-bold text-text-primary">{amount}</Text>
      </View>
      <View className="h-1.5 rounded-full bg-background-secondary overflow-hidden">
        <View
          className="h-full rounded-lg bg-success"
          style={{ width: `${category.progress}%` }}
        />
      </View>
    </View>
  )
}
