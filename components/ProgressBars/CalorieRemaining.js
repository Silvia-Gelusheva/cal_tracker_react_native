import * as Progress from 'react-native-progress'

import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

export default function CalorieRemaining() {
    return (
        <View style={styles.section}>

            {/* Calories Remaining */}
            <View style={styles.caloriesContainer}>
                <Text style={styles.caloriesValue}>1500</Text>
                <Text style={styles.caloriesLabel}>Calories Remaining</Text>
            </View>

            {/* Progress Bar */}
            <View style={styles.progressContainer}>
                <Progress.Bar
                    progress={0.7}
                    width={null}
                    height={8}
                    color="#4e74efff"
                    borderRadius={10}
                    unfilledColor="#e5e7eb"
                    borderWidth={0}
                />
            </View>

            {/* Stats Row */}
            <View style={styles.statsRow}>
                <View style={styles.statItem}>
                    <Text style={styles.statValue}>1500</Text>
                    <Text style={styles.statLabel}>Goal</Text>
                </View>

                <View style={styles.statItem}>
                    <Text style={styles.statValue}>800</Text>
                    <Text style={styles.statLabel}>Food</Text>
                </View>

                <View style={styles.statItem}>
                    <Text style={styles.statValue}>300</Text>
                    <Text style={styles.statLabel}>Exercise</Text>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    section: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#edf2f7',
        borderRadius: 15,
        width: '90%',
        paddingVertical: 20,
        paddingHorizontal: 16,
        alignSelf: 'center',
    },

    caloriesContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },

    caloriesValue: {
        fontSize: 40,
        fontWeight: '700',
        color: '#111827',
    },

    caloriesLabel: {
        fontSize: 14,
        color: '#6b7280',
        marginTop: 4,
    },

    progressContainer: {
        marginVertical: 12,
    },

    statsRow: {
        flexDirection: 'row',
        marginTop: 16,
    },

    statItem: {
        flex: 1,
        alignItems: 'center',
    },

    statValue: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
    },

    statLabel: {
        fontSize: 12,
        color: '#6b7280',
        marginTop: 2,
    },
})
