import React, { useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign , Feather, FontAwesome } from '@expo/vector-icons';

import Barra from '../../components/Barra/index';

export default function App({navigation}) {
    const equipes = [
        {nome: 'INGLÊS'},
        {nome: 'INGLÊS'},
        {nome: 'INGLÊS'},
        {nome: 'INGLÊS'},
        {nome: 'INGLÊS'},
        {nome: 'INGLÊS'},
        {nome: 'INGLÊS'},
        {nome: 'INGLÊS'},
        {nome: 'INGLÊS'},
        {nome: 'INGLÊS'},
        {nome: 'INGLÊS'},
        {nome: 'INGLÊS'},
        {nome: 'INGLÊS'},
        {nome: 'INGLÊS'},
        {nome: 'INGLÊS'},
        {nome: 'INGLÊS'}
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{width: '40%', flexDirection: 'row'}}>
                <FontAwesome style={{marginLeft: 15}} name="user-circle" size={30} color="black" />
                <Text style={styles.title}>Teams</Text>
                </View>
                <TouchableOpacity style={{marginLeft: '50%'}}>
                    <Feather name="more-vertical" size={30} color="black" />
                </TouchableOpacity>
            </View>
            <FlatList
            data={equipes}
            style={{height: '95%', width: '100%', padding: 10, flexGrow: 0, backgroundColor: '#EFECED'}}
            renderItem={( {item } ) => (<List nome = {item.nome} />)}
            keyExtractor={(item, index) => item.key}            
            />
            <Barra navigation={navigation} />
        </View>
    )
}

function List({nome}) {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style = {styles.box}>
                <Text style={{fontSize: 15, color: 'white'}}>ID</Text>
            </TouchableOpacity>
            <Text style={{marginLeft: 20, fontSize: 18}}>{nome}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: 40,
        borderRadius: 5,
        marginVertical: 10,
        backgroundColor: 'purple'
    },
    header: {
      height: '10%',
      width: '100%',
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center'
    },
    title: {
      marginLeft: 25,
      fontSize: 20,
      fontWeight: 'bold'
    }
});