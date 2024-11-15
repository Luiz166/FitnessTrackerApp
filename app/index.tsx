import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {

  useEffect(() => {
    setTimeout(() => {
      router.push("/screens/onBoard")
    }, 3000)
  }, [])

  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/images/logo.png')}/>
      <Text style={styles.h1}>fitfy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#232323",
  },
  
  h1: {
    fontSize: 32,
    fontWeight: "700",
    color: "#E2F163",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  img: {
    maxHeight: 200
  }
})
