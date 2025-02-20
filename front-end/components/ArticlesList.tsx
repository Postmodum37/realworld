import React from 'react'
import {
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native'
import Text from 'react-native-ui-lib/text'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Link } from 'expo-router'
import { Article } from '@/types'
import { PLACEHOLDER_AVATAR } from '@/constants/Articles'
import { Colors } from '@/constants/Colors'

export default function ArticlesList({ articles }: { articles: Article[] }) {
  const colorScheme = useColorScheme()

  const renderArticle = ({ item }: { item: Article }) => (
    <Link href={`/article/${item.id}`} asChild>
      <TouchableOpacity style={styles.articleContainer}>
        <View style={styles.authorContainer}>
          <Image
            source={{ uri: item.author.image || PLACEHOLDER_AVATAR }}
            style={styles.avatar}
          />
          <View style={styles.authorInfo}>
            <Text style={styles.authorName}>{item.author.username}</Text>
            <Text style={styles.date}>
              {new Date(item.createdAt).toLocaleString([], {
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
              name={item.favorited ? 'heart' : 'heart-outline'}
              size={24}
              color={Colors[colorScheme || 'light'].tint}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </TouchableOpacity>
    </Link>
  )

  return (
    <FlatList
      data={articles}
      renderItem={renderArticle}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  )
}

const styles = StyleSheet.create({
  articleContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
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
    fontWeight: '600',
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
  },
  likeButton: {
    padding: 8,
  },
})
