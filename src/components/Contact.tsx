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
  useTheme
} from '@mui/material';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const theme = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box py={10} sx={{ 
      backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.3))',
      borderRadius: 2,
      mb: 4
    }}>
      <Container maxWidth="md">
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

        <Grid container spacing={5} mt={3}>
          <Grid item xs={12} md={5}>
            <Fade in timeout={1200}>
              <Box>
                <Typography variant="h5" fontWeight={500} mb={3} color={theme.palette.primary.main}>
                  Let's Connect
                </Typography>
                <Typography variant="body1" mb={4} color="text.secondary">
                  I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hello, I'll try my best to get back to you!
                </Typography>

                <Stack direction="row" spacing={2} mt={3}>
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
                      <EmailIcon fontSize="large" />
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
                      <LinkedInIcon fontSize="large" />
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
                      <GitHubIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </Stack>
              </Box>
            </Fade>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <Grow in timeout={1500}>
              <Paper 
                elevation={6} 
                sx={{ 
                  p: 4, 
                  borderRadius: 2,
                  background: 'rgba(30, 30, 30, 0.7)',
                  backdropFilter: 'blur(10px)'
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
                  </Box>
                ) : (
                  <form onSubmit={handleSubmit}>
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
    </Box>
  );
};

export default Contact;