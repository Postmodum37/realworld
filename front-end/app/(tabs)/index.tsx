import View from 'react-native-ui-lib/view'
import Text from 'react-native-ui-lib/text'
import { StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'

import testData from '@/constants/Posts'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={testData.posts}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.postContainer}>
            <View style={styles.authorContainer}>
              <Image
                source={{ uri: item.author.avatar }}
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
                <Ionicons name='heart' size={24} color='#666' />
              </TouchableOpacity>
            </View>

            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  postContainer: {
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
