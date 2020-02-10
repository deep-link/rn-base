import React, {Component} from 'react';
import {Image, KeyboardAvoidingView, RefreshControl, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import NavigationBar from './NavigationBar';
import {UIActivityIndicator} from 'react-native-indicators';

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    loading: {},
    container: {
        width: '100%',
        height: '100%',
    },
    logoContainer: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 50,
    },
    mainLogo: {},
});

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onPressNext() {
        if (this.props.onPressNext) {
            this.props.onPressNext();
        }
    }

    onPressBack() {
        if (this.props.onPressBack) {
            this.props.onPressBack();
        }
    }

    onRefresh() {
        if (this.props.onRefresh) {
            this.props.onRefresh();
        }
    }

    render() {
        return (
            <SafeAreaView>
                <KeyboardAvoidingView behavior="padding" enabled={true}>
                    <View style={styles.mainContainer}>
                        <NavigationBar
                            title={this.props.title}
                            loading={this.props.loading}
                            onPressBack={this.props.onPressBack ? () => this.onPressBack() : false}
                            onPressNext={this.props.onPressNext ? () => this.onPressNext() : false}
                        />
                        {this.props.loading ? (
                            <View style={styles.container}>
                                <UIActivityIndicator
                                    style={styles.loading}
                                    color={'#808080'}
                                    size={200}/>
                            </View>
                        ) : (
                            <ScrollView
                                style={styles.container}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={this.props.refreshing}
                                        onRefresh={() => this.onRefresh()}
                                    />
                                }>
                                {this.props.children}
                            </ScrollView>
                        )}
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

export default Container;
