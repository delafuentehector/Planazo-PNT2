import { Stack } from "expo-router"
//import { useAuth } from "../hook/useAuth"

export default function Navigation() {
    //const { auth } = useAuth()
    //const isLoggedIn = auth !== null
    const isLoggedIn = true;
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Protected guard={isLoggedIn}>
                <Stack.Screen name="(tabs)" />
                <Stack.Screen name="./sala" />
            </Stack.Protected>

            <Stack.Protected guard={!isLoggedIn}>
                <Stack.Screen name="login" />
            </Stack.Protected>
        </Stack>
    )
}