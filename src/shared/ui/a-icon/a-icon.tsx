import { Ionicons } from "@expo/vector-icons"
import { cssInterop } from "nativewind"
import { AIconT } from "./types"

type Props = {
  className?: string
  size?: number
  name?: AIconT
}

cssInterop(Ionicons, {
  className: {
    nativeStyleToProp: { color: true },
    target: "style",
  },
})

export default function AIcon({ size = 24, name, className }: Props) {
  return <Ionicons name={name} size={size} className={className} />
}
