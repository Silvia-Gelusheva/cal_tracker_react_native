import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, Text, View } from 'react-native'

import AddMeal from './components/adMeal/AddMeal'
import Breakfast from './components/Meals/Breakfast'
import CalorieRemaining from './components/ProgressBars/CalorieRemaining'
import Dinner from './components/Meals/Dinner'
import Lunch from './components/Meals/Lunch'
import MacroNutrients from './components/ProgressBars/MacroNutrients'
import Snack from './components/Meals/Snack'
import { StatusBar } from 'expo-status-bar'
import { styles } from './styles'
import { useState } from 'react'

export default function App() {
  const [showAddMeal, setShowAddMeal] = useState(false)

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>

        {/* Header */}
        <View style={styles.appBar}>
          <Text style={styles.heading}>CalTrack</Text>
        </View>

        {/* Scrollable Content */}
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <CalorieRemaining />
          <MacroNutrients />

          <Breakfast onAddMeal={() => setShowAddMeal(true)} />
          <Lunch onAddMeal={() => setShowAddMeal(true)} />
          <Dinner onAddMeal={() => setShowAddMeal(true)} />
          <Snack onAddMeal={() => setShowAddMeal(true)} />
        </ScrollView>

        {/* App Bar */}
        <View style={styles.appBar}>
          <Text>App Bar</Text>
        </View>

        <AddMeal visible={showAddMeal} onClose={() => setShowAddMeal(false)} />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
