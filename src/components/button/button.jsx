import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./button.style";


function Button(props){
    return <>
        <TouchableOpacity onPress={props.onClick}>
            <View style={style.borderButton}>
                <Text style={style.textButton}>{props.placeholder}</Text>
            </View>
        </TouchableOpacity>
    </>
}

export default Button;