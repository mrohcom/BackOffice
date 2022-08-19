import {
  OK,
  LOGIN_FAILED,
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  server,
  TOKEN,
  LOGOUT,
} from "../Constants";
import { LoginResult } from "../type/authen.type";
import { Employee } from "../type/type";
import { httpClient } from "../utils/httpclient";

export const setLoginFetchingToState = () => ({
  type: LOGIN_FETCHING,
});

export const setLoginSuccessToState = (payload: LoginResult) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const setLoginFailedToState = () => ({
  type: LOGIN_FAILED,
});

export const setLogoutToState = () => ({
  type: LOGOUT,
});

export const login = (employee: Employee, navigate: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(setLoginFetchingToState());
      const result = await httpClient.post<LoginResult>(
        server.LOGIN_URL,
        employee
      );
      if (result.data.result === OK) {
        localStorage.setItem(TOKEN, result.data.token!);
        dispatch(setLoginSuccessToState(result.data));
        navigate("/reservemeetingroom");
      } else {
        dispatch(setLoginFailedToState());
      }
    } catch (err) {
      dispatch(setLoginFailedToState());
    }
  };
};

export const restoreLogin = () => {
  return (dispatch: any) => {
    const token = localStorage.getItem(TOKEN);
    if (token) {
      dispatch(
        setLoginSuccessToState({ result: OK, token, message: "Login Okay" })
      );
    }
  };
};

export const logout = (navigate: any) => {
  return (dispatch: any) => {
    localStorage.removeItem(TOKEN);
    dispatch(setLogoutToState());
    alert("Logout Okay");
    navigate("/login");
  };
};
