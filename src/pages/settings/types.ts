import { AIconT } from "@shared/ui/a-icon"

export type SettingT = {
  id: string
  icon: AIconT
  title: string
  value?: string
  picker?: {
    items: { label: string | number; value: string | number }[]
    selectedValue: string | number | undefined
    onValueChange: Function
  }
}
