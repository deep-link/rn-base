import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {UIActivityIndicator} from 'react-native-indicators';

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#3759ff',
        marginVertical:20,
        marginHorizontal:20,
        padding:10,
        borderRadius:10
    },

});

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onPress(event) {
        if (this.props.onPress) {
            this.props.onPress(event);
        }
    }

    render() {
        const disabled = this.props.loading || this.props.disabled;
        return (
            <TouchableOpacity
                disabled={disabled}
                onPress={(event) => this.onPress(event)}
                style={[styles.button, this.props.btnStyles, disabled ? {backgroundColor: this.props.disabledColor} : {}]}>
                {this.props.loading === true ? (
                    <UIActivityIndicator
                        size={this.props.contentSize ? this.props.contentSize : 20}
                        style={this.props.loadingStyle}/>) : null}
                {this.props.loading !== true && this.props.icon ? this.props.icon() : null}
                {this.props.loading ? null : (
                    <Text
                        style={[
                            styles.title,
                        ]}>
                        {this.props.title}
                    </Text>)}
            </TouchableOpacity>
        );
    }
}

export default Button;
