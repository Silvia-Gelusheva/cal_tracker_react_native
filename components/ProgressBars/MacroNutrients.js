import { StyleSheet, Text, View } from 'react-native'

import CircularProgress from 'react-native-circular-progress-indicator'
import React from 'react'

export default function MacroNutrients() {
    return (
        <View style={styles.section}>
            <Text style={styles.title}>Macronutrients</Text>

            <View style={styles.circleRow}>

                <View style={styles.circleItem}>
                    <CircularProgress
                        radius={40}
                        value={50}
                        fontSize={16}
                        activeStrokeColor="#4e74efff"
                        inActiveStrokeColor="#8b7d7dff"
                        inActiveStrokeOpacity={0.2}
                        activeStrokeWidth={6}
                        inActiveStrokeWidth={6}
                    />
                    <Text style={styles.label}>Protein</Text>
                </View>

                <View style={styles.circleItem}>
                    <CircularProgress
                        radius={40}
                        value={20}
                        fontSize={16}
                        activeStrokeColor="#5edc0bff"
                        inActiveStrokeColor="#8b7d7dff"
                        inActiveStrokeOpacity={0.2}
                        activeStrokeWidth={6}
                        inActiveStrokeWidth={6}
                    />
                    <Text style={styles.label}>Carbs</Text>
                </View>

                <View style={styles.circleItem}>
                    <CircularProgress
                        radius={40}
                        value={40}
                        fontSize={16}
                        activeStrokeColor="#e78f14ff"
                        inActiveStrokeColor="#8b7d7dff"
                        inActiveStrokeOpacity={0.2}
                        activeStrokeWidth={6}
                        inActiveStrokeWidth={6}
                    />
                    <Text style={styles.label}>Fats</Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    section: {
        backgroundColor: '#ffffffff',
        borderWidth: 1,
        borderColor: '#edf2f7',
        borderRadius: 15,
        width: '90%',
        paddingVertical: 16,
        paddingHorizontal: 12,
        alignSelf: 'center',
    },

    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 12,
        color: '#1f2937',
    },

    circleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12,
    },
    circleItem: {
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 6,
    },
    label: {
        marginTop: 8,
        fontSize: 12,
        color: '#6b7280',
    },
})