import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { AntDesign , FontAwesome , FontAwesome5, Feather } from '@expo/vector-icons';

export default function App(props) {

    const handleEquipes = () => {
        props.navigation.navigate("Equipes");
    }

    const handleTarefas = () => {
        props.navigation.navigate("Tarefas");
    }

    return (
        <View style={styles.footer}>
            <TouchableOpacity style={{width: '20%', alignItems: 'center'}}>
                <FontAwesome5 name="bell" size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{width: '20%', alignItems: 'center'}}>
                <Feather name="message-square" size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={handleEquipes}
            style={{width: '20%', alignItems: 'center'}}>
                <FontAwesome name="group" size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
            onPress={handleTarefas}
            style={{width: '20%', alignItems: 'center'}}>
                <FontAwesome5 name="pencil-alt" size={25} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{width: '20%', alignItems: 'center'}}>
                <AntDesign name="calendar" size={25} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
      height: '10%',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    }
});