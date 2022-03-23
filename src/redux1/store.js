import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import productsReducer from "./reducers/products.reducer"
import userReducer from "./reducers/user.reducer"

//import { getUser } from "./redux/actions/user.action";

//Je combine tous les reducers pour en avoir un seul qui sera utile pour la création du store
const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer
})

//Je crée le store avec le state et le reducer
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

//store.dispatch(getProducts())
//getUser({email: 'ric1@test.fr', password: '1234'}))

export default store