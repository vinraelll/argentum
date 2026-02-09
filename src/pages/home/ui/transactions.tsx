import { ATransaction, ATransactionT } from "@entities/a-transaction"
import { PlatformPressable } from "@react-navigation/elements"
import * as Haptics from "expo-haptics"
import { Link } from "expo-router"
import { FlatList, Text, View } from "react-native"

type Props = {
  transactions: ATransactionT[]
}

export default function Transactions({ transactions }: Props) {
  return (
    <View className="mt-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-bold text-text-primary">Recent Transactions</Text>
        <Link href="/transactions" asChild>
          <PlatformPressable
            onPressIn={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            }}
          >
            <Text className="text-sm font-medium text-primary">See All</Text>
          </PlatformPressable>
        </Link>
      </View>

      <FlatList data={transactions} renderItem={({ item }) => <ATransaction transaction={item} />} />
    </View>
  )
}
