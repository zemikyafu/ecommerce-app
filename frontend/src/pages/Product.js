import { Container, CssBaseline, Box } from "@mui/material";
import ProductForm from "../components/product/ProductForm";
const Product = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ProductForm></ProductForm>
      </Box>
    </Container>
  );
};
export default Product;
