import { View, Text, StyleSheet, Pressable} from "react-native";
import TextField from "../components/TextField";
import { useState } from "react";
import { Link } from "expo-router";
import axios from "axios"

export default function Register(){
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")

    const nameOnChange = (newText: string) => {
        setName(newText)
    }

    const emailOnChange = (newText : string) => {
        setEmail(newText)
    }

    const [password, setPassword] = useState("")

    const passwordOnChange = (newText : string) => {
        setPassword(newText)
    }

    const createUser = async () => {
        if(email != "" && password != ""){
            try{
                const res = await axios.post("http://192.168.0.11:8800/user/register", {
                    name: name,
                    email: email,
                    password: password
                })

                alert(res.data.message)
            }catch(err){
                console.log(err)
            }
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.title}>Criar conta</Text>
                <TextField label="nome" 
                labelStyle={styles.label} 
                viewStyle={styles.textView} 
                placeholder={'Digite seu nome completo'}
                placeholderTextColor="#fff"
                onChangeText={nameOnChange}
                style={styles.input}
                value={name}
                />
                <TextField label="email" 
                labelStyle={styles.label} 
                viewStyle={styles.textView} 
                placeholder={'Digite seu email'}
                placeholderTextColor="#fff"
                onChangeText={emailOnChange}
                style={styles.input}
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
                <Pressable onPress={createUser} style={styles.button}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </Pressable>
                <View style={styles.footer}>
                    <Text style={styles.footerSpan}>Já tem uma conta?</Text>
                    <Pressable>
                        <Link href="/screens/login" style={styles.link}>Logar</Link>
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