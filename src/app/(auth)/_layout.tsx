import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={'/index'} />
  }

  return (
    <Stack>
      <Stack.Screen name = "signIn" options={{ title: 'Sign In' }} />
      <Stack.Screen name= 'signUp' options={{ title: 'Sign Up' }} />
    </Stack>
  )
}