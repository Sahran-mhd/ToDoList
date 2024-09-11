import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialIcons';



export default function App() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Math.random().toString(), value: task }]);
      setTask('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <StatusBar style="auto" />
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          placeholderTextColor="black"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add" onPress={addTask} />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.value}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Icon name="delete" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'gray',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'darkgray',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 5,  
    marginTop: 10,  
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  input: {
    flex: 1,
    borderColor: '#cccccc',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'lightgray',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 30,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
  },
});

 