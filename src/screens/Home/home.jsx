import { createStackNavigator } from "@react-navigation/stack";
import {  Image, Text, View } from "react-native";
import icons from "../../constants/icons";
import Button from "../../components/button/button";
import { useNavigation } from "@react-navigation/native";
import { style } from "./home.style";


const Stack = createStackNavigator();


function Home(){
    const navigator = useNavigation();
    return <>
        <View style={style.container}>
            <Text>Vai tomar no cu bingulinho</Text>
            <Text>Vai tomar no cu bingulinho</Text>
            <Text>Vai tomar no cu bingulinho</Text>
            <Image source={icons.ratao}/>
            <Button placeholder="BOTÃO" onClick={()=>{navigator.navigate("InsertData")}}/>
        </View>
        
    
    </>
}


export default Home;