import { ACard } from "@shared/ui/a-card"
import { useColorScheme } from "nativewind"
import React, { useState } from "react"
import { Text, View } from "react-native"
import { SettingT } from "../types"
import SettingItem from "./setting-item"

export default function SettingsMain() {
  const [openPicker, setOpenPicker] = useState<string | null>(null)
  const [currency, setCurrency] = useState("USD")
  const { colorScheme, setColorScheme } = useColorScheme()

  const mainSettings: SettingT[] = [
    {
      id: "currency",
      icon: "logo-usd",
      title: "Currency",
      value: currency,
      picker: {
        selectedValue: currency,
        onValueChange: (val: string) => setCurrency(val),
        items: [
          { label: "USD ($)", value: "USD" },
          { label: "EUR (€)", value: "EUR" },
          { label: "RSD (RSD)", value: "RSD" },
        ],
      },
    },
    {
      id: "theme",
      icon: "moon",
      title: "Theme",
      value: colorScheme === "dark" ? "Dark" : "Light",
      picker: {
        selectedValue: colorScheme,
        onValueChange: (val: string) => setColorScheme(val as "light" | "dark"),
        items: [
          { label: "Light", value: "light" },
          { label: "Dark", value: "dark" },
          { label: "System", value: "system" },
        ],
      },
    },
    { id: "notifications", icon: "notifications", title: "Notifications", value: "Enabled" },
  ]

  return (
    <View>
      <Text className="text-sm font-bold text-text-primary my-2">Main</Text>
      <ACard className="flex-col">
        {mainSettings.map((setting, index) => (
          <SettingItem
            key={setting.id}
            setting={setting}
            isExpanded={openPicker === setting.id}
            onPress={() => setting.picker && setOpenPicker(openPicker === setting.id ? null : setting.id)}
            showDivider={index !== mainSettings.length - 1}
          />
        ))}
      </ACard>
    </View>
  )
}
