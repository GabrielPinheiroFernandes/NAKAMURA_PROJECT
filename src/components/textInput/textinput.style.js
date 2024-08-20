import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";

export const style = StyleSheet.create({
    container:{
       width:'90%'
    },
    InputText:{
        padding:10,
        borderRadius:5,
        backgroundColor:COLORS.ligh_green,
        alignItems:"center",
        justifyContent:"center",
        

    },
    placeholder:{
        textAlign:"center",
        fontSize:FONTSIZE.xl,       
        color:COLORS.ligh_yellow,
        paddingBottom:10,
    }
})