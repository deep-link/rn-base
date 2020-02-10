import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import Container from '../../components/Container';
import {bindActionCreators} from 'redux';
import {getAuthToken} from '../../store';
import {connect} from 'react-redux';

const styles = StyleSheet.create({});

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    async componentDidMount(): void {
        if (await this.props.getAuthToken() !== null) {
            this.props.navigation.navigate('App');
        }
    }

    render() {
        return (
            <Container>
                <Text>LoginScreen</Text>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        actions: state.actions,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAuthToken,
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginScreen);
