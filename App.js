import {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState('Lukas')
  const [person, setPerson] = useState({name: 'naruto', age: 17})

  const clickHandler = () => {
    setName('Itachi')
    setPerson({ name: 'Itachi', age: 19 })
  }

  return (
    <View style={styles.container}>

        <Text>Hello, my name is {name}</Text>
        <Text>My ninja hero is {person.name} and he is {person.age} old!!!!!</Text>


      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  }
});
