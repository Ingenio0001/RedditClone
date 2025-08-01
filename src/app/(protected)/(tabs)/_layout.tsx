import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useAuth, useClerk } from "@clerk/clerk-expo";

export default function TabLayout() {
    const { signOut } = useClerk()
    return (
        <Tabs screenOptions={{ 
            tabBarActiveTintColor: 'black', 
            headerRight:() => 
                <Feather 
                    name= 'log-out'
                    size= {22}
                    color='black'
                    style= {{ paddingRight: 10 }}
                    onPress={() => signOut()}
                />
            
        }} >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerTitle: 'Reddit',
                    headerTintColor: '#ff5700',
                    tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="communities"
                options={{
                    title: 'Communities',
                    tabBarIcon: ({ color }) => <Feather name="users" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    title: 'Create',
                    tabBarIcon: ({ color }) => <AntDesign name="plus" size={24} color={color} />,
                    headerShown: false,
                    tabBarStyle: { display: 'none' }
                }}
            />
            <Tabs.Screen
                name="chat"
                options={{
                    title: 'Chat',
                    tabBarIcon: ({ color }) => <Ionicons name="chatbubble-ellipses-outline" size={24} color={color} />
                }}
            />
            <Tabs.Screen
                name="inbox"
                options={{
                    title: 'Inbox',
                    tabBarIcon: ({ color }) => <Feather name="bell" size={24} color={color} />
                }}
            />
        </Tabs>
    )
}