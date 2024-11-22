import { Tabs } from "expo-router";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'

export default function MainLayout(){
    return(
        <Tabs
            screenOptions={{
                tabBarActiveBackgroundColor: "#B3A0FF",
                tabBarInactiveBackgroundColor: "#B3A0FF",
                tabBarShowLabel: false,
                headerShown: false
            }}
        >
            <Tabs.Screen name="home" options={{
                title: 'Home',
                tabBarIcon: () => <FontAwesome6 size={28} name="house-chimney" color="white" /> 
            }}
            />
        </Tabs>
    )
}