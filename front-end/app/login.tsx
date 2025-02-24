import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    console.log('Login pressed with:', email, password)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Log In</Text>

        <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <TextInput
          style={styles.input}
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.orText}>or</Text>
          <TouchableOpacity>
            <Text style={styles.signupText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    padding: 20,
    marginTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a73e8',
    marginBottom: 30,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
    fontSize: 16,
    paddingVertical: 10,
  },
  loginButton: {
    backgroundColor: '#1a73e8',
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signupContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  orText: {
    color: '#666',
    marginVertical: 10,
  },
  signupText: {
    color: '#1a73e8',
    fontSize: 16,
    fontWeight: '600',
  },
})
