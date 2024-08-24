import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE } from "../../constants/theme";

export const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        padding:10
    },
    label:{
        color:COLORS.ligh_yellow,
        fontSize:FONTSIZE.lg,
        paddingRight:4
    },
    data: {
        color: COLORS.blue_dark,
        fontSize: FONTSIZE.lg,
        // paddingRight: 4,
        backgroundColor: COLORS.ligh_green,
        borderRadius: 3,
        // padding: 1,
        textAlign: 'center',
        maxWidth: '90%', // Garante que o texto não ultrapasse a View
        flexWrap: 'wrap', // Permite a quebra de linha
      },

})