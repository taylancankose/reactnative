import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AddArea from './components/AddArea';
import TodoList from './components/TodoList';

function App() {
  const [addTodo, setAddTodo] = useState('');
  const [todo, setTodo] = useState([
    {
      id: Date.now(),
      task: 'Learn React Native',
      isDone: false,
    },
    {
      id: Date.now() + 5,
      task: 'Learn React',
      isDone: true,
    },
  ]);
  const onChange = text => {
    setAddTodo(text);
  };

  const onPress = () => {
    setAddTodo('');
    setTodo(prev => [...prev, {task: addTodo, isDone: false, id: Date.now()}]);
  };
  const onComplete = id => {
    const completedTodos = todo.map(item => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setTodo(completedTodos);
  };
  const onRemove = id => {
    const removedTodos = todo.filter(item => item.id !== id);
    setTodo(removedTodos);
  };
  const inCompletedTodos = todo.filter(item => !item.isDone);
  console.log(todo);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.todos}>
          <Text style={styles.header}>Yapılacaklar </Text>
          <Text style={styles.todo_num}> {inCompletedTodos.length}</Text>
        </View>
        <TodoList todo={todo} onComplete={onComplete} onRemove={onRemove} />
      </View>

      <View style={styles.bottom_container}>
        <AddArea onChange={onChange} onPress={onPress} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    padding: 5,
  },
  todos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  todo_num: {
    fontSize: 40,
    fontWeight: '400',
    color: '#FFA500',
  },
});

export default App;
