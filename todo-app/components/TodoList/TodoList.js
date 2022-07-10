import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './TodoList.styles';

const TodoList = ({todo, onComplete, onRemove}) => {
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => onComplete(item.id)}
      onLongPress={() => onRemove(item.id)}>
      <Text style={item.isDone ? styles.done : styles.list_item}>
        {item.task}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList data={todo} renderItem={renderItem} />
    </View>
  );
};

export default TodoList;
