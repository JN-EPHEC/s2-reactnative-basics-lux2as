import ProfileCard from "@/components/ProfileCard";
import TodoItem from '@/components/TodoItem';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from "react-native";

const USERS_DATA = [
  { id: '1', nom: 'Alice Martin', email: 'alice.martin@email.com' },
  { id: '2', nom: 'Benjamin Dubois', email: 'ben.dubois@email.com' },
  { id: '3', nom: 'Chloé Garcia', email: 'chloe.g@email.com' },
  { id: '4', nom: 'David Petit', email: 'david.petit@email.com' },
  { id: '5', nom: 'Émilie Rousseau', email: 'emilie.rousseau@email.com' },
];


export default function HomeScreen() {
  return (
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.sectionTitle}>Team Profiles</Text>

      <View style={styles.cardContainer}>
        <ProfileCard
          name="Alice"
          jobTitle="React Native Developer"
          imageUrl="https://picsum.photos/200/300"
        />
        <ProfileCard
          name="Lucas"
          jobTitle="React Native Developer"
          imageUrl="https://picsum.photos/200/300"
        />
      </View>
      <Text style={styles.sectionTitle}>My Todo List</Text>

      <View style={styles.todoContainer}>
        <TodoItem text="Learn React Native" />
        <TodoItem text="Build a static UI" />
        <TodoItem text="Practice with StyleSheet" />
        <TodoItem text="Commit final code" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    color: '#333',
  },
  cardContainer: {
    marginBottom: 30,
  },
  todoContainer: {
    marginBottom: 40,
  },
});