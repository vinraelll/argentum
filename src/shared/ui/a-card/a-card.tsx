import { View } from "react-native";

export default function ACard({ children, className }: { children: React.ReactNode; className?: string }) {
  const baseClass = "rounded-lg p-4 shadow-sm border border-border"

  return <View className={`${baseClass} ${className || ""}`}>{children}</View>
}
