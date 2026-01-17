import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        {/* Header */}
        <Text>Calorie Tracker </Text>
      </View>
      <View>
        {/* Overview */}
        <Text>Calorie Overview </Text>
      </View>
      <View>
        {/* MealSection */}
        <Text>List of Meals </Text>
      </View>
      <View>
        {/* AppBar */}
        <Text>App Bar </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
