import React from "react";
import { View, Text, Button, TextInput } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  return (

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff", padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Email:</Text>
      <TextInput
        style={{
          height: 28,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 15,
          paddingHorizontal: 10,
          width: "80%",
        }}
        placeholder="Digite seu email"
        keyboardType="email-address"
        placeholderTextColor="#aaa"
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Senha:</Text>
      <TextInput
        style={{
          height: 28,
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 5,
          marginBottom: 20,
          paddingHorizontal: 10,
          width: "80%",
        }}
        placeholder="Digite sua senha"
        secureTextEntry
        placeholderTextColor="#aaa"
      />
      <Button title="Entrar" onPress={() => navigation.navigate("Dashboard")} color="#007BFF" />
    </View>
  );
};

export default HomeScreen;
