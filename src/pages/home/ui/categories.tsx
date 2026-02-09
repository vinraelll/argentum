import { ACategory, ACategoryT } from "@entities/a-category"
import { PlatformPressable } from "@react-navigation/elements"
import * as Haptics from "expo-haptics"
import { Link } from "expo-router"
import { FlatList, Text, View } from "react-native"

type Props = {
  categories: ACategoryT[]
}

export default function Categories({ categories }: Props) {
  return (
    <View className="mt-6">
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-bold text-text-primary">Spending by Category</Text>
        <Link href="/categories" asChild>
          <PlatformPressable
            onPressIn={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            }}
          >
            <Text className="text-sm font-medium text-primary">See All</Text>
          </PlatformPressable>
        </Link>
      </View>

      <FlatList data={categories} renderItem={({ item }) => <ACategory category={item} />} />
    </View>
  )
}
