import {Action} from 'redux';


type CounterAction =
    | {type: 'INCREMENT'}
    | {type: 'DECREMENT'};


export function counterReducer(state : number = 0, action : Action) {
    switch(action.type){
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
}