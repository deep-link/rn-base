import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import Navigation from './src/Navigation';


export default class App extends React.Component {


    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Provider store={store}>
                <Navigation/>
            </Provider>
        );
    }
}
