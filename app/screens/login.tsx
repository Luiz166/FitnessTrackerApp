import { View, Text, StyleSheet, Pressable } from "react-native";
import TextField from "./components/TextField";

export default function Login(){
    return(
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.title}>Login</Text>
                <TextField label="email" 
                labelStyle={styles.label} 
                viewStyle={styles.textView} 
                placeholder={'Digite seu email'}
                />
                <TextField label="senha" 
                labelStyle={styles.label} 
                secureTextEntry={true} 
                viewStyle={styles.textView} 
                placeholder={'Digite sua senha'}
                />
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Logar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    loginContainer: {
        height: "50%",
        width: "80%"
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        letterSpacing: 2,
        textTransform: "uppercase",
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
        backgroundColor: "#F974D2",
        padding: 10,
        borderRadius: 10,
        marginTop: 20
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        textTransform: "uppercase"
    }
})