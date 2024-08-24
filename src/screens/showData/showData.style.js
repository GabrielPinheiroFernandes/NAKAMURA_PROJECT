import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";

export const style = StyleSheet.create({
    container:{
        flex:1,
        
        backgroundColor:COLORS.blue,
        justifyContent:"center",
        alignItems:"center",
        padding:30

    },
    containerCard:{
        flex:1,
        width:'80%',
        backgroundColor:COLORS.blue_dark,
        alignItems:"center",
        justifyContent:"center",
        gap:100,
        borderRadius:50
        
    },
    text:{
        color:COLORS.ligh_yellow,
    },
    Tittle:{
        fontSize:FONTSIZE.xxl,
        color:COLORS.ligh_yellow,
        fontWeight:'bold',
        padding:4
    },
    ScrollView:{
        flex:1,
        // borderWidth:3,
        width:250,
        alignItems:"flex-start"
    }
})