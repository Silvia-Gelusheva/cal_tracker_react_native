import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';

import AddMeal from './components/adMeal/AddMeal';
import Breakfast from './components/Meals/Breakfast';
import CalorieRemaining from './components/ProgressBars/CalorieRemaining';
import Dinner from './components/Meals/Dinner';
import Lunch from './components/Meals/Lunch';
import MacroNutrients from './components/ProgressBars/MacroNutrients';
import Snack from './components/Meals/Snack';
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
          <Text style={styles.heading}>CalTrack </Text>
        </View>

        {/* Calorie Remaining Progress Bar */}
        <CalorieRemaining />

        {/* Macro Nutrients Circle Progress Bars*/}
        <MacroNutrients />


        {/* Meals Section */}
        <Breakfast onAddMeal={addMealPressHandler} />
        <Lunch onAddMeal={addMealPressHandler} />
        <Dinner onAddMeal={addMealPressHandler} />
        <Snack onAddMeal={addMealPressHandler} />

        {/* Add Meal */}
        <AddMeal visible={showAddMeal} onClose={() => setShowAddMeal(false)} />
        {/* {showAddMeal && <AddMeal onClose={() => setShowAddMeal(false)} />} */}

        {/* AppBar */}
        <View style={[styles.endSection, styles.header]}>
          <Text >App Bar </Text>
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


