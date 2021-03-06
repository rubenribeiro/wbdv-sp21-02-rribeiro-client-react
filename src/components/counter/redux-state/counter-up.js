import React from 'react';
import { connect } from 'react-redux';


const CounterUp = ({up}) =>
    <button onClick={up}>Up</button>

const stateToPropertyMapper = () => {};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        up: () => {
            dispatch({type: "UP"})
        }
    }
}
export default connect(stateToPropertyMapper, dispatchToPropertyMapper)(CounterUp);