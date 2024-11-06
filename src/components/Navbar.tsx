import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../features/Cart/CartSlice.tsx";
import { selectWishlistItems } from "../features/Wishlist/wishlistSlice.tsx";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const wishlistItems = useSelector(selectWishlistItems);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalItemsInWishlist = wishlistItems.length;

  const handleLogin = () => {
    navigate("/");
  };

  const handleCartClick = () => {
    navigate("/Cart");
  };
  const handleAddToWishlist = () => {
    navigate("/Wishlist");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#ff4081" }}>
        <Toolbar>
          <Typography variant="h5">SHOPPIX</Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button component={Link} to="/Home" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/product" color="inherit">
              Products
            </Button>
            <Button component={Link} to="/AboutUs" color="inherit">
              About
            </Button>
            <Button component={Link} to="/ContactUs" color="inherit">
              Contact
            </Button>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "end", flexGrow: 0 }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show cart items"
              color="inherit"
              onClick={handleCartClick}
            >
              <Badge badgeContent={totalItems} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show wishlist items"
              color="inherit"
              onClick={handleAddToWishlist}
            >
              <Badge badgeContent={totalItemsInWishlist} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>

            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogin}
              sx={{ ml: 2 }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
