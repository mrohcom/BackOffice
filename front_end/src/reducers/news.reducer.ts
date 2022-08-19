import { NEWS_FAILED, NEWS_FETCHING, NEWS_SUCCESS } from "../Constants";

export interface NewsState {
  isFetching: boolean;
  isError: boolean;
  result: any;
}

const initialState: NewsState = {
  isFetching: false,
  isError: false,
  result: null,
};

export default (state = initialState, { type, payload }: any): NewsState => {
  switch (type) {
    case NEWS_FETCHING:
      return { ...state, isFetching: true, isError: false, result: null };
    case NEWS_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: null };
    case NEWS_FAILED:
      return { ...state, isFetching: false, isError: true, result: null };
    default:
      return state;
  }
};
