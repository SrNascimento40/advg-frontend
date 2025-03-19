import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Dashboard = ({ navigation }: any) => {
  const menuItems = [
    { name: "Processos", icon: "briefcase", routeName: "Processes" },
    { name: "Agenda", icon: "calendar", routeName: "Schedule" },
    { name: "Mensagens", icon: "chatbubble", routeName: "Messages" },
    { name: "Faturas", icon: "document-text", routeName: "Invoices" },
    { name: "Perfil", icon: "person", routeName: "EditProfile" },
    { name: "Configurações", icon: "settings", routeName: "Settings" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.item} onPress={() => navigation.navigate(item.routeName)}>
            <Ionicons name={item.icon} size={40} color="#007bff" />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  grid: {
    width: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  item: {
    width: "30%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
  },
};

export default Dashboard;
