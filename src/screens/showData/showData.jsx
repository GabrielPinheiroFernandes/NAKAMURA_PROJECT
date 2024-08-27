import { ScrollView, Text, View } from "react-native";
import { style } from "./showData.style";
import InsertText from "../../components/InsertText/insertText";
import Button from "./../../components/button/button"
import { useNavigation } from "@react-navigation/native";


function ShowData(dados){
    
    const navigator = useNavigation();
    const data = dados.route.params.data


    return <View style={style.container}>
       <View style={style.containerCard}>
            <Text style={style.Tittle}>Resultado</Text>
            <View style={style.ScrollView}>
                <InsertText label="CEP" data={data.cep}/>
                <InsertText label="Rua" data={data.logradouro}/>
                <InsertText label="Bairro" data={data.bairro}/>
                <InsertText label="Cidade" data={data.cidade}/>
                <InsertText label="Estado" data={data.estado}/>
                <InsertText label="IBGE" data={data.ibge}/>
                <InsertText label="País" data={data.pais}/>
            </View>
            <Button placeholder='Voltar' style={{paddingBottom:30}} onClick={()=>{
                navigator.navigate('Home')
            }}/>
       </View>
    </View>

};


export default ShowData;