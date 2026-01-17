import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from '../styles';

export default function MealSection({ onAddMeal }) {
    return (
        <View style={[styles.section]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                <Text >Meals </Text>
                <TouchableOpacity
                    onPress={onAddMeal}
                    activeOpacity={0.7}
                    style={styles.addButton}
                >
                    <Text style={styles.addText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
