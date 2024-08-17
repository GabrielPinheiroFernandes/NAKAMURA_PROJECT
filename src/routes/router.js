import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//SCRENNS IMPORT
import Home from "../screens/Home/home";
import InsertData from "../screens/InsetData/insertData";
import ShowData from "../screens/showData/showData";


const Stack = createStackNavigator();


function Router(){

    
    return <>
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="InsertData" component={InsertData}/>
                <Stack.Screen name="ShowData" component={ShowData}/>


            </Stack.Navigator>
        </NavigationContainer>
    
    </>
}


export default Router;