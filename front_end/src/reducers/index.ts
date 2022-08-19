import { combineReducers } from "redux";
import registerReducer, { RegisterState } from "./register.reducer";
import loginReducer, { LoginState } from "./login.reducer";
import newsReducer, { NewsState } from "./news.reducer";
import newslistReducer, { NewslistState } from "./newslist.reducer";

export default combineReducers({
  registerReducer,
  loginReducer,
  newsReducer,
  newslistReducer,
});

export interface RootReducers {
  registerReducer: RegisterState;
  loginReducer: LoginState;
  newsReducer: NewsState;
  newslistReducer: NewslistState;
}
