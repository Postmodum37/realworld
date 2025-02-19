import React from 'react'
import View from 'react-native-ui-lib/view'
import { StyleSheet } from 'react-native'

import ArticlesList from '@/components/ArticlesList'
import articles from '@/constants/Articles'

export default function Index() {
  return (
    <View style={styles.container}>
      <ArticlesList articles={articles} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})
