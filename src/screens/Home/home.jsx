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
            <Image source={icons.gps}/>
            <Text style={style.consultaText}>CONSULTAS</Text>
            <Text style={style.EnderecoText}>ENDEREÇO</Text>
            <Button style={style.buttonNext} placeholder="Consultar" onClick={()=>{navigator.navigate("InsertData")}}/>
        </View>
        
    
    </>
}


export default Home;