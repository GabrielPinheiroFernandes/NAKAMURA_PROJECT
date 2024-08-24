import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//SCRENNS IMPORT
import Home from "../screens/Home/home";
import InsertData from "../screens/InsetData/insertData";
import ShowData from "../screens/showData/showData";
import { COLORS } from "../constants/theme";


const Stack = createStackNavigator();


function Router(){

    
    return <>
    <NavigationContainer>
        <Stack.Navigator initialRouteName="InsertData">

            <Stack.Screen name="Home" component={Home} options={{
                headerShown:false,
                
            }}/>

            <Stack.Screen
            name="InsertData"
            component={InsertData}
            options={{
                headerShown: true,
                headerTitle: '', // Oculta o título principal
                headerStyle: {
                backgroundColor: COLORS.blue, // Cor do fundo do cabeçalho
                shadowColor: 'transparent', // Remove a sombra
                elevation: 0, // Remove a elevação (sombra) no Android
                height: 50, // Ajuste a altura do cabeçalho aqui
                },
                headerTintColor: 'white', // Cor da seta e ícones do cabeçalho
                headerBackTitleVisible: false, // Oculta o título de volta
            }}
            />
                
            <Stack.Screen name="ShowData" component={ShowData} options={{
                headerShown: true,
                headerTitle: '', // Oculta o título principal
                headerStyle: {
                    backgroundColor: COLORS.blue, // Cor do fundo do cabeçalho
                    shadowColor: 'transparent', // Remove a sombra
                    elevation: 0, // Remove a elevação (sombra) no Android
                    height: 50, // Ajuste a altura do cabeçalho aqui
                },
                headerTintColor: 'white', // Cor da seta e ícones do cabeçalho
                headerBackTitleVisible: false, // Oculta o título de volta
            }}/>


        </Stack.Navigator>
    </NavigationContainer>
    
    </>
}


export default Router;