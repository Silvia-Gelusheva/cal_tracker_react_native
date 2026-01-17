import { Button, Modal, Text } from 'react-native'

export default function AddMeal({ visible, onClose }) {

    return (
        <Modal visible={visible} onRequestClose={onClose}>
            <Text>Modal</Text>
            <Button></Button>
        </Modal>
    )
}
