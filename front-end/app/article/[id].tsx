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

import articles, { PLACEHOLDER_AVATAR } from '@/constants/Articles'

export default function ArticleScreen() {
  const { id } = useLocalSearchParams()
  const article = articles.find((a) => a.id === id)

  if (!article) return <Text>Article not found</Text>

  return (
    <>
      <Stack.Screen
        options={{
          title: article.title,
          headerStyle: {
            backgroundColor: '#2E7FB8',
          },
          headerTintColor: '#fff',
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.authorContainer}>
          <Image
            source={{ uri: article.author.image || PLACEHOLDER_AVATAR }}
            style={styles.avatar}
          />
          <View style={styles.authorInfo}>
            <Text style={styles.authorName}>{article.author.username}</Text>
            <Text style={styles.date}>{article.createdAt}</Text>
          </View>
          <TouchableOpacity style={styles.likeButton}>
            <Ionicons
              name={article.favorited ? 'heart' : 'heart-outline'}
              size={24}
              color={article.favorited ? '#FF2D55' : '#666'}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description}>{article.description}</Text>
        <Text style={styles.fullContent}>
          {article.body || 'Full article content goes here...'}
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
