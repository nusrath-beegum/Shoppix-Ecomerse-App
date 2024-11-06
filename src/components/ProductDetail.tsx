import React from "react";
import Navbar from "../components/Navbar.tsx";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { RootState } from "../store/Store.tsx";
import { addToCart } from "../features/Cart/CartSlice.tsx";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/Wishlist/wishlistSlice.tsx";

interface WishlistItem {
  id: number;
  title: string;
  image: string;
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const product = useSelector((state: RootState) =>
    state.products.products.find((prod) => prod.id === Number(id))
  );

  const wishlist = useSelector(
    (state: RootState) => state.wishlist.wishlist || []
  );
  const isWishlisted = wishlist.some(
    (item: WishlistItem) => item.id === Number(id)
  );

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id,
          productId: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
          image: product.image,
        })
      );
    }
  };

  const handleToggleWishlist = () => {
    if (product) {
      if (isWishlisted) {
        dispatch(removeFromWishlist(product.id));
      } else {
        dispatch(
          addToWishlist({
            id: product.id,
            title: product.title,
            image: product.image,
          })
        );
      }
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <Box sx={{ maxWidth: 1200, margin: "auto", padding: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={5} mt={10}>
            <Card sx={{ boxShadow: "none" }}>
              <CardMedia
                component="img"
                height="100%"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: "contain", maxHeight: 500 }}
              />
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={7} mt={10}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {product.title}
              </Typography>
              <IconButton
                onClick={handleToggleWishlist}
                color="secondary"
                aria-label="add to wishlist"
              >
                {isWishlisted ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              <Typography>Wishlist</Typography>

              <Typography
                variant="h5"
                color="primary"
                sx={{ fontWeight: "bold", mt: 2 }}
              >
                ${product.price.toFixed(2)}
              </Typography>

              <Typography
                variant="subtitle1"
                color="text.secondary"
                sx={{ mt: 2 }}
              >
                Key Features:
              </Typography>
              <ul>
                <li>High quality product</li>
                <li>Available in multiple colors</li>
                <li>Durable and long-lasting</li>
                <li>Fast shipping options</li>
              </ul>

              <Button
                variant="contained"
                color="success"
                sx={{ mt: 4, mb: 2, mr: 2, paddingX: 3 }}
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>

              <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
                <strong>In Stock.</strong> Usually ships within 2-3 days.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Free shipping on orders over $50.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>

        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" gutterBottom>
            Product Description
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {product.description}
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Link to="/product">
            <Button variant="outlined" color="primary">
              Back to Products
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetail;
