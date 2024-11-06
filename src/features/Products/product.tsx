import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProducts,
  selectLoading,
  selectError,
} from "./productSlice.tsx";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Skeleton,
  Box,
  Button,
} from "@mui/material";
import { RootState, AppDispatch } from "../../store/Store.tsx";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar.tsx";



const ProductList: React.FC = () => {
  
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => selectProducts(state));
  const loading = useSelector((state: RootState) => selectLoading(state));
  const error = useSelector((state: RootState) => selectError(state));

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  

  return (
    <><Navbar /><div>

      <Grid container spacing={2}>
        {loading ? (
          [...Array(6)].map((_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Skeleton variant="rectangular" height={400} />
            </Grid>
          ))
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={3} mt={8} key={product.id}>
              <Card sx={{ maxWidth: 250, minHeight: 400, borderRadius: 2 }}>
                <Link to={`/products/${product.id}`}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      height: 200,
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ height: 150, width: 150, objectFit: "contain" }}
                      image={product.image}
                      alt={product.title} />
                  </Box>
                </Link>
                <CardContent>
                  <Typography variant="h6" noWrap>
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${product.price.toFixed(2)}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 4 }} 
                    component={Link} 
                    to={`/products/${product.id}`} 
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div></>
  );
};

export default ProductList;
