import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    texto:{
        color:  'white',        
        fontSize: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem:{
        width: '320px',
        height: '320px',
        display: 'flex',
        alignItems: 'center',
    },
    nota:{ 
        color: "yellow",
        fontSize:30,
         display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },

    descricao:{
        color: 'white',
        fontSize: 15,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'justify',
    },
    container:{
        flex: 1,
        backgroundColor: '#141a29',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  
})

export default styles