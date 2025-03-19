import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Processes = ({ navigation }: any) => {
  const processes = [
    { id: "1", title: "Process #12345", status: "Em andamento" },
    { id: "2", title: "Process #67890", status: "Finalizado" },
    { id: "3", title: "Process #54321", status: "Iniciado" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Meus Processos</Text>
      <FlatList
        data={processes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("ProcessDetails", { processId: item.id })}>
            <View style={styles.iconContainer}>
              <Ionicons name="document-text" size={30} color="#007bff" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.status}>{item.status}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
  },
  iconContainer: {
    marginRight: 15,
    justifyContent: "center",
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  status: {
    fontSize: 14,
    color: "#007bff",
  },
};

export default Processes;
