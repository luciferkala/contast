import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import TodoItem from './TodoItem.js';
const TodoListData =  [
  { "schedule": "Assignment",
    "date" : "10/30",
    "description": "To make App",
    "key" : "0"
  },
  { "schedule": "Report",
    "date" : "11/30",
    "description": "To write Algorithm",
    "key" : "1"
  },
  { "schedule": "Presentaion",
    "date" : "12/20",
    "description": "To Presentation Shit",
    "key" : "2"
  },
  { "schedule": "Quiz",
    "date" : "11/5",
    "description": "To Evaluate Achievement",
    "key" : "3"
  },
  { "schedule": "Report",
    "date" : "11/27",
    "description": "To make Shit",
    "key" : "4"
  },
  { "schedule": "Presentation",
    "date" : "11/ 18",
    "description": "What is LOL?",
    "key" : "5"
  },
  { "schedule": "Test",
    "date" : "12/25",
    "description": "To Evaluate what you have girlfriend",
    "key" : "6"
  },
  { "schedule": "Assignment",
    "date" : "12/7",
    "description": "To play Battleground",
    "key" : "7"
  } 
]


class SubjectScreen extends React.Component {
  render() {
    subjectName = this.props.navigation.getParam("subject")[this.props.navigation.getParam("index")].name;
  return (
      <View style = {styles.container}>
        <Text style = {styles.title}>{subjectName}</Text>
        <FlatList style={styles.list} data = {TodoListData}
                  renderItem = {({item, index}) => {
                    return(<TodoItem item={item} index={index} >

                    </TodoItem>
                    );
                  }}
        >
          
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
    color: "skyblue",
    fontSize : 25,
    fontWeight : "600",
    paddingLeft: 25,
    paddingTop: 15,
    paddingBottom: 20
  },
  list: {
    width:"100%"
  }

});
