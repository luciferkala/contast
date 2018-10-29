import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TodoItem extends React.Component {
  render() {
    return (
        <View style={styles.toDo}>
            <Text style={styles.toDoItem}>{this.props.item.schedule}</Text>
            <Text style={styles.toDoItem}>{this.props.item.date}</Text>
            <Text style={styles.toDoItem}>{this.props.item.description}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
        toDo:{
            marginLeft: 25,
            marginTop: 15,
          
        },   
        toDoItem: {
            fontSize: 15,

    }
});
