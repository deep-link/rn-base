import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import Container from '../../components/Container';
import {bindActionCreators} from 'redux';
import {getAuthToken} from '../../store';
import {connect} from 'react-redux';

const styles = StyleSheet.create({});

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container
                onPressBack={()=>{}}
                title={'Home Screen'}
                loading={false}>
                <Text>HomeScreen</Text>
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
)(HomeScreen);
