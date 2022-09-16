
const initState = {
    allUsers : []
}

const apiUserReducer = (state = initState, action)=>{ 
switch(action.type){
    case "STORE_USERS":
        return {allUsers : action.payload}
    default:
        return state;
}

        
}

export default apiUserReducer;