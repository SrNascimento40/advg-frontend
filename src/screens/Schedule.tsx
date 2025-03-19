import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const schedule = [
  { id: "1", title: "Consulta inicial", date: "2025-03-20", time: "10:00 AM", lawyer: "Dr. John Doe" },
  { id: "2", title: "Audiência trabalhista", date: "2025-03-22", time: "02:30 PM", lawyer: "Dr. Jane Smith" },
  { id: "3", title: "Revisão de contrato", date: "2025-03-25", time: "04:00 PM", lawyer: "Dr. Alan Turing" },
];

const Schedule = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Agenda</Text>
      <FlatList
        data={schedule}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.appointment}>
            <Ionicons name="calendar-outline" size={24} color="#007bff" />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.details}>{item.date} • {item.time}</Text>
              <Text style={styles.lawyer}>Com: {item.lawyer}</Text>
            </View>
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
  appointment: {
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
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  details: {
    fontSize: 14,
    color: "#666",
  },
  lawyer: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007bff",
  },
});

export default Schedule;
