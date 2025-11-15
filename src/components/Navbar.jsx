import React, { useState } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Divider,
    Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const trackConversion1 = async () => {
        try {
            const response = await fetch('https://ruki-likely.onrender.com/api/enquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    timestamp: new Date().toISOString(),
                    source: 'Navbar Call Now Salem'
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
        <AppBar position="fixed" elevation={0} sx={{
            backgroundColor: '#EFE9E3',
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)' // subtle bottom border
        }}>
            <Container maxWidth={false} sx={{ px: 2 }}>
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            fontWeight: 200,
                            color: '#540863',
                            fontSize: { xs: '1.2rem', md: '1.4rem' },
                            letterSpacing: '0.5px',
                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                '&:hover': {
                                    opacity: 0.9,
                                },
                            }}
                        >
                            Xplus Communication
                        </Box>
                    </Typography>



                    <Button
                        component="a"
                        href="tel:+919655458040"
                        variant="contained"
                        startIcon={<CallIcon />}
                        onClick={trackConversion1}
                        sx={{
                            backgroundColor: '#540863',
                            color: 'white',
                            borderRadius: '999px',
                            px: { xs: 2.5, sm: 3.5, md: 4 },
                            py: { xs: 0.8, sm: 1 },
                            fontWeight: 200,
                            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                            textTransform: 'none',

                            // 👇 Keeps button compact
                            width: 'auto',
                            minWidth: 'fit-content',
                            maxWidth: 'none',
                            alignSelf: 'center',
                            whiteSpace: 'nowrap',

                            // 👇 Optional animation/hover
                            boxShadow: '0 2px 6px rgba(84, 8, 99, 0.3)',
                            transition: 'all 0.25s ease',
                            '&:hover': {
                                backgroundColor: '#540863',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 10px rgba(206, 56, 236, 1)',
                            },
                        }}
                    >
                        Call Now
                    </Button>


                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;