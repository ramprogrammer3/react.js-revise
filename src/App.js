import { Provider } from "react-redux"
import Form from "./Form"
import store from "./store"
import User from "./User"
const App = () => {
  return (
     <Provider store={store}>
        <div className="container">
          <Form />
          <User />
        </div>
     </Provider>
  ) 
}

export default App