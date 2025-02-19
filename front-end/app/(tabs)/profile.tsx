import View from 'react-native-ui-lib/view'
import Text from 'react-native-ui-lib/text'
import { StyleSheet } from 'react-native'

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Edit app/(tabs)/profile.tsx to edit this screen.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
