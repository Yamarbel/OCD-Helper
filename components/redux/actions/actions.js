export const saveCounterAndTimer = (counter,timer) => {
    return {
        type:'saveCounterAndTimer',
        counter:counter,
        timer:timer
    }
}

export const newBestTimer=(timer)=>{
    return{
        type:'newBestTimer',
        bestTimer:timer
    }
}

export const newBestCounter=(counter)=>{
    return{
        type:'newBestCounter',
        bestCounter:counter
    }
}

export const resetBest=()=>{
    return{
        type:'resetBest'
    }
}