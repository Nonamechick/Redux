const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';
// State
const initialState = {
    loading: false,
    products:[],
    error:false
}

// Actions
function fetchRequest() {
    return {
        type: FETCH_REQUEST,

    }
}
function fetchSuccess() {
    return {
        type: FETCH_SUCCESS,
        
    }
}
function fetchError() {
    return {
        type: FETCH_ERROR,
        
    }
}