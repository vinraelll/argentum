import { ACard } from "@shared/ui/a-card"
import React, { useState } from "react"
import { Text, View } from "react-native"
import { SettingT } from "../types"
import SettingItem from "./setting-item"

export default function SettingsSupport() {
  const [openPicker, setOpenPicker] = useState<string | null>(null)

  const supportSettings: SettingT[] = [
    {
      id: "support",
      icon: "help-circle-outline",
      title: "Help & Support",
    },
    {
      id: "about",
      icon: "information-circle-outline",
      title: "About",
      value: "v.1.0.0",
    },
  ]
  return (
    <View>
      <Text className="text-sm font-bold text-text-primary my-2">Support</Text>
      <ACard className="flex-col">
        {supportSettings.map((setting, index) => (
          <SettingItem
            key={setting.title}
            setting={setting}
            isExpanded={openPicker === setting.title}
            onPress={() =>
              setting.picker && setOpenPicker(openPicker === setting.title ? null : setting.title)
            }
            showDivider={index !== supportSettings.length - 1}
          />
        ))}
      </ACard>
    </View>
  )
}
