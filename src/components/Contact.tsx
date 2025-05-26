import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Stack, 
  Container, 
  Paper, 
  Grid, 
  IconButton, 
  Tooltip, 
  Fade,
  Grow,
  useTheme,
  Alert,
  Snackbar
} from '@mui/material';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [snackbar, setSnackbar] = useState({open: false, message: '', severity: 'success'});
  const theme = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSnackbar({
      open: true,
      message: 'Thank you! Your message has been sent successfully.',
      severity: 'success'
    });
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({...snackbar, open: false});
  };

  const contactCards = [
    {
      icon: <LocationOnIcon fontSize="large" />,
      title: "Location",
      content: "New York, NY 10001"
    },
    {
      icon: <EmailIcon fontSize="large" />,
      title: "Email",
      content: "dhruv@example.com"
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      title: "Phone",
      content: "(123) 456-7890"
    }
  ];

  return (
    <Box 
      id="contact"
      py={10} 
      sx={{ 
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3))',
        borderRadius: 2,
        mb: 4,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1,
          zIndex: -1,
        }
      }}
    >
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Typography 
            variant="h3" 
            fontWeight={600} 
            mb={3} 
            textAlign="center"
            sx={{
              position: 'relative',
              '&:after': {
                content: '""',
                position: 'absolute',
                width: '80px',
                height: '4px',
                bottom: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: theme.palette.primary.main,
                borderRadius: '2px'
              }
            }}
          >
            Get In Touch
          </Typography>
        </Fade>

        <Typography 
          variant="subtitle1" 
          color="text.secondary" 
          textAlign="center" 
          mb={6}
          sx={{ maxWidth: '700px', mx: 'auto' }}
        >
          Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology and design.
        </Typography>

        <Grid container spacing={5} mt={3}>
          {/* Contact Info Cards */}
          <Grid item xs={12} md={4}>
            <Stack spacing={3}>
              {contactCards.map((card, index) => (
                <Grow in timeout={1000 + (index * 300)} key={card.title}>
                  <Paper 
                    elevation={4} 
                    sx={{ 
                      p: 3, 
                      textAlign: 'center',
                      background: 'rgba(30, 30, 30, 0.7)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: theme.shadows[8]
                      }
                    }}
                  >
                    <Box 
                      sx={{
                        mb: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(144, 202, 249, 0.1)',
                        mx: 'auto'
                      }}
                    >
                      {card.icon}
                    </Box>
                    <Typography variant="h6" fontWeight={500} color={theme.palette.primary.main} mb={1}>
                      {card.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {card.content}
                    </Typography>
                  </Paper>
                </Grow>
              ))}

              <Fade in timeout={1800}>
                <Box mt={2}>
                  <Typography variant="h6" fontWeight={500} mb={2} textAlign="center">
                    Follow Me
                  </Typography>
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Tooltip title="Email">
                      <IconButton 
                        aria-label="email" 
                        size="large"
                        sx={{ 
                          backgroundColor: 'rgba(144, 202, 249, 0.1)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: theme.palette.primary.main,
                            transform: 'translateY(-3px)'
                          }
                        }}
                      >
                        <EmailIcon fontSize="medium" />
                      </IconButton>
                    </Tooltip>
                    
                    <Tooltip title="LinkedIn">
                      <IconButton 
                        aria-label="linkedin" 
                        size="large"
                        sx={{ 
                          backgroundColor: 'rgba(144, 202, 249, 0.1)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: theme.palette.primary.main,
                            transform: 'translateY(-3px)'
                          }
                        }}
                      >
                        <LinkedInIcon fontSize="medium" />
                      </IconButton>
                    </Tooltip>
                    
                    <Tooltip title="GitHub">
                      <IconButton 
                        aria-label="github" 
                        size="large"
                        sx={{ 
                          backgroundColor: 'rgba(144, 202, 249, 0.1)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: theme.palette.primary.main,
                            transform: 'translateY(-3px)'
                          }
                        }}
                      >
                        <GitHubIcon fontSize="medium" />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Box>
              </Fade>
            </Stack>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Grow in timeout={1500}>
              <Paper 
                elevation={6} 
                sx={{ 
                  p: 4, 
                  borderRadius: 2,
                  background: 'rgba(30, 30, 30, 0.7)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {submitted ? (
                  <Box textAlign="center" py={4}>
                    <Grow in timeout={800}>
                      <Typography variant="h5" color="primary" gutterBottom>
                        Thank you for your message!
                      </Typography>
                    </Grow>
                    <Fade in timeout={1200}>
                      <Typography variant="body1" color="text.secondary">
                        I'll get back to you as soon as possible.
                      </Typography>
                    </Fade>

                    <Button 
                      variant="outlined" 
                      color="primary" 
                      sx={{ mt: 4 }}
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: '', email: '', message: '' });
                      }}
                    >
                      Send another message
                    </Button>
                  </Box>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <Typography variant="h5" color="primary" fontWeight={500} mb={3}>
                      Send me a message
                    </Typography>
                    <Stack spacing={3}>
                      <TextField
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        InputProps={{
                          sx: { borderRadius: 1.5 }
                        }}
                      />
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        fullWidth
                        variant="outlined"
                        InputProps={{
                          sx: { borderRadius: 1.5 }
                        }}
                      />
                      <TextField
                        label="Message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        fullWidth
                        multiline
                        minRows={4}
                        variant="outlined"
                        InputProps={{
                          sx: { borderRadius: 1.5 }
                        }}
                      />
                      <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        size="large"
                        sx={{
                          py: 1.5,
                          fontSize: '1rem',
                          borderRadius: 1.5,
                          position: 'relative',
                          overflow: 'hidden',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-3px)',
                            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                          }
                        }}
                        endIcon={<SendIcon />}
                      >
                        Send Message
                      </Button>
                    </Stack>
                  </form>
                )}
              </Paper>
            </Grow>
          </Grid>
        </Grid>
      </Container>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          sx={{ width: '100%' }}
          variant="filled"
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;