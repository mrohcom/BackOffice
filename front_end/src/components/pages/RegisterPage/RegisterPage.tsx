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
import { Employee } from "../../../type/type";
import * as registerActions from "../../../actions/register.action";
import { useDispatch, useSelector } from "react-redux";
import { RootReducers } from "../../../reducers";

type RegisterPageProps = {
  //
};

const RegisterPage: React.FC<any> = () => {
  const registerReducer = useSelector(
    (state: RootReducers) => state.registerReducer
  );

  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  const showFormV1 = (props: FormikProps<Employee>) => {
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
        {registerReducer.isError && (
          <Alert severity="error">Regiser Error</Alert>
        )}
        <br />

        <Stack direction="row" spacing={2}>
          <Button
            type="button"
            fullWidth
            variant="outlined"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={registerReducer.isFetching}
          >
            Create
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
              Register
            </Typography>
            <Formik
              onSubmit={(values, {}) => {
                dispatch(registerActions.register(values, navigate));
              }}
              initialValues={initialValues}
            >
              {(props) => showFormV1(props)}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default RegisterPage;
