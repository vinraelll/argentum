import { Slot } from "expo-router"
import "../../global.css"
import { ThemeProvider } from "./providers/theme-provider"

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  )
}
