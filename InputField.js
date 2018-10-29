import React from 'react';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

class InputField extends React.Component {
    render() {
        const { labelText, labelTextSize, labelColor, textColor , borderBottomColor, inputType, customStyle} = this.props;
        const fontSize = labelTextSize || 14;
        const color = labelColor || "#2798F7";
        const inputColor = textColor || "#2798F7";
        const borderBottom = borderBottomColor || '#2798F7';
        return(
            <View style={[customStyle, styles.wrapper]}>
                <Text style={[{color, fontSize} , styles.label]}>{labelText}</Text>
                <TextInput autoCorrect={false} style={[{color: inputColor}, borderBottomColor: borderBottom, styles.inputField]}
                secureTextEntry={inputType ==='Password'}
                />
            </View>
        );
    }
}

export default InputField;

InputField.propTypes = {
    labelText: PropTypes.string,
    labelTextSize: PropTypes.number,
    labelColor:PropTypes.string,
    textColor:PropTypes.string,
    borderBottomColor: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    customStyle: PropTypes.object
};

const styles = StyleSheet.create({
    wrapper:{
        display: 'flex'
    },
    label: {
        fontWeight: '700',
        marginBottom: 10
    },
    inputField:{
        borderBottomColor: "#2798F7",
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5
    }
});