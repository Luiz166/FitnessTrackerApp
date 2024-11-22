
import { DarkTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from 'expo-navigation-bar'
import { useEffect } from "react";
import { AppState } from "react-native";

export default function RootLayout() {
  useEffect(() => {
    const handleAppStateChange = async (nextAppState: string) => {
      if(nextAppState === "active"){
        await NavigationBar.setVisibilityAsync("hidden")
      }
    }
    const subscription = AppState.addEventListener("change", handleAppStateChange)

    NavigationBar.setVisibilityAsync("hidden")

    return() => {
      subscription.remove();
    };
  }, [])
  return(
    <ThemeProvider value={DarkTheme}>
      <Stack
        screenOptions={{
          headerShown: false
        }}
        >
      </Stack>
      <StatusBar style="auto"/>
    </ThemeProvider>
  )
}
