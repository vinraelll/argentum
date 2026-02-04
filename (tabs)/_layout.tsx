import { darkColors, lightColors } from "@shared/lib/theme"
import { AIcon } from "@shared/ui/a-icon"
import { Tabs } from "expo-router"
import { useColorScheme } from "nativewind"

export default function TabLayout() {
  // const { colorScheme } = useColorScheme()
  // const colors = colorScheme === "dark" ? darkColors : lightColors

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: `rgb(${colors["--color-primary"]})`,
        // tabBarStyle: {
        //   backgroundColor: `rgb(${colors["--color-bg"]})`,
        //   borderTopColor: `rgb(${colors["--color-border"]})`,
        // },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <AIcon name="home" size={24} className="text-text-primary" />,
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          title: "Transactions",
          tabBarIcon: () => <AIcon name="cash" size={24} className="text-text-primary" />,
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          tabBarIcon: () => <AIcon name="cart" size={24} className="text-text-primary" />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: () => <AIcon name="settings" size={24} className="text-text-primary" />,
        }}
      />
    </Tabs>
  )
}
