import ACTION_TYPE from '../constants';

const initialState = {
    quantity: 0,
    redirect: false,
    owner: {
        phone: '',
        address: ''
    }
}

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPE.ADD_TO_CART:
            return { ...state, quantity: state.quantity + 1 }
        case ACTION_TYPE.REMOVE_FROM_CART:
            return { ...state, quantity: state.quantity - 1 }
        case ACTION_TYPE.REDIRECT_TO_CART:
            const { value } = action.payload;
            return { ...state, redirect: value }
        case ACTION_TYPE.SET_CART_QUANTITY:
            const { amount } = action.payload;
            return { ...state, quantity: amount }
        default:
            return state
    }
}