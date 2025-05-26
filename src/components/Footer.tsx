import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  IconButton, 
  Divider, 
  useTheme,
  Link
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      py={6} 
      sx={{
        backgroundColor: 'background.paper',
        borderTop: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="primary" fontWeight={600} gutterBottom>
              Dhruv Patel
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Full Stack Developer specializing in modern web technologies.
              Building innovative solutions with focus on performance and user experience.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton 
                aria-label="LinkedIn"
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener"
                sx={{ 
                  mr: 1, 
                  color: 'text.secondary',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#0077B5',
                    transform: 'translateY(-3px)'
                  }
                }}
              >
                <LinkedInIcon />
              </IconButton>
              
              <IconButton 
                aria-label="GitHub"
                href="https://github.com/elevator7"
                target="_blank"
                rel="noopener"
                sx={{ 
                  mr: 1, 
                  color: 'text.secondary',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#fff',
                    transform: 'translateY(-3px)'
                  }
                }}
              >
                <GitHubIcon />
              </IconButton>
              
              <IconButton 
                aria-label="Twitter" 
                href="https://twitter.com/"
                target="_blank"
                rel="noopener"
                sx={{ 
                  mr: 1, 
                  color: 'text.secondary',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#1DA1F2',
                    transform: 'translateY(-3px)'
                  }
                }}
              >
                <TwitterIcon />
              </IconButton>
              
              <IconButton 
                aria-label="Email"
                href="mailto:contact@example.com"
                sx={{ 
                  color: 'text.secondary',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateY(-3px)'
                  }
                }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" color="primary" fontWeight={600} gutterBottom>
              Links
            </Typography>
            <Box component="nav">
              <Link 
                href="#home" 
                underline="hover" 
                color="text.secondary" 
                sx={{ 
                  display: 'block', 
                  mb: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateX(5px)'
                  }
                }}
              >
                Home
              </Link>
              <Link 
                href="#skills" 
                underline="hover" 
                color="text.secondary" 
                sx={{ 
                  display: 'block', 
                  mb: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateX(5px)'
                  }
                }}
              >
                Skills
              </Link>
              <Link 
                href="#projects" 
                underline="hover" 
                color="text.secondary" 
                sx={{ 
                  display: 'block', 
                  mb: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateX(5px)'
                  }
                }}
              >
                Projects
              </Link>
              <Link 
                href="#contact" 
                underline="hover" 
                color="text.secondary" 
                sx={{ 
                  display: 'block',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: theme.palette.primary.main,
                    transform: 'translateX(5px)'
                  }
                }}
              >
                Contact
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={3}>
            <Typography variant="h6" color="primary" fontWeight={600} gutterBottom>
              Resources
            </Typography>
            <Link 
              href="/new-mcp-repo/resume.pdf" 
              target="_blank" 
              underline="hover" 
              color="text.secondary" 
              sx={{ 
                display: 'block', 
                mb: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: theme.palette.primary.main,
                  transform: 'translateX(5px)'
                }
              }}
            >
              Resume
            </Link>
            <Link 
              href="https://github.com/elevator7" 
              target="_blank" 
              rel="noopener" 
              underline="hover" 
              color="text.secondary" 
              sx={{ 
                display: 'block', 
                mb: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: theme.palette.primary.main,
                  transform: 'translateX(5px)'
                }
              }}
            >
              GitHub
            </Link>
            <Link 
              href="https://linkedin.com/" 
              target="_blank" 
              rel="noopener" 
              underline="hover" 
              color="text.secondary" 
              sx={{ 
                display: 'block',
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: theme.palette.primary.main,
                  transform: 'translateX(5px)'
                }
              }}
            >
              LinkedIn
            </Link>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          align="center"
          sx={{
            opacity: 0.8
          }}
        >
          &copy; {currentYear} Dhruv Patel. All rights reserved.
        </Typography>
        <Typography 
          variant="caption" 
          color="text.secondary" 
          align="center" 
          display="block"
          sx={{
            mt: 1,
            opacity: 0.6
          }}
        >
          Built with React, Material UI, and passion.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;