const itemReducer = (state = [], action) => {
    console.log(action.payload)
    switch (action.type) {
        case 'SET_ITEMS':
            return action.payload;
        default:
            return state;
    }

}

export default itemReducer;