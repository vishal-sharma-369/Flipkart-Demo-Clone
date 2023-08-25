import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px",
  width: "100%",
});

const StyleButton = styled(Button)(({ theme }) => ({
  width: "50%",
  height: "50px",
  borderRadius: "2px",
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
}));

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = product;
  const [quantity, setQuantity] = useState(1);

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };
  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
          position: "relative",
          display: "flex",
        }}
      >
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
        <StyleButton
          variant="contained"
          style={{ background: "#ff9f00" }}
          onClick={() => addItemToCart()}
        >
          <ShoppingCartIcon />
          Add to Cart
        </StyleButton>
        <StyleButton variant="contained" style={{ background: "#fb541b" }}>
          <FlashOnIcon />
          Buy Now
        </StyleButton>
      </Box>
    </LeftContainer>
  );
};

export default ActionItem;
