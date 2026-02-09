import { SafeAreaView } from "react-native-safe-area-context"

export default function ScreenContainer({ children }: { children: React.ReactNode }) {
  return <SafeAreaView className="p-4 flex-1">{children}</SafeAreaView>
}
