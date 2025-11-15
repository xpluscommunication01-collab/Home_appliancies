import React from 'react';
import { Box, Typography, Container, Button, Grid, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  const trackConversion1 = async () => {
    try {
      const response = await fetch('https://ruki-likely.onrender.com/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          source: 'Footer CTA'
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();

      // Google conversion tracking
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          event_category: 'Lead',
          event_label: 'Footer Call Click',
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        mt: 1,
        py: { xs: 2, md: 1 },
        background: 'linear-gradient(135deg, #6A0DAD 0%, #EFE9E3 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {/* Left Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 200,
                mb: 1,
              }}
            >
              Xplus Communication
            </Typography>
            <Typography
              variant="body2"
              sx={{ opacity: 0.9, lineHeight: 1.6 }}
            >
              Reliable appliance repair and maintenance service.  
              We’re here to help you — fast, professional, 24/7.
            </Typography>
          </Grid>


          {/* Right CTA */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-end' },
              textAlign: { xs: 'center', md: 'right' },
            }}
          >
            <Typography variant="h6" sx={{ color:'black' ,fontWeight: 200, mb: 1 }}>
            ⚡ "Your Quick Fix Starts Here!"
            </Typography>
            <Button
              component="a"
              href="tel:+919655458040"
              onClick={trackConversion1}
              startIcon={<PhoneIcon />}
              sx={{
                mt: 1,
                backgroundColor: 'white',
                color: '#6A0DAD',
                borderRadius: '999px',
                px: { xs: 3.5, md: 5 },
                py: { xs: 1, md: 1.2 },
                fontWeight: 200,
                textTransform: 'none',
                fontSize: { xs: '1rem', md: '1.1rem' },
                boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#f8f8f8',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              +91 9655458040
            </Button>
          </Grid>
        </Grid>

        {/* Divider + Bottom Bar */}
        <Divider
          sx={{
            my: 4,
            borderColor: 'rgba(255,255,255,0.2)',
            
          }}
        />
        <Typography
          variant="body2"
          align="center"
          
          sx={{ opacity: 0.8, fontSize: '0.9rem', color:'black', fontWeight: 700, }}
          
        >
          © {new Date().getFullYear()} Xplus Communication. All rights reserved. | Licensed & Insured
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
