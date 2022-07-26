import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './Main.style';
import FloatingButton from '../../components/FloatingButton';
import ChatRoomModal from '../../components/Modal/ChatRoomModal/ChatRoomModal';
import database from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';
import RoomCard from '../../components/Cards/RoomCard';

function Main() {
  const [userData, setUserData] = useState();
  const [roomData, setRoomData] = useState([]);
  const [toggle, setToggle] = useState(false);

  const getUser = async () => {
    await auth().onAuthStateChanged(user => setUserData(user));
  };
  const getRooms = async () => {
    await database()
      .ref('rooms')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedRoomData = parseContentData(contentData || {});
        setRoomData(parsedRoomData);
      });
  };
  useEffect(() => {
    getUser();
    getRooms();
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleSendContent = content => {
    handleToggle();
    sendContent(content);
  };

  const sendContent = content => {
    const email = auth().currentUser.email;
    const contentObj = {
      room: content,
      username: email.split('@')[0],
      date: new Date().toISOString(),
    };
    database().ref('/rooms').push(contentObj);
  };

  const handleRemove = async id => {
    await database().ref(`rooms/${id}`).remove();
  };

  const renderRooms = ({item}) => {
    return (
      <View style={styles.card}>
        <RoomCard item={item} onLongPress={() => handleRemove(item.id)} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Hi, {userData?.email?.split('@')[0]}</Text>
      <FlatList style={styles.list} data={roomData} renderItem={renderRooms} />
      <FloatingButton style={styles.btn} onPress={handleToggle} />
      <ChatRoomModal
        visible={toggle}
        onClose={handleToggle}
        onSend={handleSendContent}
        placeholder="Create Room"
        btn_title="Create Room"
      />
    </SafeAreaView>
  );
}

export default Main;
