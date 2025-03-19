import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const invoices = [
  { id: "1", lawyer: "Dr. John Doe", dueDate: "2024-04-10", amount: "R$ 1.200,00", paid: true },
  { id: "2", lawyer: "Dr. Jane Smith", dueDate: "2024-04-15", amount: "R$ 850,00", paid: false },
  { id: "3", lawyer: "Dr. Alan Turing", dueDate: "2024-04-20", amount: "R$ 3.500,00", paid: true },
];

const Invoices = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Faturas</Text>
      <FlatList
        data={invoices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.invoice}>
            <Ionicons name="document-text-outline" size={24} color={item.paid ? "#28a745" : "#dc3545"} />
            <View style={styles.textContainer}>
              <Text style={styles.lawyer}>{item.lawyer}</Text>
              <Text style={styles.details}>Due: {item.dueDate} • {item.amount}</Text>
            </View>
            <Text style={[styles.status, item.paid ? styles.paid : styles.pending]}>
              {item.paid ? "Pago" : "Pendente"}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  invoice: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  lawyer: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  details: {
    fontSize: 14,
    color: "#666",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
  },
  paid: {
    color: "#28a745",
  },
  pending: {
    color: "#dc3545",
  },
});

export default Invoices;
