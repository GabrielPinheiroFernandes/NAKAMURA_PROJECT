import { Text, View } from "react-native";
import { style } from "./insertText.style";


function InsertText(props){

    return <View style={style.container}>
        <Text style={style.label}>{props.label}:</Text>
        <Text style={style.data}>{props.data}</Text>
    </View>
}

export default InsertText;