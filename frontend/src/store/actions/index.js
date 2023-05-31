import ACTION_TYPE from '../constants';

export function addCatalogSuccess(items) {
    return {type: ACTION_TYPE.ADD_CATALOG_SUCCESS, payload: {items}}
}

export function addCatalogRequst() {
    return {type: ACTION_TYPE.ADD_CATALOG_REQUEST}
}

export function addCatalogError() {
    return {type: ACTION_TYPE.ADD_CATALOG_ERROR}
}

export function addCategoriesSuccess(categories) {
    return {type: ACTION_TYPE.ADD_CATEGORIES_SUCCESS, payload: {categories}}
}

export function addCategoriesRequest() {
    return {type: ACTION_TYPE.ADD_CATEGORIES_REQUEST}
}

export function addHitSuccess(itemsHit) {
    return {type: ACTION_TYPE.ADD_HIT_SUCCESS, payload: {itemsHit}}
}

export function addHitRequest() {
    return {type: ACTION_TYPE.ADD_HIT_REQUEST}
}

export function addNextItemsSuccess(nextItems) {
    return {type: ACTION_TYPE.ADD_NEXT_ITEMS_SUCCESS, payload: {nextItems}}
}

export function addNextItemsRequest() {
    return {type: ACTION_TYPE.ADD_NEXT_ITEMS_REQUEST}
}

export function fetchCategoryItemsSuccess(categoryItems) {
    return {type: ACTION_TYPE.FETCH_CATEGORY_ITMES_SUCCSESS, payload: {categoryItems}}
}

export function fetchCategoryItemsRequest(id) {
    return {type: ACTION_TYPE.FETCH_CATEGORY_ITMES_REQUEST, payload: {id}}
}

export function setSearchText(text = '') {
    return {type: ACTION_TYPE.SET_SEARCH_TEXT, payload: {text}}
}

export function setRedirectSearch(toggle) {
    return {type: ACTION_TYPE.SET_REDIRECT_SEARCH, payload: {toggle}}
}

export function addToCart() {
    return {type: ACTION_TYPE.ADD_TO_CART}
}

export function removeFromCart() {
    return {type: ACTION_TYPE.REMOVE_FROM_CART}
}

export function setCartQuantity(amount) {
    return {type: ACTION_TYPE.SET_CART_QUANTITY, payload: {amount}}
}

export function redirectToCart(value) {
    return {type: ACTION_TYPE.REDIRECT_TO_CART, payload: {value}}
}

export function setItemLocalStorage(key, value) {
    return {type: ACTION_TYPE.SET_ITEM_LOCALSTORAGE, payload: {key, value}}
}

export function getItemLocalStorage(key) {
    return {type: ACTION_TYPE.GET_ITEM_LOCALSTORAGE, payload: {key}}
}

export function clearLocalStorage() {
    return {type: ACTION_TYPE.CLEAR_LOCALSTORAGE}
}

export function removeItemLocalStorage(key) {
    return {type: ACTION_TYPE.REMOVE_ITEM_LOCALSTORAGE, payload: {key}}
}