import React from 'react';
import { Box, Typography, Button, Avatar, Stack, Container, Fade, Grow } from '@mui/material';
import { GitHub, LinkedIn, Email, Description } from '@mui/icons-material';

const avatarUrl = 'https://avatars.githubusercontent.com/u/145609677?v=4';

const Hero: React.FC = () => {
  return (
    <Container maxWidth="md" component="section" id="home">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 10,
          gap: 4,
          minHeight: '90vh',
        }}
      >
        <Fade in={true} timeout={1000}>
          <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }} maxWidth="600px">
            <Typography variant="h2" fontWeight={700} textAlign={{ xs: 'center', md: 'left' }}>
              Hi, I'm <span style={{ color: '#90caf9' }}>Dhruv Patel</span>
            </Typography>
            <Typography variant="h5" color="text.secondary" textAlign={{ xs: 'center', md: 'left' }}>
              Senior Software Architect & Full Stack Engineer
            </Typography>
            <Typography variant="body1" paragraph textAlign={{ xs: 'center', md: 'left' }}>
              I build modern, scalable applications using React, TypeScript, Node.js, and cloud technologies. 
              Passionate about creating elegant solutions to complex problems.
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <Button
                variant="contained"
                color="primary"
                href="https://github.com/elevator7"
                startIcon={<GitHub />}
                target="_blank"
                sx={{ mb: 1 }}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                color="primary"
                href="https://linkedin.com/in/dhruvpatel7"
                startIcon={<LinkedIn />}
                target="_blank"
                sx={{ mb: 1 }}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                href="#contact"
                startIcon={<Email />}
                sx={{ mb: 1 }}
              >
                Contact Me
              </Button>
              <Button
                variant="text"
                color="inherit"
                href="/resume.pdf"
                startIcon={<Description />}
                target="_blank"
                sx={{ mb: 1 }}
              >
                Resume
              </Button>
            </Stack>
          </Stack>
        </Fade>

        <Grow in={true} timeout={1500}>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Avatar
              src={avatarUrl}
              sx={{
                width: 240,
                height: 240,
                border: '4px solid #90caf9',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
              }}
            />
          </Box>
        </Grow>
      </Box>
    </Container>
  );
};

export default Hero;