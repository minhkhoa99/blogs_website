export const AuthActionTypes = {
    API_RESPONSE_SUCCESS: '@@auth/API_RESPONSE_SUCCESS',
    API_RESPONSE_ERROR: '@@auth/API_RESPONSE_ERROR',

    LOGIN_USER: '@@auth/LOGIN_USER',
    LOGOUT_USER: '@@auth/LOGOUT_USER',
    SIGNUP_USER: '@@auth/SIGNUP_USER',
    FORGOT_PASSWORD: '@@auth/FORGOT_PASSWORD',
    FORGOT_PASSWORD_CHANGE: '@@auth/FORGOT_PASSWORD_CHANGE',

    RESET: '@@auth/RESET',

    LOGIN_GOOGLE:'@@auth/LOGIN_GOOGLE',

    GET_DETAILS: '@@auth/GET_DETAILS',
    GET_ALL_PROJECTS: '@@auth/GET_ALL_PROJECTS',
    UPDATE_USER: '@@auth/UPDATE_USER',
    UPDATE_TOKEN: '@@auth/UPDATE_TOKEN',
};