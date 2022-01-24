import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const EditProfile = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/myproduct");
    // save changes to current myproduct
  };

  const handleCancel = () => {
    navigate("/myproduct");
  };

  return (
    <div>
      <Dialog open={true} onClose={handleCancel}>
        <DialogTitle>Add Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="addItemName"
            label="Item Name"
            type="text"
            fullWidth
            variant="standard"
            // mandatory
          />
          <TextField
            autoFocus
            margin="dense"
            id="addItemPrice"
            label="Item Price"
            type="text"
            fullWidth
            variant="standard"
            // mandatory
          />
          <TextField
            autoFocus
            margin="dense"
            id="addItemStock"
            label="Item Stock"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            id="addDescription"
            label="Description"
            type="text"
            multiline
            fullWidth
            maxRows={3}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleAdd}>Add Item</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditProfile;
