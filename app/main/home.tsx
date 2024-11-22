import { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"
import { getToken } from "../auth/AuthProvider";

export default function Home(){
    
    let username = getToken('username')


    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Olá, {username}</Text>
                <Text style={styles.subtitle}>É hora de se desafiar</Text>
            </View>
            <View style={styles.main}>
                <View>
                    <Text style={styles.h2}>Seu progresso</Text>
                    <View>
                        <Text>Em-Progresso 56%</Text>
                        <Text>Você queimou 1000kcal de 2450kcal</Text>
                    </View>
                    <View>
                        <Text>Você consumiu 2450kcal</Text>
                        <Text>Calorias no final do dia: 1450</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.h2}>Atividades físicas</Text>
                    <View>
                        <Text>Corrida</Text>
                        <Text>2km (100kcal)</Text>
                    </View>
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
        backgroundColor: "#232323",
    },
    title: {
        color: "#896CFE",
        fontSize: 30,
        fontWeight: "600",
        textAlign: "left"
    },
    header: {
        justifyContent: "flex-start",
        width: "80%"
    },
    subtitle: {
        color: "white",
        fontWeight: "600"
    },
    h2: {
        color: "#E2F163",
        fontWeight: "600"
    },
    main: {
        width: "80%"
    }
})