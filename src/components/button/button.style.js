import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";

export const style = StyleSheet.create({
    container:{
    
    },
    borderButton:{
        borderWidth:3,
        padding:5,
        borderRadius:5,
        width:'50%',
        backgroundColor:COLORS.ligh_yellow,

    },
    textButton:{
        textAlign:"center",
        fontSize:FONTSIZE.md,


    }
})