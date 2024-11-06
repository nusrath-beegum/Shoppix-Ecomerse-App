import React, { useState } from "react";
import { Box, Typography, Container, TextField, Button } from "@mui/material";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <Container>
      <Box
        sx={{
          padding: 4,
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
          marginTop: 4,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#ff4081", fontWeight: "bold" }}
        >
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          We'd love to hear from you! Whether you have a question about our
          products, need assistance, or just want to give feedback, we're here
          to help. Please fill out the form below, and our team will get back to
          you as soon as possible.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: 4 }}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            variant="outlined"
            value={formData.message}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Send Message
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
