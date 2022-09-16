
const initState = {
    users : [
        {
            id : 1, name : "ram kumar ", address  : "Noida "
        }
    ]
}
const userReducer = (state = initState, action) =>{
    switch(action.type){
        case 'ADD_USER':
            return {users : [action.payload ,...state.users]};
        case 'DELETE_USER':
            const newUser = state.users.filter(user => user.id !== action.id);
            return {users : newUser}    
        default:
            return state;
    }
}

export default userReducer;