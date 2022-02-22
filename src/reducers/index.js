const initialState ={
    currentTheme : true,
};

export default function rootReducer(state = initialState,action){
    switch(action.type){
        case 'CHANGE-THEME':
            return{
                ...state,
                currentTheme : action.payload
            }
        default:
            return state;
    }
}