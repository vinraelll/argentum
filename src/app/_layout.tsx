import { Stack } from "expo-router"
import "react-native-gesture-handler"
import "../../global.css"
import ThemeProvider from "./providers/theme-provider"

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </ThemeProvider>
  )
}
