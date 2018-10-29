import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { Card, ListItem} from 'react-native-elements';
import HomeScreen from './HomeScreen.js';
import { FlatList } from 'react-native-gesture-handler';

const flatListData = {
  
}

class SubjectScreen extends React.Component {
  render() {
    subjectName = this.props.navigation.getParam("subject")[this.props.navigation.getParam("index")].name;
  return (
      <View style = {styles.container}>
        <Text style = {styles.title}>{subjectName}</Text>
        <FlatList>
          
        </FlatList>
      </View>
    );
  }
}
export default SubjectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title : {
    fontSize : 25,
    marginLeft: 25,
    marginTop: 15,
    marginBottom: 40
  },

});
