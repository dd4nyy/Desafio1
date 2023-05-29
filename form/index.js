// Importação das dependências necessárias para o componente
import { View, Text, TextInput, TouchableOpacity,  Pressable, Keyboard} from "react-native"
import styles from "./style.js";

// Definição do componente "Form" como padrão para exportação
export default function Form(){


    // Retorno do componente "Form" que inclui o formulário e o componente personalizado "ResultImc"
    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
        {/* faz com que, ao clicar em qqr lugar da tela o teclado feche */}


            <View style={styles.form}>
            <Text style={styles.formLabel}>NOME:</Text>
            <TextInput style={styles.input} placeholder="Digite seu nome" keyboardType="numeric"/>


            <Text style={styles.formLabel}>TELEFONE:</Text>
            <TextInput style={styles.input} placeholder="Digite seu telefone" keyboardType="numeric"/>

            <Text style={styles.formLabel}>EMAIL:</Text>
            <TextInput style={styles.input} placeholder="Digite seu email" keyboardType="numeric"/>
            

            <TouchableOpacity style={styles.buttonCalculator} onPress={() => {validationMedia()}}>
            <Text style={styles.textButtonCalculator}> </Text> ENVIAR INFORMAÇÕES
            </TouchableOpacity>


            </View>
         </Pressable>
    )
}





