import React from 'react';
import {connect} from 'react-redux';

const CounterDisplay = ({myCount}) =>
    <h1>
        Count: {myCount}
    </h1>

const stateToPropertyMapper = (state) => {
    return {
        myCount: state.count
    }

}



export default connect(stateToPropertyMapper)(CounterDisplay);