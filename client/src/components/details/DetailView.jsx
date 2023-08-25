import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

// Designing
import { Box, Grid, styled } from "@mui/material";
import ActionItem from "./ActionItem";

const Component = styled(Box)`
  background: "#f2f2f2";
  margin-top: 55px;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#ffffff",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const RightContainer = styled(Grid)`
  margin-top: 50px;
  padding-left: 30px;
`;

const DetailView = () => {
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.getProductDetails);
  const { id } = useParams();

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, loading, product]);
  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
