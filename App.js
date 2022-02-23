import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {

  const [name, setName] = useState('Lukas')
  const [age, setAge] = useState('30')
  // const [person, setPerson] = useState({ name: 'naruto', age: 17 })

  // const clickHandler = () => {
  //   setName('Itachi')
  //   setPerson({ name: 'Itachi', age: 19 })
  // }

  return (
    <View style={styles.container}>

      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. Steve Harvey'
        onChangeText={(val) => setName(val)}
      />

      <Text>Enter age:</Text>
      <TextInput
        style={styles.input}
        placeholder='e.g. 22'
        onChangeText={(val) => setAge(val)}
      />
      <Text>Hello, my name is {name}, age: {age}</Text>

      {/* <Text>My ninja hero is {person.name} and he is {person.age} old!!!!!</Text> */}


      {/* <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // buttonContainer: {
  //   marginTop: 20,
  // },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
