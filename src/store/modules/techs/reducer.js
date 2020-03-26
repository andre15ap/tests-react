export const INITIAL_STATE = [];

export default function techs(state = INITIAL_STATE, action) {

    switch(action.type) {
        case 'ADD_TECH':
            return [...state, action.payload.tech];
        default:
            return state;
    }
  
}