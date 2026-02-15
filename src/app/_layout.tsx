import { AuthProvider, useAuth } from "@entities/session"
import { Slot, useRouter, useSegments } from "expo-router"
import { useEffect } from "react"
import "react-native-gesture-handler"
import "../../global.css"
import ThemeProvider from "./providers/theme-provider"

function RootLayoutNav() {
  const { session, isLoading } = useAuth()
  const segments = useSegments()
  const router = useRouter()

  useEffect(() => {
    if (isLoading) return

    const inAppGroup = segments[0] === "(app)"

    if (!session && inAppGroup) router.replace("/(auth)/sign-in")
    else if (session && !inAppGroup) router.replace("/(app)")
  }, [session, segments, isLoading, router])

  if (isLoading) return null

  return <Slot />
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <RootLayoutNav />
      </ThemeProvider>
    </AuthProvider>
  )
}
