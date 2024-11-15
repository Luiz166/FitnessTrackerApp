import { router } from "expo-router";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";

export default function OnBoard(){

    const button = () => {
        router.push("/screens/login")
    }

    return(
        <View style={styles.container}>
            <Image style={styles.img} source={require("@/assets/images/man-training.png")}/>
            <View style={styles.purpleContainer}>
                <Text style={styles.h1}>Comece sua jornada fitness agora.</Text>
            </View>
            <Pressable onPress={button} style={styles.button}>
                <Text style={styles.buttonText}>Comecar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    purpleContainer: {
        backgroundColor: "#B3A0FF",
        width: "100%",
        paddingVertical: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    h1: {
        color: "white",
        fontSize: 32,
        fontWeight: "600",
        textAlign: "center"
    },
    img: {
        position: "absolute",
    },
    button: {
        marginTop: 30,
        borderColor: "white",
        borderWidth: .5,
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
    },
    buttonText: {
        color: "white",
        fontWeight: "600",
        fontSize: 23
    }
})