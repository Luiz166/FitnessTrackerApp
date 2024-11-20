import { useState } from "react";
import { View, StyleSheet, Text, Button, Pressable, Alert } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import TextField from "../components/TextField";
import { getToken } from "../auth/AuthProvider";
import axios from "axios";

export default function finishRegister(){

    const [localChecked, setLocalChecked] = useState(false); // false = female true = male
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")

    const heightOnChange = (newText : string) => {
        setHeight(newText)
    }

    const weightOnChange = (newText : string) => {
        setWeight(newText)
    }

    const handleForm = async () => {
        const id = await getToken()
        const gender = localChecked? "male" : "female"
        const weightFormatted = parseFloat(weight)
        const heightFormatted = parseInt(height)
        try{
            const res = await axios.put(`http://192.168.0.11:8800/user${id}`, {
                weight: weightFormatted,
                height: heightFormatted,
                gender: gender
            })

            Alert.alert("Sucesso", `${res.data.message}`)
        }catch(error){
            console.error("erro ao autalizar: ", error)
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.childContainer}>
                <Text style={styles.title}>Vamos finalizar seu cadastro</Text>
                <View style={styles.selectContainer}>
                    <Text style={styles.label}>Selecione seu gênero</Text>
                    <BouncyCheckbox text="Homem" onPress={() => {
                        setLocalChecked(!localChecked)
                        console.log(localChecked)
                    }} textStyle={{ textDecorationLine: "none" }} useBuiltInState={false} isChecked={localChecked}/>
                    <BouncyCheckbox text="Mulher" onPress={() => {
                        setLocalChecked(!localChecked)
                        console.log(localChecked)
                    }} textStyle={{ textDecorationLine: "none" }} useBuiltInState={false} isChecked={!localChecked}/>
                </View>
                <View style={styles.selectContainer}>
                    <TextField label="Peso (kg)" 
                        labelStyle={styles.label} 
                        viewStyle={styles.textView} 
                        style={styles.input}
                        placeholderTextColor="#fff"
                        placeholder={'Digite seu peso'}
                        keyboardType="numeric"
                        onChangeText={weightOnChange}
                        value={weight}
                    />
                    <TextField label="Altura (cm)" 
                        labelStyle={styles.label} 
                        viewStyle={styles.textView} 
                        style={styles.input}
                        placeholderTextColor="#fff"
                        placeholder={'Digite sua altura'}
                        keyboardType="numeric"
                        onChangeText={heightOnChange}
                        value={height}
                        />
                </View>
                <Pressable style={styles.button} onPress={handleForm}>
                    <Text style={styles.buttonText}>Continuar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#232323"
    },
    childContainer: {
        width: "80%"
    },
    selectContainer: {
        gap: 10,
        marginTop: 20
    },
    input: {
        color: "white",
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        letterSpacing: 2,
        color: "white"
    },
    label: {
        fontSize: 12,
        color: "#ccc",
        textTransform: "uppercase"
    },
    textView: {
        borderBottomWidth: 1,
        borderBottomColor: "lightgray",
        marginTop: 20,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#896CFE",
        padding: 10,
        borderRadius: 10,
        marginTop: 20
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        textTransform: "uppercase"
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "95%",
        marginTop: 10
    },
    footerSpan: {
        color: "white"
    },
    link: {
        textDecorationStyle: "solid",
        textDecorationLine: "underline",
        color: "#E2F163",
        fontWeight: "600"
    }
})