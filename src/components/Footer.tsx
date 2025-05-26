import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  IconButton, 
  Divider, 
  useTheme,
  Link,
  Stack,
  Tooltip,
  Button,
  Fade
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState, useEffect } from 'react';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when page is scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Links with hover animations
  const FooterLink = ({ href, label }: { href: string; label: string }) => (
    <Link 
      href={href} 
      underline="hover" 
      color="text.secondary" 
      sx={{ 
        display: 'block', 
        mb: 1.5,
        transition: 'all 0.3s ease',
        '&:hover': {
          color: theme.palette.primary.main,
          transform: 'translateX(5px)'
        }
      }}
    >
      {label}
    </Link>
  );

  // Social media link with hover effects
  const SocialLink = ({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) => (
    <Tooltip title={label}>
      <IconButton 
        aria-label={label.toLowerCase()}
        href={href}
        target="_blank"
        rel="noopener"
        sx={{ 
          mr: 1, 
          color: 'text.secondary',
          transition: 'all 0.3s ease',
          backgroundColor: 'rgba(255,255,255,0.05)',
          '&:hover': {
            color: theme.palette.primary.main,
            transform: 'translateY(-3px)',
            backgroundColor: 'rgba(255,255,255,0.1)'
          }
        }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );

  return (
    <Box 
      component="footer"
      py={6} 
      sx={{
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Fade in timeout={800}>
              <Box>
                <Typography variant="h5" color="primary" fontWeight={600} gutterBottom>
                  Dhruv Patel
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={3} sx={{ maxWidth: '400px' }}>
                  Full Stack Developer specializing in modern web technologies.
                  Building innovative solutions with focus on performance and user experience.
                </Typography>
                
                <Stack direction="row" spacing={1} mb={3}>
                  <SocialLink 
                    href="https://linkedin.com/" 
                    label="LinkedIn" 
                    icon={<LinkedInIcon />} 
                  />
                  
                  <SocialLink 
                    href="https://github.com/elevator7" 
                    label="GitHub" 
                    icon={<GitHubIcon />} 
                  />
                  
                  <SocialLink 
                    href="https://twitter.com/" 
                    label="Twitter" 
                    icon={<TwitterIcon />} 
                  />
                  
                  <SocialLink 
                    href="mailto:contact@example.com" 
                    label="Email" 
                    icon={<EmailIcon />} 
                  />
                </Stack>

                <Button 
                  variant="outlined" 
                  color="primary" 
                  size="small"
                  href="/new-mcp-repo/resume.pdf"
                  target="_blank"
                  sx={{ 
                    borderRadius: 2,
                    px: 3,
                    '&:hover': {
                      backgroundColor: 'rgba(144, 202, 249, 0.08)'
                    }
                  }}
                >
                  Download Resume
                </Button>
              </Box>
            </Fade>
          </Grid>
          
          <Grid item xs={12} sm={6} md={3}>
            <Fade in timeout={1000}>
              <Box>
                <Typography variant="h6" color="primary" fontWeight={600} gutterBottom>
                  Navigation
                </Typography>
                <Box component="nav">
                  <FooterLink href="#home" label="Home" />
                  <FooterLink href="#skills" label="Skills" />
                  <FooterLink href="#projects" label="Projects" />
                  <FooterLink href="#contact" label="Contact" />
                </Box>
              </Box>
            </Fade>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Fade in timeout={1200}>
              <Box>
                <Typography variant="h6" color="primary" fontWeight={600} gutterBottom>
                  Get In Touch
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Interested in working together or have a question?
                  Feel free to reach out via email or social media.
                </Typography>
                <Box 
                  component={Link} 
                  href="mailto:contact@example.com"
                  color="primary"
                  sx={{
                    display: 'inline-block',
                    position: 'relative',
                    textDecoration: 'none',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '100%',
                      height: '2px',
                      bottom: '-2px',
                      left: 0,
                      backgroundColor: theme.palette.primary.main,
                      transform: 'scaleX(0)',
                      transformOrigin: 'bottom right',
                      transition: 'transform 0.3s ease-out'
                    },
                    '&:hover::after': {
                      transform: 'scaleX(1)',
                      transformOrigin: 'bottom left'
                    }
                  }}
                >
                  contact@example.com
                </Box>
              </Box>
            </Fade>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
        
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{
                opacity: 0.8,
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              &copy; {currentYear} Dhruv Patel. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography 
              variant="caption" 
              color="text.secondary" 
              sx={{
                opacity: 0.6,
                textAlign: { xs: 'center', md: 'right' },
                display: 'block'
              }}
            >
              Built with React, Material UI, and passion.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll to top button */}
      <Fade in={showScrollTop}>
        <IconButton
          onClick={scrollToTop}
          aria-label="scroll to top"
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            backgroundColor: theme.palette.primary.main,
            color: '#fff',
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
            zIndex: 10,
            boxShadow: 3
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Fade>
    </Box>
  );
};

export default Footer;