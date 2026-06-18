import { Tabs } from "expo-router"
import { MaterialIcons } from "@expo/vector-icons"

const COLORS = {
    surface: "#F8F9FF",
    active: "#8455ef",
    inactive: "#373737",
    outlineVariant: "#C6C6CD",
}

const getIcon = (routeName, color, size) => {
    if (routeName === "index") {
        return <MaterialIcons name="home" size={size} color={color} />
    }

    if (routeName === "planes") {
        return <MaterialIcons name="event-note" size={size} color={color} />
    }

    if (routeName === "perfil") {
        return <MaterialIcons name="person" size={size} color={color} />
    }

}

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: COLORS.active,
                tabBarInactiveTintColor: COLORS.inactive,
                tabBarStyle: {
                    height: 80,
                    paddingTop: 8,
                    paddingBottom: 10,
                    backgroundColor: COLORS.surface,
                    borderTopColor: COLORS.outlineVariant,
                    borderTopWidth: 1,
                    shadowColor: "#0F172A",
                    shadowOffset: { width: 0, height: -4 },
                    shadowOpacity: 0.08,
                    shadowRadius: 12,
                    elevation: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    lineHeight: 16,
                    fontWeight: "700",
                },
                tabBarIcon: ({ color, size }) => getIcon(route.name, color, size),
            })}
        >
            <Tabs.Screen name="index" options={{ title: "Home" }} />
            <Tabs.Screen name="planes" options={{ title: "Planes" }} />
            <Tabs.Screen name="perfil" options={{ title: "Perfil" }} />
        </Tabs>
    )
}