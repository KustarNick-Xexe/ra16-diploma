import ACTION_TYPE from '../constants';

const initialState = {
    categories: [],
    itemsHit: [],
    itemsAll: [],
    loaddingHit: null,
    nextItemsLength: null,
    offset: null,
    currentCategory: null,
    loaddingCatalog: null,
    textSearch: { text: '', redirect: false }
}

export default function catalogReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPE.ADD_CATALOG_SUCCESS:
            const { items } = action.payload;
            return { ...state, itemsAll: items, currentCategory: null, nextItemsLength: items.length, offset: items.length, loaddingCatalog: false }
        case ACTION_TYPE.ADD_CATALOG_REQUEST:
            return { ...state, loaddingCatalog: true }
        case ACTION_TYPE.ADD_CATEGORIES_SUCCESS:
            const { categories } = action.payload;
            return { ...state, categories: categories };
        case ACTION_TYPE.ADD_NEXT_ITEMS_REQUEST:
            return { ...state, loaddingCatalog: true }
        case ACTION_TYPE.ADD_NEXT_ITEMS_SUCCESS:
            const { nextItems } = action.payload;
            return { ...state, itemsAll: [...state.itemsAll, ...nextItems], nextItemsLength: nextItems.length, offset: state.offset + 6, loaddingCatalog: false };
        case ACTION_TYPE.FETCH_CATEGORY_ITMES_SUCCSESS:
            const { categoryItems } = action.payload;
            return { ...state, itemsAll: categoryItems, nextItemsLength: categoryItems.length, offset: categoryItems.length, loaddingCatalog: false }
        case ACTION_TYPE.FETCH_CATEGORY_ITMES_REQUEST:
            const { id } = action.payload;
            return { ...state, currentCategory: id, loaddingCatalog: true }
        case ACTION_TYPE.SET_SEARCH_TEXT:
            const { text } = action.payload;
            return { ...state, textSearch: { ...state.textSearch, text: text } }
        case ACTION_TYPE.SET_REDIRECT_SEARCH:
            const { toggle } = action.payload;
            return { ...state, textSearch: { ...state.textSearch, redirect: toggle } }
        default:
            return state;
    }
}