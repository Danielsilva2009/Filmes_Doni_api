
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/index.js"
import Details from "../screens/details/index.js"
import busca from "../screens/busca/index.js";


export default function routes (){

    const stack = createNativeStackNavigator();

    return(
        <NavigationContainer>

            <stack.Navigator>
                <stack.Screen name="Home" component={Home}></stack.Screen>
                <stack.Screen name="Detalhes" component={Details}></stack.Screen>
                <stack.Screen name="busca" component={busca}></stack.Screen>
            </stack.Navigator>

        </NavigationContainer>

    )
}