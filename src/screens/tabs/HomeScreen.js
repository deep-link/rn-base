import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/Container';
import {bindActionCreators} from 'redux';
import {getAuthToken} from '../../store';
import {connect} from 'react-redux';
import Input from '../../components/Input';
import Button from '../../components/Button';

const styles = StyleSheet.create({});

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container
                onPressSideBarRight={() => {
                    this.props.navigation.toggleDrawer();
                }}
                title={'Home Screen'}
                loading={false}>
                <Input
                    onChangeText={(text) => {
                        console.log(text);
                    }}
                    value={'hiiii'}
                    errors={[
                        'this is a error'
                    ]}
                />


                <Button
                title={"this is a button"}
                onPress={()=>{
                    console.log('here')
                }}
                />
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
