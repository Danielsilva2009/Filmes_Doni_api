import { Text } from "react-native-web";
import { useRoute } from "@react-navigation/native";



export default function busca(){


    const route = useRoute();
 return(

  


 <Text>{route.params.buscar}</Text>



 )

}