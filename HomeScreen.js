import React from 'react';
import { StyleSheet, Text, ScrollView, View , TouchableWithoutFeedback} from 'react-native';
import { Card } from 'react-native-elements';

class HomeScreen extends React.Component {
    state = {
        names: [
           {'name': 'Data Structure', 'id': 1, 'homework': 'Test : Until 10/30'},
           {'name': 'Calculate', 'id': 2, 'homework': 'Report : Until 10/31'},
           {'name': 'Physics', 'id': 3, 'homework': 'Test : Until 11/7'},
           {'name': 'Programming', 'id': 4, 'homework': 'Report : Until 11/2'},
           {'name': 'DataBase', 'id': 5, 'homework': 'Test : Until 10/30'},
           {'name': 'Web', 'id': 6 , 'homework': 'Report : Until 10/31'},
           {'name': 'Big Data', 'id': 7 , 'homework': 'Presentation : Until 12/30'},
           {'name': 'Computer Science', 'id': 8, 'homework': 'Test : Until 11/20'}
        ]
     }
     render() {
         let subject = this.state.names;
        return (
           <View style={styles.container}>
              <ScrollView style={styles.subjectList}>
                 {  
                    this.state.names.map((item, index) => (
                        <TouchableWithoutFeedback key = {item.id} onHideUnderlay = ''
                        onPress = {() => {this.props.navigation.navigate('Subject', { subject : subject , index : index})}}>
                            <Card key = {item.id} style = {styles.item} title = {item.name}>
                                    <Text>{item.homework}</Text>
                            </Card>
                        </TouchableWithoutFeedback>
                    ))
                 }
              </ScrollView>
           </View>
        )
     }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ffffff"
    },
    subjectList: {
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 30,
        margin: 2,
        borderColor: '#ffffff',
        borderWidth: 1,
        backgroundColor: '#ffffff'
  },
});
