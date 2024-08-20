import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//SCRENNS IMPORT
import Home from "../screens/Home/home";
import InsertData from "../screens/InsetData/insertData";
import ShowData from "../screens/showData/showData";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS } from "../constants/theme";


const Stack = createStackNavigator();


function Router(){

    
    return <>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name="Home" component={Home} options={{
                    headerShown:false,
                }}/>

                <Stack.Screen name="InsertData" component={InsertData} options={{
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: COLORS.blue_dark, // Torna o cabeçalho transparente
                        shadowColor: 'transparent', // Remove a sombra
                        elevation: 0, // Remove a elevação (sombra) no Android
                    },
                    headerTintColor: 'white', // Cor da seta e ícones do cabeçalho
                    headerBackTitleVisible: false, // Oculta o título de volta
                    }}
                />
                
                <Stack.Screen name="ShowData" component={ShowData} options={{
                    headerShown:false,
                }}/>


            </Stack.Navigator>
        </NavigationContainer>
    
    </>
}


export default Router;