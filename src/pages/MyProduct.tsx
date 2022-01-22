import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

const MyProduct = () => {
  const navigate = useNavigate();
  
  const handleAddItem = () => {
    navigate("/additem");
  }

  return (
    <div>
      <div>
        <Button
          onClick={() => handleAddItem()}
          variant="contained" size="small">Add Item
        </Button>
      </div>
    </div>
  );
};

export default MyProduct;
