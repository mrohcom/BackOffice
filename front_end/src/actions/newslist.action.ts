import {
  OK,
  NEWSLIST_FAILED,
  NEWSLIST_FETCHING,
  NEWSLIST_SUCCESS,
  server,
} from "../Constants";

import { News } from "../type/type";
import { httpClient } from "../utils/httpclient";

export const setNewsListFetchingToState = () => ({
  type: NEWSLIST_FETCHING,
});
export const setNewsListSuccessToState = (payload: any) => ({
  type: NEWSLIST_SUCCESS,
  payload: payload,
});
export const setNewsListFailedToState = () => ({
  type: NEWSLIST_FAILED,
});

export const newslist = () => {
  return async (dispatch: any) => {
    try {
      dispatch(setNewsListFetchingToState());
      const result = await httpClient.get(server.NEWSLISTINSERT_URL);
      // console.log("teset");
      // console.log(result.data);
      dispatch(setNewsListSuccessToState(result.data));
    } catch (err) {
      dispatch(setNewsListFailedToState());
    }
  };
};
