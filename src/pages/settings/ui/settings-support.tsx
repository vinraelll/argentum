import { ACard } from "@shared/ui/a-card"
import { ADivider } from "@shared/ui/a-divider"
import { AIcon } from "@shared/ui/a-icon"
import React from "react"
import { Text, View } from "react-native"

export default function SettingsSupport() {
  const supportSettings = [
    {
      icon: "help-circle-outline" as const,
      title: "Help & Support",
    },
    {
      icon: "information-circle-outline" as const,
      title: "About",
      value: "v.1.0.0",
    },
  ]
  return (
    <View>
      <Text className="text-sm font-bold text-text-primary my-2">Support</Text>
      <ACard className="flex-col gap-2">
        {supportSettings.map((setting, index) => (
          <React.Fragment key={index}>
            <View key={index} className="flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <View className="flex items-center justify-center p-2 border border-border rounded-sm">
                  <AIcon name={setting.icon} size={20} className="text-text-primary" />
                </View>
                <Text className="text-text-primary">{setting.title}</Text>
              </View>
              <View className="flex-row items-center gap-2">
                <Text className="text-text-secondary">{setting.value}</Text>
                <AIcon name="chevron-forward-outline" size={20} className="text-text-primary" />
              </View>
            </View>

            {index !== supportSettings.length - 1 && <ADivider />}
          </React.Fragment>
        ))}
      </ACard>
    </View>
  )
}
