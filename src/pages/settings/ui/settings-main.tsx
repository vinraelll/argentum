import { ACard } from "@shared/ui/a-card"
import { ADivider } from "@shared/ui/a-divider"
import { AIcon } from "@shared/ui/a-icon"
import React from "react"
import { Text, View } from "react-native"

export default function SettingsMain() {
  const mainSettings = [
    {
      icon: "logo-usd" as const,
      title: "Currency",
      value: "USD ($)",
    },
    {
      icon: "moon" as const,
      title: "Theme",
      value: "Dark",
    },
    {
      icon: "notifications" as const,
      title: "Notifications",
      value: "Enabled",
    },
    {
      icon: "language" as const,
      title: "Language",
      value: "English (EN)",
    },
  ]
  return (
    <View>
      <Text className="text-sm font-bold text-text-primary my-2">Main</Text>
      <ACard className="flex-col gap-2">
        {mainSettings.map((setting, index) => (
          <React.Fragment key={index}>
            <View className="flex-row items-center justify-between">
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

            {index !== mainSettings.length - 1 && <ADivider />}
          </React.Fragment>
        ))}
      </ACard>
    </View>
  )
}
