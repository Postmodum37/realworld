import { useLocalSearchParams, Stack, useRouter } from 'expo-router'
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import articles, { PLACEHOLDER_AVATAR } from '@/constants/Articles'
import { Colors, lightBlue } from '@/constants/Colors'

export default function ArticleScreen() {
  const { id } = useLocalSearchParams()
  const colorScheme = useColorScheme()
  const article = articles.find((a) => a.id === id)

  if (!article) return <Text>Article not found</Text>

  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: Colors[colorScheme || 'light'].tint,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 16,
          },
        }}
      />

      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{article.title}</Text>
          <View style={styles.authorRow}>
            <Image
              source={{ uri: article.author.image || PLACEHOLDER_AVATAR }}
              style={styles.avatar}
            />
            <View style={styles.authorInfo}>
              <Text style={styles.authorName}>{article.author.username}</Text>
              <Text style={styles.date}>
                {new Date(article.createdAt).toLocaleString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                })}
              </Text>
            </View>
            <TouchableOpacity style={styles.likeButton}>
              <Ionicons
                name={article.favorited ? 'heart' : 'heart-outline'}
                size={24}
                color={Colors[colorScheme || 'light'].tint}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.description}>{article.body}</Text>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    padding: 16,
    backgroundColor: lightBlue,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  authorInfo: {
    flex: 1,
    marginLeft: 12,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '500',
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  likeButton: {
    padding: 8,
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    padding: 16,
  },
})
