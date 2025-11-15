import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Toolbar,
  Typography,
  Paper,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Avatar,
  Stack,
  Link,
  Fab
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import KitchenIcon from '@mui/icons-material/Kitchen';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import TvIcon from '@mui/icons-material/Tv';
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AdSlot from '../Adslot';




const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#EFE9E3'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontWeight: 700,
      lineHeight: 1.2
    },
    h2: {
      fontWeight: 700,
      lineHeight: 1.3
    }
  }
});

function ScrollTop(props) {
  const { children } = props;

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Box
      onClick={handleClick}
      role="presentation"
      sx={{ position: 'fixed', bottom: 32, right: 32 }}
    >
      {children}
    </Box>
  );
}

function Landing() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const services = [
    {
      icon: <LocalLaundryServiceIcon sx={{ color: 'white', fontSize: 50 }} />,
      title: "Washing Machine Repair",
      description: "Expert repairs for all models and brands today."
    },
    {
      icon: <KitchenIcon sx={{ color: 'white', fontSize: 50 }} />,
      title: "Refrigerator Service",
      description: "Fridge maintenance and repair with expertise."
    },
    {
      icon: <AcUnitIcon sx={{ color: 'white', fontSize: 50 }} />,
      title: "AC Maintenance",
      description: "Cooling system installation and expert repairs."
    },
    {
      icon: <MicrowaveIcon sx={{ color: 'white', fontSize: 50 }} />,
      title: "Oven Repair",
      description: "Repairing your microwave and oven with care."
    },
    {
      icon: <TvIcon sx={{ color: "white", fontSize: 50 }} />,
      title: "Top Brand TV Repair",
      description: "Repairing your TV brands with top-notch care."
    },
    {
    icon: <PhoneIphoneIcon sx={{ color: "white", fontSize: 50 }} />,
    title: "Phone Repair Service",
    description: "Expert repair services for all smartphone brands."
  }
  ];


  const trackConversion = async () => {
    try {
      const response = await fetch('https://ruki-likely.onrender.com/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          source: 'Emergency button Chennai'
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      setAlert({ severity: 'success', message: data.message || 'Enquiry submitted successfully!' });
      setOpen(true);

      // Track conversion
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          'event_category': 'Lead',
          'event_label': 'Enquiry Submitted Chennai'
        });
      }

    } catch (error) {
      setAlert({ severity: 'error', message: error.message || 'Failed to submit enquiry' });
      setOpen(true);
    }
  };

  const trackConversion1 = async () => {
    try {
      const response = await fetch('https://ruki-likely.onrender.com/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          source: 'Enquiry Chennai'
        }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();
      setAlert({ severity: 'success', message: data.message || 'Enquiry submitted successfully!' });
      setOpen(true);

      // Track conversion
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          'event_category': 'Lead',
          'event_label': 'Enquiry Submitted'
        });
      }

    } catch (error) {
      setAlert({ severity: 'error', message: error.message || 'Failed to submit enquiry' });
      setOpen(true);
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div id="back-to-top-anchor" />

      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'background.default',
          pt: { xs: 8, md: 12 },
          pb: { xs: 6, md: 10 },
          backgroundImage: 'linear-gradient(to bottom, #EFE9E3, #EFE9E3)'
        }}
      >
        <Container maxWidth="md">
         
         <Typography
  variant={isMobile ? 'h5' : 'h4'}
  align="center"
  gutterBottom
  sx={{
    fontWeight: 800,
    mb: 3,
    background: 'linear-gradient(90deg, #6A0DAD, #ed155d)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: 0.5,
  }}
>
  Expert AC, Fridge & Washing Machine Service Center in
  <span style={{ fontWeight: 800, color: '#ed155d' }}> Salem? </span> 
</Typography>

       <Paper
  elevation={0}
  sx={{
    p: { xs: 3, md: 5 },
    mb: 6,
    borderRadius: 4,
    background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    border: '1px solid #f3f3f3',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
    },
  }}
>
  <Typography
    variant={isMobile ? 'h6' : 'h5'}
    sx={{
      fontWeight: 700,
      color: '#540863',
      mb: 2,
      textAlign: 'center',
    }}
  >
    🧰 Trusted Appliance Repair Experts in
    <span style={{ color: '#ed155d', fontWeight: 'bold' }}> Salem</span>
  </Typography>

  <Typography
    variant={isMobile ? 'body1' : 'h6'}
    paragraph
    sx={{ color: '#333', lineHeight: 1.7, mb: 3 }}
  >
    Is your appliance acting up? Our skilled technicians are here to help!
    We specialize in repairing all major home appliances — from your
    <span style={{ fontWeight: 'bold', color: '#ed155d' }}>
      {' '}
      Mobile Phone, AC, Washing Machine, Refrigerator, Microwave, and more{' '}
    </span>
    — ensuring quick turnaround times and lasting results.
  </Typography>

  <Typography
    variant={isMobile ? 'body1' : 'h6'}
    sx={{ color: '#333', lineHeight: 1.7 }}
  >
    With certified experts and genuine spare parts, we provide reliable,
    affordable, and doorstep repair services for brands like{' '}
    <span style={{ fontWeight: 'bold', color: '#ed155d' }}>
      Samsung, LG, Whirlpool, Haier, Panasonic, Daikin, Blue Star
    </span>{' '}
    and many more. ⚡ Get your appliance back in action — fast!
  </Typography>
</Paper>


          <Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    mt: 5,
  }}
>
  <Button
    component="a"
    href="tel:+919659228040"
    onClick={trackConversion1}
    sx={{
      background: 'linear-gradient(90deg, #ed155d 0%, #6A0DAD 100%)',
      color: 'white',
      px: { xs: 4, md: 6 },
      py: { xs: 1.5, md: 1.8 },
      fontSize: { xs: '1rem', md: '1.15rem' },
      fontWeight: 700,
      borderRadius: '999px',
      textTransform: 'none',
      letterSpacing: '0.5px',
      boxShadow: '0 6px 16px rgba(237, 21, 93, 0.4)',
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      transition: 'all 0.3s ease',
      '&:hover': {
        background: 'linear-gradient(90deg, #d4145a 0%, #540863 100%)',
        boxShadow: '0 8px 20px rgba(84, 8, 99, 0.5)',
        transform: 'translateY(-3px)',
      },
      '&:active': {
        transform: 'translateY(0)',
      },
    }}
  >
    💬 Enquiry Now
  </Button>
</Box>
        </Container>
      </Box>
      
     {/* Services Section */}
<Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
  <Typography
    variant="h4"
    align="left"
    gutterBottom
    sx={{
      fontWeight: 700,
      mb: 2,
      color: '#540863',
      position: 'relative',
      display: 'inline-block',
      pl: { xs: 1, md: 0 },
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: -6,
        left: 0,
        width: '60%',
        height: '3px',
        background: 'linear-gradient(90deg, #ed155d, #6A0DAD)',
        borderRadius: '4px',
      },
    }}
  >
    Our Services
    <Box
        sx={{
          position: 'absolute',
          bottom: -6,
          left: 0,
          width: '60%',
          height: 2,
          bgcolor: '#ed155d',
          borderRadius: 2,
        }}
      />
    </Typography>
    <Typography
      variant="subtitle1"
      sx={{
        mt: 1,
        color: 'text.secondary',
        maxWidth: 800,
      }}
    >
      Expert repairs and trusted service for all your home appliances — fast,
      affordable, and reliable.
    </Typography>


  <Grid
    container
    spacing={3}
    sx={{
      alignItems: 'stretch',
      justifyContent: 'center',
    }}
  >
    {services.map((service, index) => (
      <Grid
        item
        key={index}
        xs={12}
        sm={6}
        md={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 4,
            flex: 1,
            borderRadius: '16px',
            background: 'linear-gradient(180deg, #ffffff 0%, #f9f4fc 100%)',
            border: '1px solid rgba(84, 8, 99, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            transition: 'all 0.35s ease',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
            '&:hover': {
              transform: 'translateY(-6px)',
              background: 'linear-gradient(180deg, #fff7fa 0%, #f4e9ff 100%)',
              boxShadow: '0 8px 22px rgba(84, 8, 99, 0.15)',
            },
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              mb: 2.5,
              width: 70,
              height: 70,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ed155d, #6A0DAD)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              boxShadow: '0 4px 10px rgba(237, 21, 93, 0.3)',
            }}
          >
            {service.icon}
          </Box>

          {/* Title */}
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              fontWeight: 700,
              color: '#540863',
              minHeight: 60,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {service.title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              lineHeight: 1.6,
              fontSize: '0.95rem',
            }}
          >
            {service.description}
          </Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
</Container>


      {/* CTA Section */}
      <Box sx={{
        bgcolor: '#540863',
        color: 'white',
        py: { xs: 8, md: 12 },
        textAlign: 'center',
        background: 'linear-gradient(135deg, #EFE9E3 0%, #EFE9E3 100%)'
      }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ mb: 3, fontWeight: 800, letterSpacing: 1 , color:"black"}}>
            Emergency Appliance Repair?
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, color:"black" }}>
            Same-day service • Expert technicians • 100% guaranteed
          </Typography>
  <Button
      component="a"
      href="tel:+919659228040"
      onClick={trackConversion}
      sx={{
        px: { xs: 6, md: 8 },
        py: { xs: 1.8, md: 2 },
        fontSize: { xs: '1.1rem', md: '1.25rem' },
        fontWeight: 400,
        background: 'linear-gradient(90deg, #fff 0%, #f8f8f8 100%)',
        color: '#540863',
        borderRadius: '999px',
        boxShadow: '0 6px 16px rgba(255,255,255,0.2)',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-3px)',
          boxShadow: '0 10px 24px rgba(255,255,255,0.25)',
        },
      }}
    >
      📞 Call Now
    </Button>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 3, md: 1 } }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 400, mb: 6 }}
        >
          Trusted by our customers
        </Typography>

        <Box sx={{
          display: 'flex',
          overflowX: 'auto',
          gap: 4,
          py: 2,
          px: 1,
          scrollbarWidth: 'none', // For Firefox
          '&::-webkit-scrollbar': { // For Chrome/Safari
            display: 'none'
          }
        }}>
          {/* Testimonial 1 */}
          <Box sx={{
            minWidth: 300,
            p: 4,
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: 'background.paper'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Ramesh Kumar
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
              "The technician fixed my washing machine in just 30 minutes! Best service I've ever experienced."
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              ⭐⭐⭐⭐⭐
              <Typography variant="caption" sx={{ ml: 1 }}>
                2 days ago
              </Typography>
            </Box>
          </Box>

          {/* Testimonial 2 */}
          <Box sx={{
            minWidth: 300,
            p: 4,
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: 'background.paper'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Priya Venkat
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
              "Came right on time and charged exactly what was quoted. My fridge is working like new now."
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              ⭐⭐⭐⭐⭐
              <Typography variant="caption" sx={{ ml: 1 }}>
                1 week ago
              </Typography>
            </Box>
          </Box>

          {/* Testimonial 3 */}
          <Box sx={{
            minWidth: 300,
            p: 4,
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: 'background.paper'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Arun Joshi
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
              "Emergency AC repair at midnight! These guys saved us during the heat wave."
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              ⭐⭐⭐⭐⭐
              <Typography variant="caption" sx={{ ml: 1 }}>
                3 days ago
              </Typography>
            </Box>
          </Box>

          {/* Testimonial 4 */}
          <Box sx={{
            minWidth: 300,
            p: 4,
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: 'background.paper'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Deepika M.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
              "Honest diagnosis and fair pricing. Will definitely call them again for any appliance issues."
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              ⭐⭐⭐⭐⭐
              <Typography variant="caption" sx={{ ml: 1 }}>
                2 weeks ago
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* <ScrollTop>
    <Fab color="primary" size="small" aria-label="scroll back to top">
      <KeyboardArrowUpIcon />
    </Fab>
  </ScrollTop> */}
    </ThemeProvider>
  );
}

export default Landing;