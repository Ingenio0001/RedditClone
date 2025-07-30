import { Redirect, router, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'
import { View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Entypo from '@expo/vector-icons/Entypo'
import { Router } from 'expo-router'


export default function AppLayout() {
  const { isSignedIn } = useAuth()

  if (!isSignedIn) {
    return <Redirect href={'/signIn'} />
  }

  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen
        name='post/[id]'
        options={{
          headerTitle: '',
          headerStyle: { backgroundColor: '#ff5700' },
          headerLeft: () => <AntDesign
            name='close'
            size={24}
            color='white'
            onPress={() => router.back()}
          />,
          headerRight: () =>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <AntDesign name='search1' size={24} color='white' />
              <MaterialIcons name='sort' size={27} color='white' />
              <Entypo name='dots-three-horizontal' size={24} color='white' />
            </View>,
          animation: 'slide_from_bottom'
        }}
      />
    </Stack>
  )
}