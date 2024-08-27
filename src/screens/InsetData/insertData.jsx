import { Text, View } from "react-native";
import { style } from "./insetData.style";
import Textinput from "../../components/textInput/textinput";
import Button from "../../components/button/button";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";

function InsertData() {
    const navigation = useNavigation();
    const [CEP, setCEP] = useState('');
    const [DADOS, setDADOS] = useState(null);

    async function API(cepPesq) {
        try {
            const response = await fetch('https://apifacil.dev/api/v1/guest/cep/' + cepPesq);
            const data = await response.json();
            console.log(data)
            setDADOS(data);
        } catch (error) {
            console.error('Erro na chamada da API:', error);
        }
    }
    
    useEffect(() => {
        if (DADOS) {
            // console.log('cade o erro porra',DADOS.error)
            // console.log(DADOS)
            if (DADOS.error === false) {
                navigation.navigate('ShowData', DADOS);
            } else if (DADOS.error === true){
                alert(`${DADOS.message}`);
            } else {
                alert('Algum erro inesperado ocorreu , tente novamente mais tarde!')
            }
        }
    }, [DADOS, navigation]);

    return (
        <View style={style.container}>
            <View style={style.containerCard}>
                <Text style={style.Tittle}>BUSCA CEP</Text>
                <Textinput 
                    placeholder="Somente números" 
                    label='Digite o CEP:' 
                    isnum 
                    onChangeText={setCEP} 
                />
                <Button 
                    placeholder='Consultar' 
                    onClick={() => {
                        // console.log('antes do botão', CEP);
                        API(CEP);
                    }} 
                />
            </View>
        </View>
    );
}

export default InsertData;
