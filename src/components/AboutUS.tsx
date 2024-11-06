import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const AboutUs: React.FC = () => {
  return (
    <Container>
      <Box sx={{ padding: 4, backgroundColor: '#f5f5f5', borderRadius: '8px', marginTop: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ color: '#ff4081', fontWeight: 'bold' }}>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to SHOPPIX, your trusted online shopping destination. At SHOPPIX, we believe in offering the best products 
          across various categories at affordable prices. Our mission is to provide a seamless shopping experience, 
          where quality meets convenience.
        </Typography>
        <Typography variant="body1" paragraph>
          Established in 2024, SHOPPIX has grown from a small store to a renowned e-commerce platform, 
          catering to customers all around the world. Our team is dedicated to curating an extensive collection of the latest 
          products that meet your needs, whether it's for home, beauty, electronics, or fashion.
        </Typography>
        <Typography variant="body1" paragraph>
          We are committed to offering exceptional customer service and ensuring that your shopping experience 
          is easy, fast, and secure. Thank you for choosing SHOPPIX, and we look forward to serving you!
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
