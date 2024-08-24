import { Text, View } from "react-native";
import { style } from "./insetData.style";
import Textinput from "../../components/textInput/textinput";
import Button from "../../components/button/button";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";


function InsertData(){
    const navigation = useNavigation();
    const [CEP,setCEP] = useState();
    const [DADOS,setDADOS] = useState();

    async function API(cepPesq){
        
        try {
            fetch('https://apifacil.dev/api/v1/guest/cep/'+cepPesq).then((res)=>{
                try{
                    return res.json()

                }
                catch{
                    console.log('algo de errado na conversão do json')
                }
            }).then((res)=>{
                // console.log(res)
                setDADOS(res)
            })
        }
        catch{
            alert('tente mais tarde')
        }
    }


    return <>
        <View style={style.container}>
            <View style={style.containerCard}>
                <Text style={style.Tittle}>BUSCA CEP</Text>
                <Textinput placeholder="Somente numeros" label='Digite o CEP:' isnum onChangeText={setCEP} />
                <Button placeholder='Consultar' onClick={()=>{
                    API(CEP);
                    {DADOS.error = "false" ? navigation.navigate('ShowData',[DADOS]) : alert('Digite corretamente o seu CEP!!')}
                    
                    }}/>
            </View>
        </View>
    </>
};



export default InsertData;