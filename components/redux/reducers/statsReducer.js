const initialState = {
    bestTimer: 100,//time in seconds, will be multiplied by thousand
    bestCounter: 20
}

export default (state = initialState, action) => {
    
    switch (action.type) {
    

        case 'newBestTimer':
            
            if (action.bestTimer < state.bestTimer) {
                return {
                    ...state,
                    bestTimer: action.bestTimer

                }
            }
            else{
                return state
            }
            break;
        case 'newBestCounter':
            
            if (action.bestCounter < state.bestCounter) {
                return {
                    ...state,
                    bestCounter: action.bestCounter

                }
            }
            else{
                return state
            }
            break;
            case 'resetBest':
                return{
                    ...state,
                    bestCounter:100,
                    bestTimer:100
                }
        default:
            return state

    }
}