import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const processDetails = {
  id: "1",
  title: "Processo Trabalhista",
  status: "Em andamento",
  timeline: [
    { id: "1", date: "2025-03-01", description: "Abertura do processo", icon: "document-text-outline" },
    { id: "2", date: "2025-03-05", description: "Petição inicial enviada", icon: "mail-outline" },
    { id: "3", date: "2025-03-10", description: "Primeira audiência marcada", icon: "calendar-outline" },
    { id: "4", date: "2025-03-15", description: "Audiência realizada", icon: "briefcase-outline" },
  ],
};

const ProcessDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{processDetails.title}</Text>
      <Text style={styles.status}>Status: {processDetails.status}</Text>

      <FlatList
        data={processDetails.timeline}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.timelineItem}>
            <Ionicons name={item.icon as any} size={24} color="#007bff" />
            <View style={styles.textContainer}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.description}>{item.description}</Text>
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
    marginBottom: 10,
    color: "#333",
  },
  status: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#007bff",
  },
  timelineItem: {
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
  date: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});

export default ProcessDetails;
