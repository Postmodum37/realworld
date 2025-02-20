import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{ headerShown: false, title: 'Home' }}
        />
        <Stack.Screen name='post/[id]' options={{ headerShown: true }} />
        <Stack.Screen name='+not-found' />
      </Stack>
      <StatusBar style='light' />
    </>
  )
}
