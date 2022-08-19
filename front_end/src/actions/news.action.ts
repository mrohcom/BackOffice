import {
  OK,
  NEWS_FAILED,
  NEWS_FETCHING,
  NEWS_SUCCESS,
  NEWSLIST_SUCCESS,
  server,
} from "../Constants";

import { News } from "../type/type";
import { httpClient } from "../utils/httpclient";
import { setNewsListSuccessToState } from "./newslist.action";

export const setNewsFetchingToState = () => ({
  type: NEWS_FETCHING,
});
export const setNewsSuccessToState = () => ({
  type: NEWS_SUCCESS,
});
export const setNewsFailedToState = () => ({
  type: NEWS_FAILED,
});

export const news = (news: News, navigate: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(setNewsFetchingToState());
      const result = await httpClient.post(server.NEWSINSERT_URL, news);
      dispatch(setNewsSuccessToState());
      console.log(result.data);
      dispatch(setNewsListSuccessToState(result.data));
    } catch (err) {
      dispatch(setNewsFailedToState());
    }
  };
};
