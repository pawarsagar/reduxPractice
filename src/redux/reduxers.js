import React, { Component } from 'react';
import action from './actions'

const initialState = {
    count: 25
}


export const reducerADD = (state = initialState, action) => {

    const newState = { ...state }
    if (action.type == 'ADD') {
        newState.count++;
    }

    return newState


}
export const reducerSUB = (state = initialState, action) => {

    const newState = { ...state }

    if (action.type == 'SUB') {
        newState.count--;
    }

    return newState


}

// export default reducer