import { createStackNavigator } from "@react-navigation/stack";
import { Image, Text } from "react-native";
import icons from "../../constants/icons";


const Stack = createStackNavigator();


function Home(){
    return <>
        <Text>Vai tomar no cu bingulinho</Text>
        <Text>Vai tomar no cu bingulinho</Text>
        <Text>Vai tomar no cu bingulinho</Text>
        <Image source={icons.ratao}/>
    
    </>
}


export default Home;