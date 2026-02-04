import { ACategory, ACategoryT } from "@entities/a-category"
import { FlatList, Text, View } from "react-native"

type Props = {
  categories: ACategoryT[]
}

export default function Categories({ categories }: Props) {
  return (
    <View className="mt-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-bold text-text-primary">Spending by Category</Text>
        <Text className="text-sm font-medium text-primary">See All</Text>
      </View>

      <FlatList data={categories} renderItem={({ item }) => <ACategory category={item} />} />
    </View>
  )
}
