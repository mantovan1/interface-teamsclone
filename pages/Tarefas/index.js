import React from 'react';
import { StyleSheet, Text, View , FlatList, TouchableOpacity } from 'react-native';

import { AntDesign , FontAwesome } from '@expo/vector-icons';

import Barra from '../../components/Barra/index.js'

export default function App({navigation}) {
  const data = [
    {materia: 'Inglês', titulo: 'Tradução', data: "25/06/2021"},
    {materia: 'Inglês', titulo: 'Tradução', data: "25/06/2021"},
    {materia: 'Inglês', titulo: 'Tradução', data: "25/06/2021"},
    {materia: 'Inglês', titulo: 'Tradução', data: "25/06/2021"},
    {materia: 'Inglês', titulo: 'Tradução', data: "25/06/2021"},
    {materia: 'Inglês', titulo: 'Tradução', data: "25/06/2021"},
    {materia: 'Inglês', titulo: 'Tradução', data: "25/06/2021"},
    {materia: 'Inglês', titulo: 'Tradução', data: "25/06/2021"}
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{width: '40%', flexDirection: 'row'}}>
          <FontAwesome style={{marginLeft: 15}} name="user-circle" size={30} color="black" />
          <Text style={styles.title}>Tarefas</Text>
        </View>
        <TouchableOpacity style={{marginLeft: '50%'}}>
            <AntDesign name="plus" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        style={{height: '78%', width: '100%', flexGrow: 0, backgroundColor: '#EFECED'}}
        renderItem={( {item } ) => (<List item = {item} />)}
        keyExtractor={(item, index) => item.key}
      />
      <Barra navigation = {navigation} />
    </View>
  );
}

function List(item) {
  return (
    <TouchableOpacity style={styles.task}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <AntDesign style={{width: '10%'}} name="book" size={25} color="black" />
        <Text style={{fontSize: 16}}>{item.item.materia}</Text>
      </View>
      <Text style={{marginLeft: '10%', fontSize: 13, fontWeight: 'bold'}}>{item.item.titulo}</Text>
      <Text style={{marginLeft: '10%', fontSize: 13}}>{item.item.data}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  header: {
    height: '10%',
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  title: {
    marginLeft: 25,
    fontSize: 20,
    fontWeight: 'bold'
  },
  task: {
    height: 80,
    width: '95%',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    alignSelf: 'center',
    backgroundColor: '#fff'
  }
});
