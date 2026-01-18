import { StyleSheet } from 'react-native';
export const colors = {
    white: '#fff',
    background: '#F9FAFB',
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

    scrollContent: {
        alignItems: 'center',
        paddingVertical: 16,
        gap: 16,
    },

    endSection: {
        width: '100%',
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: '#edf2f7',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 20,

    },
    section: {
        boxShadow: [{ offsetX: 2, offsetY: 3, blurRadius: 4, color: 'rgba(200, 200, 200, 0.53)' }],
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: '#edf2f7',
        borderRadius: 15,
        width: '90%',
        padding: 10,

    },
    mealSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    heading: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: '600'
    },
    addButton: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#ffffffff',
        borderRadius: 8,
    },
    addText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    appBar: {
        width: '100%',
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: '#edf2f7',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
});
