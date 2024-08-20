import { View } from "react-native";
import { style } from "./insetData.style";
import Textinput from "../../components/textInput/textinput";


function InsertData(){

    return <>
    <View style={style.container}>
        <Textinput placeholder="asgdadyussd" isnum/>
    </View>
    </>
};


export default InsertData;