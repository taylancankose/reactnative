import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../../Button';
import styles from './ChatRoomModal.style';

function ChatRoomModal({visible, onClose, onSend, placeholder, btn_title}) {
  const [room, setRoom] = useState(null);

  const handleSend = () => {
    if (!room) {
      return;
    }

    onSend(room);
    setRoom('');
  };
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder={placeholder}
            onChangeText={setRoom}
            multiline
          />
        </View>
        <Button theme="fourth" text={btn_title} onPress={handleSend} />
      </View>
    </Modal>
  );
}

export default ChatRoomModal;
