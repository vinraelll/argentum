import { ATransaction, ATransactionT } from "@entities/a-transaction"
import { FlatList, Text, View } from "react-native"

type Props = {
  transactions: ATransactionT[]
}

export default function Transactions({ transactions }: Props) {
  return (
    <View className="mt-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-bold text-text-primary">Recent Transactions</Text>
        <Text className="text-sm font-medium text-primary">See All</Text>
      </View>

      <FlatList data={transactions} renderItem={({ item }) => <ATransaction transaction={item} />} />
    </View>
  )
}
