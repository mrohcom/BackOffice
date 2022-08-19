import * as React from "react";
import {
  ThemeProvider,
  createTheme,
  styled,
  useTheme,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Header from "./components/layouts/Header";
import Menu from "./components/layouts/Menu";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import MeetingRoomPage from "./components/pages/MeetingRoom/MeetingRoomPage";
import MeetingRoomCreatePage from "./components/pages/MeetingRoom/MeetingRoomCreatePage";
import MeetingRoomEditPage from "./components/pages/MeetingRoom/MeetingRoomEditPage";
import ReserveMeetingRoomPage from "./components/pages/MeetingRoom/ReserveMeetingRoomPage";
import ReserveMeetingRoomCreatePage from "./components/pages/MeetingRoom/ReserveMeetingRoomCreatePage";
import ReserveMeetingRoomEditePage from "./components/pages/MeetingRoom/ReserveMeetingRoomEditePage";
import { blue, blueGrey } from "@mui/material/colors";
import RegisterPage from "./components/pages/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { RootReducers } from "./reducers";
import * as loginAction from "./actions/login.action";
import PublicRoutes from "./router/public.routes";
import ProtectedRoutes from "./router/protected.routes";
import NewsPage from "./components/pages/News/NewsPage";
import NewsCreatePage from "./components/pages/News/NewsCreatePage";
import NewsEditePage from "./components/pages/News/NewsEditePage";
import EmployeePage from "./components/pages/Employee/EmployeePage";
import EmployeeCreatepage from "./components/pages/Employee/EmployeeCreatepage";
import EmployeeEditePage from "./components/pages/Employee/EmployeeEditePage";
import Router from "../src/router/Router";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage:
            "url(" +
            `${process.env.PUBLIC_URL}/images/background_menu.jpg` +
            ")",
          width: drawerWidth,
        },
      },
    },
  },
  typography: {
    fontFamily: "Mitr",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
  },
  spacing: 8,
  palette: {
    primary: process.env.REACT_APP_IS_PRODUCTION == "0" ? blue : blueGrey,
    background: {
      default: "#CFD2D6",
    },
  },
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function App() {
  const [open, setOpen] = React.useState(true);
  const dispatch: any = useDispatch();
  const loginReducer = useSelector((state: RootReducers) => state.loginReducer);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    dispatch(loginAction.restoreLogin());
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        {loginReducer.result && (
          <Header open={open} onDrawerOpen={handleDrawerOpen} />
        )}
        {loginReducer.result && (
          <Menu open={open} onDrawerClose={handleDrawerClose} />
        )}

        <Main open={open}>
          <DrawerHeader />

          <Router />
        </Main>
      </Box>
    </ThemeProvider>
  );
}

const NotFound = () => (
  <div>
    <h1>404 - Not Found</h1>
  </div>
);
