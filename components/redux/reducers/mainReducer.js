
const initialState = {
    timer:20,//time in seconds, will be multiplied by thousand
    counter:20
}

export default (state = initialState, action) => {
    switch (action.type) {
        

        case 'saveCounterAndTimer':
            return {
                ...state,
                timer:action.timer,
                counter:action.counter
            }


        default:
            return state

    }
}