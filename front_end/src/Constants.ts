// Success Page
export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";

// Register Page
export const REGISTER_FETCHING = "REGISTER_FETCHING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

// News Page
export const NEWS_FETCHING = "NEWS_FETCHING";
export const NEWS_SUCCESS = "NEWS_SUCCESS";
export const NEWS_FAILED = "NEWS_FAILED";

//Newslist
export const NEWSLIST_FETCHING = "NEWSLIST_FETCHING";
export const NEWSLIST_SUCCESS = "NEWSLIST_SUCCESS";
export const NEWSLIST_FAILED = "NEWSLIST_FAILED";

export const apiUrl = "http://localhost:8080/api/v";
export const imageUrl = "http://localhost:8080";

export const YES = "YES";
export const NO = "NO";
export const OK = "ok";
export const NOK = "nok";
export const TOKEN = "TOKEN";

export const LOGIN_STATUS = "LOGIN_STATUS";

export const server = {
  LOGIN_URL: `employee/login`,
  REGISTER_URL: `employee/register`,
  NEWSINSERT_URL: `news/update`,
  NEWSLISTINSERT_URL: `news/listnew`,
  PRODUCT_URL: `stock/product`,
  TRANSACTION_URL: `transaction`,
  REPORT_URL: `stock/report`,
  LOGIN_PASSED: `yes`,
};

// Error Code
export const E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
export const E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR =
  "E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR";
export const E_PERMISSION_MISSING = "E_PERMISSION_MISSING";
export const E_PICKER_NO_CAMERA_PERMISSION = "E_PICKER_NO_CAMERA_PERMISSION";
export const E_USER_CANCELLED = "E_USER_CANCELLED";
export const E_UNKNOWN = "E_UNKNOWN";
export const E_DEVELOPER_ERROR = "E_DEVELOPER_ERROR";
export const TIMEOUT_NETWORK = "ECONNABORTED"; // request service timeout
export const NOT_CONNECT_NETWORK = "NOT_CONNECT_NETWORK";

//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE =
  "Cannot connect to server, Please try again.";
export const NETWORK_TIMEOUT_MESSAGE =
  "A network timeout has occurred, Please try again.";
export const UPLOAD_PHOTO_FAIL_MESSAGE =
  "An error has occurred. The photo was unable to upload.";
