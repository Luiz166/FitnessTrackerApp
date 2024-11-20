import { View, Text, StyleSheet, Pressable, Alert, StatusBar} from "react-native";
import TextField from "../components/TextField";
import { useState } from "react";
import { Link, router } from "expo-router";
import axios from "axios";
import { getToken, saveToken } from "../auth/AuthProvider";

export default function Login(){

    const [email, setEmail] = useState("")

    const emailOnChange = (newText : string) => {
        setEmail(newText)
    }

    const [password, setPassword] = useState("")

    const passwordOnChange = (newText : string) => {
        setPassword(newText)
    }

    const loginButton = async () => {
        if(!email || !password){
            Alert.alert("Erro", "Preencha todos os campos")
        }else{
            try{
                const res = await axios.post("http://192.168.0.11:8800/user/login", {
                    email: email,
                    password: password
                })
                //console.log(res)
                const token = res.data.results[0].id;
                const tokenString = String(token)
                await saveToken(tokenString)
                Alert.alert("Sucesso", `${res.data.message}`)
                router.push("/setup/finishRegister")
            }catch(err){
                Alert.alert("Erro", `${err}`)
            }
        }
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={"#232323"}/>
            <View style={styles.loginContainer}>
                <Text style={styles.title}>Login</Text>
                <TextField label="email" 
                labelStyle={styles.label} 
                viewStyle={styles.textView} 
                placeholder={'Digite seu email'}
                onChangeText={emailOnChange}
                style={styles.input}
                placeholderTextColor="#fff"
                value={email}
                />
                <TextField label="senha" 
                labelStyle={styles.label} 
                secureTextEntry={true} 
                viewStyle={styles.textView} 
                placeholder={'Digite sua senha'}
                placeholderTextColor="#fff"
                onChangeText={passwordOnChange}
                style={styles.input}
                value={password}
                />
                <Pressable onPress={loginButton} style={styles.button}>
                    <Text style={styles.buttonText}>Logar</Text>
                </Pressable>
                <View style={styles.footer}>
                    <Text style={styles.footerSpan}>Não tem uma conta?</Text>
                    <Pressable>
                        <Link href="/screens/register" style={styles.link}>Cadastrar</Link>
                    </Pressable>
                </View>
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
    loginContainer: {
        height: "50%",
        width: "80%"
    },
    input: {
        color: "white",
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        letterSpacing: 2,
        textTransform: "uppercase",
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