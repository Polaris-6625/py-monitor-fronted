/* eslint-disable @typescript-eslint/no-explicit-any */
import {createStore} from "@apiknight/store/lib/index"
const initState: any[] = []

function reducer(state = initState, action: any) {
    switch (action.type) {
        case 'add':
            return [action.payload,...state];
        case 'minus':
            return state.filter(item => item !== action.payload);
        default:
            return state;
    }
}

const tableStore = createStore(reducer)

export {tableStore};