import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import Container from '../../components/Container';
import {getAuthToken} from '../../store';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const styles = StyleSheet.create({});

class ScreenOne extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Text>ScreenOne</Text>
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
)(ScreenOne);
