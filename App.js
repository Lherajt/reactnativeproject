import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/header'


export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  return (
    <View style={styles.container}>
    <Header/>
    {/* header */}
      <View style={styles.container}>
      {/* to form */}
        <View style={styles.container}>
          <FlatList
            data={todos}
            renderItem={({item}) => (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>
    </View>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    content: {
      padding: 40,
    },
    list: {
      marginTop: 20,
    },
  });




















  // const [name, setName] = useState('Lukas')
  // const [age, setAge] = useState('30')
  // const [people, setPeople] = useState([
  //   { name: 'shaun', id: '1' },
  //   { name: 'yoshi', id: '2' },
  //   { name: 'mario', id: '3' },
  //   { name: 'luigi', id: '4' },
  //   { name: 'peach', id: '5' },
  //   { name: 'toad', id: '6' },
  //   { name: 'bowser', id: '7' },
  // ]);

  // const pressHandler = (id) => {
  //   console.log(id);
  //   setPeople((prevPeople) => {
  //     return prevPeople.filter(person => person.id !== id)
  //   })
  // }
  // const [person, setPerson] = useState({ name: 'naruto', age: 17 })

  // const clickHandler = () => {
  //   setName('Itachi')
  //   setPerson({ name: 'Itachi', age: 19 })
  // }

  // return (
  //   <View style={styles.container}>


      {/* FlatList better for performance than ScrollView, Automaticaly finds key */}
      {/* <FlatList
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>

            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      /> */}



      {/* <ScrollView>
        {people.map(item => (
          <View key={item.id}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )

        )}
      </ScrollView> */}


      {/* <Text>Enter name:</Text>
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
      <Text>Hello, my name is {name}, age: {age}</Text> */}



      {/* <Text>My ninja hero is {person.name} and he is {person.age} old!!!!!</Text> */}




      {/* <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />
      </View> */}



//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   // buttonContainer: {
//   //   marginTop: 20,
//   // },
//   // input: {
//   //   borderWidth: 1,
//   //   borderColor: '#777',
//   //   padding: 8,
//   //   margin: 10,
//   //   width: 200,
//   // }
//   item: {
//     // flex: 1,
//     // marginHorizontal: 10,
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: 'pink',
//     fontSize: 24,
//   },
// });
