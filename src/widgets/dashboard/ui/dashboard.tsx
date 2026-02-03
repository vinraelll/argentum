import { Ionicons } from "@expo/vector-icons"
import { Text, View } from "react-native"

export default function Dashboard() {
  return (
    <View>
      <View className="gap-1 mb-3">
        <Text className="text-sm font-bold text-text-primary">Total est. balance</Text>
        <Text className="text-4xl font-bold text-text-primary">$12,345.67</Text>
      </View>

      <View className="flex-row gap-4">
        <View className="flex-1 rounded-xl border border-border p-4">
          <View className="flex-row items-center gap-1 mb-2">
            <Ionicons name="arrow-down-circle" size={24} />
            <Text>Incomes</Text>
          </View>
          <Text className="text-xl font-bold mb-1 text-success">$4,769.13</Text>
          <Text>This month</Text>
        </View>

        <View className="flex-1 rounded-xl border border-border p-4">
          <View className="flex-row items-center gap-1 mb-2">
            <Ionicons name="arrow-up-circle" size={24} />
            <Text>Expenses</Text>
          </View>
          <Text className="text-xl font-bold mb-1 text-danger">$2,423.46</Text>
          <Text>This month</Text>
        </View>
      </View>
    </View>
  )
}
