import React from 'react';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

class InputField extends React.Component {
    render() {
        const { labelText, labelTextSize, labelColor } = this.props;
        const fontSize = labelTextSize || 14;
        const color = labelColor || "#2798F7";
        return(
            <View style={styles.wrapper}>
                <Text style={[{color, fontSize} , styles.label]}>{labelText}</Text>
            </View>
        );
    }
}

export default InputField;

InputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor:PropTypes.string
};

const styles = StyleSheet.create({
    wrapper:{
        display: 'flex'
    },
    label: {
        fontWeight: '700',
        marginBottom: 10
    }
});