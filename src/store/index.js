import { createStore,combineReducers ,applyMiddleware} from "redux";
import userReducer from "./reducers/userReducer";
import  ThunkMiddleware  from "redux-thunk";
import apiUserReducer from "./reducers/apiUserReducer";
const rootReducer = combineReducers({
    users : userReducer,
    api : apiUserReducer
})

const store = createStore(rootReducer,applyMiddleware(ThunkMiddleware));


export default store;