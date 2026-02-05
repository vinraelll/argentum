import { SafeAreaView } from "react-native-safe-area-context"

export default function ScreenContainer({ children }: { children: React.ReactNode }) {
  return <SafeAreaView className="p-4">{children}</SafeAreaView>
}
