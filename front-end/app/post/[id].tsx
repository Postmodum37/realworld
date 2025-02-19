// app/blog/[id].tsx
import { useLocalSearchParams, Stack } from 'expo-router'
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import testData from '@/constants/Posts'

export default function PostScreen() {
  const { id } = useLocalSearchParams()
  // You'll need to fetch the post data using the id
  // For now, let's assume you have access to the posts data
  const post = testData.posts.find((p) => p.id === id)

  if (!post) return <Text>Post not found</Text>

  return (
    <>
      <Stack.Screen
        options={{
          title: post.title,
          headerStyle: {
            backgroundColor: '#2E7FB8',
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.authorContainer}>
          <Image source={{ uri: post.author.avatar }} style={styles.avatar} />
          <View style={styles.authorInfo}>
            <Text style={styles.authorName}>{post.author.username}</Text>
            <Text style={styles.date}>{post.createdAt}</Text>
          </View>
          <TouchableOpacity style={styles.likeButton}>
            <Ionicons
              name={post.liked ? 'heart' : 'heart-outline'}
              size={24}
              color={post.liked ? '#FF2D55' : '#666'}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.description}>{post.description}</Text>
        <Text style={styles.fullContent}>
          {post.fullContent || 'Full article content goes here...'}
        </Text>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  authorInfo: {
    flex: 1,
    marginLeft: 12,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  likeButton: {
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    marginBottom: 20,
  },
  fullContent: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
})
