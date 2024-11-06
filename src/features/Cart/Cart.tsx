import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, removeFromCart } from './CartSlice.tsx';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';

const Cart = () => {
  const cartItems = useSelector(selectCartItems); 
  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        <Grid container spacing={2}>
          {cartItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.productId}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{ height: 200, objectFit: 'contain' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Price: ${item.price}
                  </Typography>
                  <Typography variant="body1">
                    Quantity: {item.quantity}
                  </Typography>
                </CardContent>
                <Box sx={{ padding: 2, textAlign: 'center' }}>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => dispatch(removeFromCart(item.productId))}
                    fullWidth
                  >
                    Remove
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Cart;
