import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";

export const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.blue,
        alignItems:"center",
        padding:30
    },
    containerCard:{
        flex:1,
        backgroundColor:COLORS.blue_dark,
        alignItems:"center",
        justifyContent:"space-around",
        borderRadius:50
        
    },
    Tittle:{
        fontSize:FONTSIZE.xxl,
        color:COLORS.ligh_yellow,
        fontWeight:'bold',
        padding:4
    }
})