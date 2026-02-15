import * as SecureStore from "expo-secure-store"
import React, { createContext, useContext, useEffect, useState } from "react"

interface AuthContextType {
  session: string | null
  isLoading: boolean
  signIn: (token: string) => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Проверка токена при холодном старте
    async function loadStorageData() {
      try {
        const token = await SecureStore.getItemAsync("userToken")

        if (token) {
          setSession(token)
        }
      } catch (e) {
        console.error("Failed to load token", e)
      } finally {
        setIsLoading(false)
      }
    }

    loadStorageData()
  }, [])

  const signIn = async (token: string) => {
    await SecureStore.setItemAsync("userToken", token)
    setSession(token)
  }

  const signOut = async () => {
    await SecureStore.deleteItemAsync("userToken")
    setSession(null)
  }

  return (
    <AuthContext.Provider value={{ session, isLoading, signIn, signOut }}>{children}</AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within AuthProvider")

  return context
}

export { AuthProvider, useAuth }
