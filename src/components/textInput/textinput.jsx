import { Text, TextInput, View } from "react-native";
import { style } from "./textinput.style";

function Textinput(props){
    return <>
        <View style={style.container}>
            { props.placeholder ? (
                <Text style={style.placeholder}>{props.placeholder}</Text>
            ) : null }
            <TextInput style={[style.InputText]}/>
        </View>    
    </>

}


export default Textinput;