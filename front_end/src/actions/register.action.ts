import {
  OK,
  REGISTER_FAILED,
  REGISTER_FETCHING,
  REGISTER_SUCCESS,
  server,
} from "../Constants";
import { Employee } from "../type/type";
import { httpClient } from "../utils/httpclient";
import { history } from "../index";

export const setRegisterFetchingToState = () => ({
  type: REGISTER_FETCHING,
});

export const setRegisterSuccessToState = (payload: any) => ({
  type: REGISTER_SUCCESS,
  payload,
});

export const setRegisterFailedToState = () => ({
  type: REGISTER_FAILED,
});

export const register = (employee: Employee, navigate: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(setRegisterFetchingToState());
      const result = await httpClient.post(server.REGISTER_URL, employee);
      if (result.data.result === OK) {
        dispatch(setRegisterSuccessToState(result.data));
        navigate("/login");
      } else {
        dispatch(setRegisterFailedToState());
      }
    } catch (err) {
      dispatch(setRegisterFailedToState());
    }
  };
};
