import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet"
import { darkColors, lightColors } from "@shared/lib/theme"
import { ACard } from "@shared/ui/a-card"
import { AIcon } from "@shared/ui/a-icon"
import { AScreen } from "@shared/ui/a-screen"
import { useColorScheme } from "nativewind"
import React, { useMemo, useRef } from "react"
import { Button, Pressable, Text, View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { SettingsMain, SettingsSupport } from "./"

export default function SettingsPage() {
  const { colorScheme } = useColorScheme()
  const colors = colorScheme === "dark" ? darkColors : lightColors

  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ["100%"], [])

  const handleOpenPress = () => bottomSheetRef.current?.expand()
  const handleClosePress = () => bottomSheetRef.current?.close()

  return (
    <>
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

        <Pressable onPress={handleOpenPress}>
          <ACard className="mt-6 flex-row items-center gap-2 justify-center p-3">
            <AIcon name="log-out-outline" size={20} className="color-danger" />
            <Text className="color-danger">Logout</Text>
          </ACard>
        </Pressable>
      </AScreen>

      <GestureHandlerRootView>
        <BottomSheet
          ref={bottomSheetRef}
          index={-1} // -1 значит изначально закрыт
          snapPoints={snapPoints}
          enablePanDownToClose
          backgroundStyle={{
            backgroundColor: `rgb(${colors["--color-bg"]})`,
          }}
          handleIndicatorStyle={{ backgroundColor: `rgb(${colors["--color-border"]})` }}
        >
          <BottomSheetView className="p-4 items-center">
            <Text className="text-lg font-bold text-text-primary">Привет! 👋</Text>
            <Text className="text-text-secondary mt-2">Я Bottom Sheet</Text>
            <Button title="Закрыть" onPress={handleClosePress} />
          </BottomSheetView>
        </BottomSheet>
      </GestureHandlerRootView>
    </>
  )
}
