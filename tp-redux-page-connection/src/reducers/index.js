import { CONNECTION, DECONNECTION } from "../actions/Types";

const initState = {token : null, connected : false};

const Auth = (state = initState, action) => {

    if( action.type === CONNECTION ) {
        return {
            token: action.token,
            connected: true
        };
    }
    if (action.type === DECONNECTION ) {
        return {
            token: null,
            connected: false
        };
    }
    
    return state
}

export default Auth;