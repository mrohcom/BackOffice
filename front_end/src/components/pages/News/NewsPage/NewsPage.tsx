import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Stack, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { News } from "../../../../type/type";
import { Formik, FormikProps } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as newsActions from "../../../../actions/news.action";
import * as newslistActions from "../../../../actions/newslist.action";
import { RootReducers } from "../../../../reducers";
import { v4 as uuidv4 } from "uuid";

type NewsPageProps = {
  //
};

const NewsPage: React.FC<any> = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const [open, setOpen] = React.useState(false);

  const newslistReducer = useSelector(
    (state: RootReducers) => state.newslistReducer
  );

  const LoginStateReducer = useSelector(
    (state: RootReducers) => state.loginReducer
  );
  React.useEffect(() => {
    dispatch(newslistActions.newslist());
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const newsForm = (props: FormikProps<any>) => {
    return (
      <>
        <form onSubmit={props.handleSubmit}>
          {/* <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="newstitle"
          label="หัวข้อข่าว"
          onChange={props.handleChange}
          value={props.values.newstitle}
        />
        <TextField
          label="รายละเอียด"
          id="newsdetail"
          multiline
          fullWidth
          rows={10}
          onChange={props.handleChange}
          value={props.values.newsdetail}
        />
        <br />
        <br />
        <Stack direction="row" spacing={2}>
          <Button
            type="button"
            fullWidth
            variant="outlined"
            onClick={() => handleClose()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => {
              handleClose();
              navigate("/news");
            }}
            // disabled={registerReducer.isFetching}
          >
            Create
          </Button>
        </Stack> */}
        </form>
      </>
    );
  };
  return (
    <Box>
      <Typography>
        <Button variant="contained" onClick={handleClickOpen}>
          ประกาศข่าวสารบริษัท
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"ประกาศข่าวสารบริษัท"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <Formik
                onSubmit={(values, { setSubmitting }) => {
                  dispatch(newsActions.news(values, navigate));
                }}
                initialValues={{ newstitle: "", newsdetail: "" }}
              >
                {(props) => newsForm(props)}
              </Formik>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Typography>
      <br />

      {newslistReducer.result.map((item: any) => {
        return (
          <React.Fragment key={uuidv4()}>
            <Card key={uuidv4()}>
              <CardContent key={uuidv4()}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  key={uuidv4()}
                >
                  {item.newstitle}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  key={uuidv4()}
                >
                  {item.newsdetail}
                </Typography>
              </CardContent>
            </Card>
            <br key={uuidv4()} />
          </React.Fragment>
        );
      })}
    </Box>
  );
};

export default NewsPage;
