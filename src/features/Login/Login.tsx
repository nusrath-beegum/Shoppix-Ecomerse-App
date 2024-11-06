import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Avatar,
  Box,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./LoginSlice.tsx";
import { RootState } from "../../store/Store.tsx";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector(
    (state: RootState) => state.login.isAuthenticated
  );

  useEffect(() => {
    setUsername("");
    setPassword("");
  }, []);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          my: 4,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleLogin}
          sx={{ width: "100%" }}
        >
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Grid container justifyContent="space-between" sx={{ mt: 2 }}>
            <Grid item>
              <Button color="primary" size="small">
                Forgot Password?
              </Button>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
