import { Stack } from "expo-router"
import "../../global.css"
import ThemeProvider from "./providers/theme-provider"

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }} >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ThemeProvider>
  )
}
