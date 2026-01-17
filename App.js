import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';

import AddMeal from './components/adMeal/AddMeal';
import MealSection from './components/MealSection';
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [showAddMeal, setShowAddMeal] = useState(false)

  const addMealPressHandler = () => {
    setShowAddMeal(true);
  };
  return (

    <SafeAreaProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={[styles.section, styles.header]}>
          <Text style={styles.heading}>Calorie Tracker </Text>
        </View>

        {/* Overview */}
        <View style={[styles.section, styles.header]}>
          <Text>Calorie Overview </Text>
        </View>

        {/* MealSection */}
        <MealSection onAddMeal={addMealPressHandler} />
        {/* {showAddMeal && <AddMeal onClose={() => setShowAddMeal(false)} />} */}
        <AddMeal visible={showAddMeal} onClose={() => setShowAddMeal(false)} />

        {/* AppBar */}
        <View style={[styles.endSection, styles.header]}>
          <Text >App Bar </Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


