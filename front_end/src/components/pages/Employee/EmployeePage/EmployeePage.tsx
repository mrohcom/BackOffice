import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type EmployeePageProps = {
  //
};

const EmployeePage: React.FC<any> = () => {
  const [listemlpoyee, setListemlpoyee] = React.useState(false);

  const handleClickOpen = () => {
    setListemlpoyee(true);
  };

  const handleClose = () => {
    setListemlpoyee(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        เพิ่มรายชื่อพนักงาน
      </Button>
      <Dialog
        open={listemlpoyee}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EmployeePage;
