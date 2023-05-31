import ACTION_TYPE from '../constants';

const initialState = {
    itemsHit: [],
    loaddingHit: true
}

export default function topSalesReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPE.ADD_HIT_SUCCESS:
            const { itemsHit } = action.payload;
            return { ...state, itemsHit: itemsHit, loaddingHit: false };
        case ACTION_TYPE.ADD_HIT_REQUEST:
            return { ...state, loaddingHit: true };
        default:
            return state;
    }
}