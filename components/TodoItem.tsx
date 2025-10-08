import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TodoItemProps{
  text:string;
}

export default function TodoItem({text}:TodoItemProps) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#b2ebf2',
  },
  itemText: {
    fontSize: 16,
    color: '#00796b',
  },
});
