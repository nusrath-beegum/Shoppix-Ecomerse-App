import React from 'react';
import { Box, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        padding: '40px 20px',
        marginTop: 'auto',
        borderTop: '4px solid #ff4081',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            SHOPPIX
          </Typography>
          <Typography variant="body2">
            Your go-to online store for all the latest products. We provide high-quality items at affordable prices with seamless shopping experiences.
          </Typography>
        </Grid>

       
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box>
            <Link href="/home" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>
              Home
            </Link>
            <Link href="/product" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>
              Products
            </Link>
            <Link href="/AboutUs" color="inherit" sx={{ display: 'block', marginBottom: '8px' }}>
              About Us
            </Link>
            <Link href="/ContactUs" color="inherit" sx={{ display: 'block' }}>
              Contact Us
            </Link>
          </Box>
        </Grid>

       
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <IconButton
              color="inherit"
              href="https://www.facebook.com"
              aria-label="Facebook"
              sx={{ backgroundColor: '#3b5998' }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.twitter.com"
              aria-label="Twitter"
              sx={{ backgroundColor: '#1da1f2' }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.instagram.com"
              aria-label="Instagram"
              sx={{ backgroundColor: '#e1306c' }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com"
              aria-label="LinkedIn"
              sx={{ backgroundColor: '#0077b5' }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          textAlign: 'center',
          marginTop: '20px',
          borderTop: '1px solid #666',
          paddingTop: '20px',
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} SHOPPIX. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
