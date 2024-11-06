import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCategories,
  fetchProductsByCategory,
  fetchAllProducts,
  selectCategories,
  selectProducts,
  selectCategoriesLoading,
  selectProductsLoading,
} from './CategorySlice.tsx';
import {
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Skeleton,
} from '@mui/material';
import { RootState, AppDispatch } from '../../store/Store.tsx'; 

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Categories: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();


  const categories = useSelector((state: RootState) => selectCategories(state));
  const products = useSelector((state: RootState) => selectProducts(state));
  const categoriesLoading = useSelector((state: RootState) => selectCategoriesLoading(state));
  const productsLoading = useSelector((state: RootState) => selectProductsLoading(state));


  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAllProducts());
  }, [dispatch]);


  const handleCategoryClick = (category: string) => {
    dispatch(fetchProductsByCategory(category));
  };


  const handleAllProductsClick = () => {
    dispatch(fetchAllProducts());
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
   
      <Box
        sx={{
          backgroundColor: '#ff4081',
          padding: '16px',
          borderRadius: '8px',
          textAlign: 'center',
          color: 'white',
          marginBottom: '20px',
        }}
      >
        <Typography variant="h4">Latest Products</Typography>
      </Box>

    
      <Box sx={{ marginBottom: 4, textAlign: 'center' }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleAllProductsClick}
          sx={{ margin: 1 }}
        >
          ALL Products
        </Button>
        {categoriesLoading ? (
          <>
            <Skeleton variant="rectangular" width={100} height={40} sx={{ margin: 1 }} />
            <Skeleton variant="rectangular" width={100} height={40} sx={{ margin: 1 }} />
            <Skeleton variant="rectangular" width={100} height={40} sx={{ margin: 1 }} />
          </>
        ) : (
          categories.map((category: string, index: number) => (
            <Button
              key={index}
              variant="contained"
              color="primary"
              onClick={() => handleCategoryClick(category)}
              sx={{ margin: 1 }}
            >
              {category}
            </Button>
          ))
        )}
      </Box>

 
      <Grid container spacing={2}>
        {productsLoading
          ? [...Array(6)].map((_, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ maxWidth: 250, minHeight: 350, borderRadius: 2 }}>
                  <Skeleton variant="rectangular" width="100%" height={200} />
                  <CardContent>
                    <Skeleton variant="text" width="80%" />
                    <Skeleton variant="text" width="60%" />
                  </CardContent>
                </Card>
              </Grid>
            ))
          : products.map((product: Product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <Card
                  sx={{
                    maxWidth: 250,
                    minHeight: 350,
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: 'contain', padding: '10px' }}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {product.title.length > 20
                        ? product.title.slice(0, 20) + '...'
                        : product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${product.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
};

export default Categories;
