import { Button, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function AddMeal({ visible, onClose }) {

    return (
        <Modal visible={visible} onRequestClose={onClose} transparent>
            <View style={{ flex: 1 }}>
                <View style={styles.overlay}>
                    <View style={styles.modal}>
                        <Text style={styles.title}>Add Meal</Text>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Food Name</Text>
                            <TextInput
                                placeholder="e.g. Pizza slice"
                                style={styles.input}
                                placeholderTextColor="#999"
                            />
                        </View>

                        <View style={styles.inputGroup}>
                            <Text style={styles.label}>Calories</Text>
                            <TextInput
                                keyboardType="number-pad"
                                style={styles.input}
                                placeholder="0"
                                placeholderTextColor="#999"
                            />
                        </View>

                        <View style={styles.buttonRow}>
                            <TouchableOpacity style={[styles.button, styles.secondary]} onPress={onClose}>
                                <Text style={styles.secondaryText}>Back</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.button, styles.primary]}>
                                <Text style={styles.primaryText}>Add</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        </Modal>

    )
}
const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    modal: {
        width: 320,
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 20,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 8,
    },

    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 16,
        textAlign: 'center',
    },

    inputGroup: {
        marginBottom: 12,
    },

    label: {
        fontSize: 14,
        color: '#555',
        marginBottom: 4,
    },

    input: {
        height: 44,
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        backgroundColor: '#FAFAFA',
    },

    buttonRow: {
        flexDirection: 'row',
        marginTop: 20,
    },

    button: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },

    primary: {
        backgroundColor: '#000',
        marginLeft: 8,
    },

    secondary: {
        backgroundColor: '#E5E5E5',
        marginRight: 8,
    },

    primaryText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
    },

    secondaryText: {
        color: '#333',
        fontSize: 16,
        fontWeight: '500',
    },
})
