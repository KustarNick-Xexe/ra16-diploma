import ACTION_TYPE from '../constants';

const initialState = {
    data: ''
}

export default function localStorageReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPE.SET_ITEM_LOCALSTORAGE:
            const { newKey, value } = action.payload;
            localStorage.setItem(newKey, value)
            return { ...state }
        case ACTION_TYPE.GET_ITEM_LOCALSTORAGE:
            const { key } = action.payload;
            const keyValue = JSON.parse(localStorage.getItem(key));
            return { ...state, data: keyValue }
        default:
            return state;
    }
}