import { AIcon } from "@shared/ui/a-icon"
import { AScreen } from "@shared/ui/a-screen"
import { Link } from "expo-router"
import { Pressable, Text, TextInput, View } from "react-native"

export default function SignUpPage() {
  return (
    <AScreen>
      <View className="justify-center flex-1">
        <View className="items-center justify-center">
          <View className="border rounded-lg p-4 mb-2 border-text-primary">
            <AIcon name="wallet" className="text-text-primary" />
          </View>
          <Text className="text-xl text-text-primary mb-2">Create Account</Text>
          <Text className="text-text-secondary">Start tracking your finances</Text>
        </View>

        <View className="mb-8">
          <Text className="text-text-secondary text-sx mb-2">Full Name</Text>
          <TextInput className="border border-border rounded-sm p-3 text-text-primary mb-4" />

          <Text className="text-text-secondary text-sx mb-2">Email</Text>
          <TextInput className="border border-border rounded-sm p-3 text-text-primary mb-4" />

          <Text className="text-text-secondary text-sx mb-2">Password</Text>
          <TextInput className="border border-border rounded-sm p-3 text-text-primary" />
        </View>

        <Pressable className="border border-border p-3 rounded-md items-center">
          <Text className="text-text-primary text-sx">Create account</Text>
        </Pressable>

        <View className="items-center mt-4">
          <Text className="text-text-primary text-sx">
            Already have an account?
            <Link href={"/(auth)/sign-in"}> Sign in</Link>
          </Text>
        </View>
      </View>
    </AScreen>
  )
}
