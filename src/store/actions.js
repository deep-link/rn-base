import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import RESET_ALL from './index';
import {AUTH_TOKEN_KEY} from '../Constants';
import ServerAxios from '../network/ServerAxios';


export const EXAMPLE_ACTION_LOADING = 'EXAMPLE_ACTION_LOADING';
export const EXAMPLE_ACTION_DONE = 'EXAMPLE_ACTION_DONE';
export const EXAMPLE_ACTION_ERROR = 'EXAMPLE_ACTION_ERROR';

const initState = {
    loading: false,
    errorMessage: null,
    errors: null,


    sampleResponse: null,
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case RESET_ALL:
            return initState;

        case EXAMPLE_ACTION_LOADING:
            return {...state, loading: action.payload};
        case EXAMPLE_ACTION_DONE:
            return {...state, loading: false, sampleResponse: action.payload};
        case EXAMPLE_ACTION_ERROR:
            return {...state, loading: false, errorMessage: action.payload.errorMessage, errors: action.payload.errors};

        default:
            return state;
    }
};

export const getAuthToken = () => async (dispatch) => {
    return await AsyncStorage.getItem(AUTH_TOKEN_KEY);
};

export const exampleAction = () => async (dispatch) => {
    try {
        dispatch({type: EXAMPLE_ACTION_LOADING, payload: true});
        let response = await ServerAxios.post('/auth/form-data/signup');
        const {data, errorMessage, errors} = await resolveResponse(response);
        if (errorMessage || errors) {
            dispatch(showNotification(errorMessage));
            return dispatch({
                type: EXAMPLE_ACTION_ERROR,
                payload: {
                    errorMessage: errorMessage,
                    errors: errors,
                },
            });
        }
        return dispatch({
            type: EXAMPLE_ACTION_DONE,
            payload: data,

        });
    } catch (e) {

        return dispatch({
            type: EXAMPLE_ACTION_ERROR,
            payload: {
                errorMessage: UNKNOWN_EXCEPTION_MESSAGE,
                errors: null,
            },
        });
    }
};
