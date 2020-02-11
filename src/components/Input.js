import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    fieldContainer: {
        flexDirection: 'row',
        flex: 1,
        borderWidth:1,
        borderColor:'#575757'
    },
    errorContainer: {
        paddingHorizontal: 10,
    },
    iconContainer: {
        width: '10%',
    },
    inputContainer: {
        width: '90%',
        paddingHorizontal: 10,

    },
    input: {
        height: 30,
        justifyContent: 'center',
    },
    error: {
        color: '#ff3336',
    },
});

class Input extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    onChangeText(text) {
        if (this.props.onChangeText) {
            this.props.onChangeText(text);
        }
    }

    onBlur(event) {
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    }

    renderErrors() {
        let errors = [];
        for (let i in this.props.errors) {
            errors.push(
                <View style={[styles.errorContainer, this.props.errorContainerStyles]}>
                    <Text style={[styles.error, this.props.error]}>{this.props.errors[i]}</Text>
                </View>);
        }
        return errors;
    }

    render() {

        return (
            <View style={[styles.container, this.props.style]}>
                <View style={styles.fieldContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            secureTextEntry={this.props.secureTextEntry}
                            style={[styles.input]}
                            placeholder={this.props.placeholder}
                            value={this.props.value}
                            onBlur={(event) => this.onBlur(event)}
                            keyboardType={this.props.keyboardType}
                            editable={this.props.disable ? false : true}
                            maxLength={this.props.maxLength ? this.props.maxLength : null}
                            spellCheck={this.props.spellCheck} // because of android pop up some issues if this true
                            onChangeText={(text) => this.onChangeText(text)}/>
                    </View>
                </View>
                {this.renderErrors()}

            </View>
        );
    }
}

export default Input;
