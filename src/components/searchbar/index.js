import React from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import styles from './style'
import Feather from '@expo/vector-icons/Feather';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Search(){
     
    const [buscar, setBusca ] = useState () ;
    
    function testeBusca(){

        console.log(buscar);
    }
     const navigation = useNavigation();
    return(

        <View style= {styles.containerSearch}> 

                  
                <TextInput onChangeText={(Texto) => (setBusca(Texto))} style= {styles.inputSearch} placeholder="Digite o filme que deseja buscar"></TextInput>
               <TouchableOpacity onPress={()=> navigation.navigate('busca',{buscar})}>
                <Feather name="search" size={24} color="black" style = {{marginRight: 12}} />
               </TouchableOpacity>
        </View>

    );
}