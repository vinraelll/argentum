import { Picker } from "@react-native-picker/picker"
import { ADivider } from "@shared/ui/a-divider"
import { AIcon } from "@shared/ui/a-icon"
import React from "react"
import { Pressable, Text, View } from "react-native"
import Animated, { useAnimatedStyle, withTiming } from "react-native-reanimated"

export default function SettingItem({
  setting,
  isExpanded,
  onPress,
  showDivider,
}: {
  setting: any
  isExpanded: boolean
  onPress: () => void
  showDivider: boolean
}) {
  const hasPicker = !!setting.picker

  const animatedStyle = useAnimatedStyle(() => ({
    height: withTiming(isExpanded ? 130 : 0),
    opacity: withTiming(isExpanded ? 1 : 0),
  }))

  const chevronAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scaleY: withTiming(isExpanded ? -1 : 1) }],
  }))

  return (
    <>
      <Pressable onPress={onPress}>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <View className="flex items-center justify-center p-2 border border-border rounded-sm">
              <AIcon name={setting.icon} size={20} className="text-text-primary" />
            </View>
            <Text className="text-text-primary">{setting.title}</Text>
          </View>
          <View className="flex-row items-center gap-2">
            <Text className="text-text-secondary">{setting.value}</Text>
            {hasPicker && (
              <Animated.View style={chevronAnimatedStyle}>
                <AIcon name="chevron-down" size={20} className="text-text-primary" />
              </Animated.View>
            )}
          </View>
        </View>
      </Pressable>

      {hasPicker && (
        <Animated.View style={[animatedStyle, { overflow: "hidden" }]}>
          <Picker
            selectedValue={setting.picker.selectedValue}
            onValueChange={(val) => setting.picker.onValueChange(val)}
            itemStyle={{ fontSize: 16, height: 130 }}
          >
            {setting.picker.items.map((item: any) => (
              <Picker.Item key={item.value} label={item.label} value={item.value} />
            ))}
          </Picker>
        </Animated.View>
      )}
      {showDivider && <ADivider className="my-2" />}
    </>
  )
}
