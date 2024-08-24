import { Text, TextInput, View } from "react-native";
import { style } from "./textinput.style";
import { COLORS } from "../../constants/theme";

function Textinput(props){
    return (
        <View style={style.container}>
          {props.label && <Text style={style.label}>{props.label}</Text>}
          <TextInput
            style={style.InputText}
            keyboardType={props.isnum ? 'numeric' : 'default'}
            placeholder={props.placeholder}
            placeholderTextColor={COLORS.ligh_yellow} // Verifique a visibilidade da cor
            onChangeText={props.onChangeText}
          />
        </View>
      );

}

export default Textinput;