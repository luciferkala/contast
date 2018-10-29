import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TodoItem extends React.Component {
  render() {
    return (
        <View style={styles.todoItem}>
            <Text>{this.props.item.schedule}</Text>
            <Text>{this.props.item.date}</Text>
            <Text>{this.props.item.description}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    todoItem:{
        flex: 1,
        backgroundColor: "#ffffff"
    }
});
