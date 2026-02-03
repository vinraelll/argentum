import { darkColors, lightColors } from "@shared/lib/theme"
import { useColorScheme, vars } from "nativewind"
import { View } from "react-native"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { colorScheme } = useColorScheme()
  const colors = colorScheme === "dark" ? darkColors : lightColors

  return (
    <View style={vars(colors)} className="flex-1 bg-background">
      {children}
    </View>
  )
}
