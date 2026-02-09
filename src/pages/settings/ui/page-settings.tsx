import { ACard } from "@shared/ui/a-card"
import { AIcon } from "@shared/ui/a-icon"
import { AScreen } from "@shared/ui/a-screen"
import { Pressable, Text, View } from "react-native"
import { SettingsMain, SettingsSupport } from "./"

export default function SettingsPage() {
  return (
    <AScreen>
      <View>
        <Text className="text-sm font-bold text-text-primary mb-3">Settings</Text>
      </View>

      <ACard className="flex-row">
        <View className="flex-row items-center flex-1 gap-4">
          <View className="rounded-full size-14 border border-border flex items-center justify-center">
            <Text className="text-text-primary font-bold">AP</Text>
          </View>
          <View className="flex-col gap-1">
            <Text className="text-text-primary font-bold">Alexandr Perchun</Text>
            <Text className="text-text-secondary text-xs">alexandr_perchun@abrakadabra.com</Text>
          </View>
          <Pressable
            className="ms-auto"
            onPress={() => {
              console.log("hello react native")
            }}
          >
            <Text className="text-primary">Edit</Text>
          </Pressable>
        </View>
      </ACard>

      <SettingsMain />
      <SettingsSupport />

      <ACard className="mt-6 flex-row items-center gap-2 justify-center p-3">
        <AIcon name="log-out-outline" size={20} className="color-danger" />
        <Pressable
          onPress={() => {
            console.log("Logging out...")
          }}
        >
          <Text className="color-danger">Logout</Text>
        </Pressable>
      </ACard>
    </AScreen>
  )
}
