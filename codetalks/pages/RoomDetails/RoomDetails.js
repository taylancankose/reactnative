import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import RoomDetailCard from '../../components/Cards/RoomDetailCard/';
import styles from './RoomDetails.style';
import auth from '@react-native-firebase/auth';
import ChatRoomModal from '../../components/Modal/ChatRoomModal/ChatRoomModal';
import database from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';

function RoomDetails({route}) {
  const {item} = route?.params;
  const [roomData, setRoomData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const renderChat = ({item}) => <RoomDetailCard item={item} />;
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const sendContent = (content, id) => {
    const email = auth().currentUser.email;
    const contentObj = {
      message: content,
      name: email.split('@')[0],
      date: new Date().toISOString(),
    };
    database().ref(`/rooms/${item?.id}/messages`).push(contentObj);
  };
  console.log(roomData);
  const handleSendContent = content => {
    handleToggle();
    sendContent(content);
  };

  const getMessageData = () => {
    try {
      database()
        .ref(`/rooms/${item?.id}/messages`)
        .on('value', snapshot => {
          const contentData = snapshot.val();
          const parsedContentData = parseContentData(contentData || {});
          setRoomData(parsedContentData);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMessageData(item?.id);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList data={roomData} renderItem={renderChat} />
      <FloatingButton onPress={handleToggle} />
      <ChatRoomModal
        visible={toggle}
        onClose={handleToggle}
        onSend={handleSendContent}
        placeholder="Send Message"
        btn_title="Send Message"
      />
    </View>
  );
}

export default RoomDetails;
