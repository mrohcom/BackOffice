import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, FormikProps } from "formik";
import { Box } from "@mui/system";
import {
  Alert,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import * as loginActions from "../../../actions/login.action";
import { Employee } from "../../../type/type";
import { RootReducers } from "../../../reducers";
import { useDispatch, useSelector } from "react-redux";

type LoginPage = {
  //
};

const LoginPage: React.FC<any> = () => {
  const loginReducer = useSelector((state: RootReducers) => state.loginReducer);
  const dispatch: any = useDispatch();

  const navigate = useNavigate();
  const showForm = (props: FormikProps<Employee>) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          onChange={props.handleChange}
          value={props.values.username}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          onChange={props.handleChange}
          value={props.values.password}
          type="password"
        />

        {loginReducer.isError && <Alert severity="error">Login Error</Alert>}

        <br />
        <Stack direction="row" spacing={2}>
          <Button
            type="button"
            fullWidth
            variant="outlined"
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loginReducer.isFetching}
          >
            Login
          </Button>
        </Stack>
      </form>
    );
  };

  const initialValues: Employee = { username: "", password: "" };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Login
            </Typography>
            <Formik
              onSubmit={(values, {}) => {
                dispatch(loginActions.login(values, navigate));
              }}
              initialValues={initialValues}
            >
              {(props) => showForm(props)}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default LoginPage;
