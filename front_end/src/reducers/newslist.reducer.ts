import {
  NEWSLIST_FAILED,
  NEWSLIST_FETCHING,
  NEWSLIST_SUCCESS,
} from "../Constants";

export interface NewslistState {
  isFetching: boolean;
  isError: boolean;
  result: any;
}

const initialState: NewslistState = {
  isFetching: false,
  isError: false,
  result: [],
};

export default (
  state = initialState,
  { type, payload }: any
): NewslistState => {
  switch (type) {
    case NEWSLIST_FETCHING:
      return { ...state, isFetching: true, isError: false, result: [] };
    case NEWSLIST_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: payload };
    case NEWSLIST_FAILED:
      return { ...state, isFetching: false, isError: true, result: [] };
    default:
      return state;
  }
};
