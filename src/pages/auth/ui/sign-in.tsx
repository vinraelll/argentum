import { useAuth } from "@entities/session"
import { AIcon } from "@shared/ui/a-icon"
import { AScreen } from "@shared/ui/a-screen"
import { Link } from "expo-router"
import { Pressable, Text, TextInput, View } from "react-native"

export default function SignInPage() {
  const { signIn } = useAuth()

  return (
    <AScreen>
      <View className="justify-center flex-1">
        <View className="items-center justify-center">
          <View className="border rounded-lg p-4 mb-2 border-text-primary">
            <AIcon name="wallet" className="text-text-primary" />
          </View>
          <Text className="text-xl text-text-primary mb-2">Welcome Back</Text>
          <Text className="text-text-secondary">Sign-in to continue</Text>
        </View>

        <View>
          <Text className="text-text-secondary text-sx mb-2">Email</Text>
          <TextInput className="border border-border rounded-sm p-3 text-text-primary mb-4" />

          <Text className="text-text-secondary text-sx mb-2">Password</Text>
          <TextInput className="border border-border rounded-sm p-3 text-text-primary" />
        </View>

        <View className="my-4">
          <Pressable className="ms-auto">
            <Text className="text-text-primary text-sx">Forgot password?</Text>
          </Pressable>
        </View>

        <Pressable
          className="border border-border p-3 rounded-md items-center"
          onPress={() => signIn("fake-access-token")}
        >
          <Text className="text-text-primary text-sx">Sign in</Text>
        </Pressable>

        <View className="items-center mt-4">
          <Text className="text-text-primary text-sx">
            Don`t have an account?
            <Link href={"/(auth)/sign-up"}> Sign up</Link>
          </Text>
        </View>
      </View>
    </AScreen>
  )
}
