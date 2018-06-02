import { addFave, queryFaves, deleteFave } from '../../config/models';

const GET_FAVES = 'GET_FAVES';
const GET_ADD_FAVES = 'GET_ADD_FAVES';
const GET_DELETE_FAVES = 'GET_DELETE_FAVES';
const GET_FAVES_ERROR = 'GET_FAVES_ERROR';

export const get_faves = () => ({
    type: GET_FAVES
});

export const get_add_faves = () => ({
    type: GET_ADD_FAVES
});

export const get_delete_faves = id => ({
    type: GET_DELETE_FAVES,
    payload: id
});

export const get_faves_error = error => ({
    type: GET_FAVES_ERROR,
    payload: error
});

//thunks
export const createFaveSession = faveid => dispatch => {
    try {
        addFave(faveid);
        dispatch(get_faves());
        dispatch(get_add_faves());
    } catch (e) {
        dispatch(get_faves_error(e));
    }
};

export const deleteFaveSession = faveid => dispatch => {
    try {
        deleteFave(faveid);
        dispatch(get_faves());
        dispatch(get_delete_faves());
    } catch (e) {
        dispatch(get_faves_error(e));
    }
};

const initialState = {
    faves: queryFaves(),
    error: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_FAVES: {
            return { ...state, faves: queryFaves(), error: '' };
        }
        case GET_ADD_FAVES:

        case GET_DELETE_FAVES:

        case GET_FAVES_ERROR: {
            return { ...state, error: action.payload };
        }
        default: {
            return { ...state };
        }
    }
};
