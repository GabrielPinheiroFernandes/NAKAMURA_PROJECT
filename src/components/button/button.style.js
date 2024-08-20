import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";

export const style = StyleSheet.create({
    container:{
    },
    borderButton:{
        padding:10,
        borderRadius:5,
        backgroundColor:COLORS.ligh_green,
        alignItems:"center",
        justifyContent:"center",
        

    },
    textButton:{
        fontSize:FONTSIZE.xl,       
        color:COLORS.ligh_yellow,
    }
})