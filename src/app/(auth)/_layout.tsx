import { darkColors, lightColors } from "@shared/lib/theme"
import { Stack } from "expo-router"
import { useColorScheme } from "nativewind"

export default function AuthLayout() {
  const { colorScheme } = useColorScheme()
  const colors = colorScheme === "dark" ? darkColors : lightColors

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: `rgb(${colors["--color-bg"]})`,
        },
      }}
    >
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
    </Stack>
  )
}
