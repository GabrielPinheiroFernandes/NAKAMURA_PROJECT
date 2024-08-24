import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";

export const style = StyleSheet.create({
    container:{
       width:300,
       alignItems:"center",
    //    borderWidth:4
    },
    InputText:{
        padding:10,
        borderRadius:5,
        backgroundColor:COLORS.ligh_green,
        alignItems:"center",
        justifyContent:"center",
        color:COLORS.ligh_yellow,
        width:'90%'
        

    },
    label:{
        textAlign:"center",
        fontSize:FONTSIZE.xl,       
        color:COLORS.ligh_yellow,
        paddingBottom:10,
    }
})