
import {View, Text, Image, StyleSheet} from 'react-native'
import { useRoute } from '@react-navigation/native'
import styles from './style.js'

import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 

export default function Details(){
    

    const route = useRoute();

    return(
        <View style={styles.container}>
             <Image style= {styles.imagem} source={{uri : `https://image.tmdb.org/t/p/original${route.params.img}`}}/>
            <Text style = {styles.texto}> {route.params.titulo} </Text>
            <Text style = {styles.nota}> {route.params.nota} </Text>
            <Stars
            default={route.params.nota}
            count={10}
            half={true}
            starSize={50} 
            fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
            emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
            halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}
            />
             <Text style = {styles.descricao}>  {route.params.descricao } </Text>

               


        </View>
    )
}