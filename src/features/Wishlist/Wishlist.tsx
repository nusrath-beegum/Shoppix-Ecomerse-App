
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectWishlistItems, removeFromWishlist } from './wishlistSlice.tsx';
import { Card, CardContent, Typography, Button, Grid, CardMedia } from '@mui/material';

const Wishlist: React.FC = () => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);

  const handleRemoveFromWishlist = (id: number) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div>
      <h1>Wishlist</h1>
      <Grid container spacing={2}>
        {wishlistItems.length === 0 ? (
          <Typography>No items in your wishlist.</Typography>
        ) : (
          wishlistItems.map(item => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Card>
              <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{ height: 200, objectFit: 'contain' }}
                />
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Button variant="contained" color="error" onClick={() => handleRemoveFromWishlist(item.id)}>
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default Wishlist;
