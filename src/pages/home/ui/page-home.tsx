import { ACategory } from "@entities/a-category"
import { ATransaction } from "@entities/a-transaction"
import { Dashboard } from "@widgets/dashboard"
import { FlatList, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

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

  return (
    <SafeAreaView className="flex-1 p-6 pt-0">
      <Dashboard />

      {/* Categories */}
      <View className="mt-6">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-bold">Spending by Category</Text>
          <Text className="text-sm font-medium text-primary">See All</Text>
        </View>

        <FlatList data={categories} renderItem={({ item }) => <ACategory category={item} />} />
      </View>

      {/* Transactions */}
      <View className="mt-6">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-bold">Recent Transactions</Text>
          <Text className="text-sm font-medium text-primary">See All</Text>
        </View>

        <FlatList data={transactions} renderItem={({ item }) => <ATransaction transaction={item} />} />
      </View>
    </SafeAreaView>
  )
}
