import { View } from "react-native"

type Props = {
  className?: string
}

export default function ADivider({ className }: Props) {
  return <View className={`h-[1px] w-full bg-border my-1 ${className}`} />
}
