import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Fitfy</Text>
      <Text style={styles.h1}>Preparado para conquistar seu corpo dos sonhos?</Text>
      <Link href="/screens/login">Sim</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  h1: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20
  }
})
