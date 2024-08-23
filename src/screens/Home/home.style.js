import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";

export const style = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        gap:50,
        backgroundColor:COLORS.blue_dark
        
    },
    consultaText:{
        fontSize:FONTSIZE.xl,
        color:COLORS.ligh_yellow,
    },
    EnderecoText:{
        fontSize:FONTSIZE.xxl,
        color:COLORS.ligh_yellow,

    },
    buttonNext:{
        width:250,
    }

})