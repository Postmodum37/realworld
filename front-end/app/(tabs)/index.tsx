import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'

import ArticlesList from '@/components/ArticlesList'
import articles from '@/constants/Articles'
import { useRouter } from 'expo-router'

export default function Index() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <ArticlesList articles={articles} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.registerButton]}
        onPress={() => router.push('/register')}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#1a73e8',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    minWidth: 120,
    alignItems: 'center',
  },
  registerButton: {
    backgroundColor: '#34a853',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})
