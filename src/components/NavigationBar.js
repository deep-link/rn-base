import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleContainer: {
        width: '82%',
        alignItems: 'center',
    },
    navigationIconContainerR: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    navigationIconContainerL: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    backButton: {},
    forwardButton: {},
});

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onPressBack() {
        if (this.props.onPressBack) {
            this.props.onPressBack();
        }
    }

    onPressNext() {
        if (this.props.onPressNext) {
            this.props.onPressNext();
        }
    }

    render() {
        if (this.props.title || this.props.onPressBack || this.props.onPressNext) {
            return (
                <View style={styles.container}>
                    {this.props.onPressBack ? (
                        <TouchableOpacity onPress={() => this.onPressBack()} style={styles.navigationIconContainerL}>
                            <Icon name="ios-arrow-back" size={30}/>
                        </TouchableOpacity>
                    ) : null}
                    <View style={styles.titleContainer}>
                        <Text>{this.props.loading ? "Loading..." : this.props.title ? this.props.title : null} </Text>
                    </View>
                    {this.props.onPressNext ? (
                        <TouchableOpacity onPress={() => this.onPressNext()} style={styles.navigationIconContainerR}>
                            <Icon name="ios-arrow-forward" size={30}/>
                        </TouchableOpacity>
                    ) : null}
                </View>
            );
        } else {
            return null;
        }

    }
}

export default NavigationBar;
