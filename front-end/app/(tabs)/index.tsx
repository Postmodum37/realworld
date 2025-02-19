import React from 'react'
import View from 'react-native-ui-lib/view'
import { StyleSheet } from 'react-native'
import PostsList from '@/components/PostsList'

import testData from '@/constants/Posts'

export default function Index() {
  return (
    <View style={styles.container}>
      <PostsList posts={testData.posts} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})
