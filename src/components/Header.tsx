import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide,
  useMediaQuery,
  useTheme,
  Fade
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 2 }}>
        <IconButton edge="end" color="inherit" aria-label="close menu">
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography variant="h6" color="primary" sx={{ my: 2 }}>
        Dhruv Patel
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton 
              sx={{ 
                textAlign: 'center',
                '&:hover': {
                  backgroundColor: 'rgba(144, 202, 249, 0.1)',
                  color: 'primary.main'
                }
              }} 
              href={item.href}
            >
              <ListItemText 
                primary={item.label} 
                primaryTypographyProps={{ 
                  fontSize: '1.1rem', 
                  fontWeight: 500
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar 
          position="fixed" 
          elevation={scrolled ? 4 : 0}
          sx={{
            backgroundColor: scrolled 
              ? 'rgba(18, 18, 18, 0.95)'
              : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            transition: 'all 0.3s ease'
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ py: scrolled ? 0.5 : 1.5, transition: 'padding 0.3s ease' }}>
              <Typography
                variant="h5"
                component="div"
                sx={{ 
                  flexGrow: 1, 
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  textShadow: '0 2px 5px rgba(0,0,0,0.2)',
                  letterSpacing: '0.5px'
                }}
              >
                DP
              </Typography>
              
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                {navItems.map((item) => (
                  <Button 
                    key={item.label} 
                    href={item.href}
                    sx={{ 
                      color: 'white', 
                      mx: 1,
                      fontSize: '1rem',
                      px: 2,
                      position: 'relative',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        width: 0,
                        height: '2px',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: theme.palette.primary.main,
                        transition: 'width 0.3s ease'
                      },
                      '&:hover': {
                        backgroundColor: 'transparent',
                        '&:after': {
                          width: '80%'
                        }
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
              
              <IconButton 
                color="primary"
                sx={{ ml: 2 }}
              >
                <DarkModeIcon />
              </IconButton>
              
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' }, ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile
          }}
          anchor="right"
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: 280,
              backgroundColor: 'background.default'
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      
      {/* Toolbar placeholder to prevent content from hiding behind AppBar */}
      <Toolbar sx={{ mb: 2 }} />
    </>
  );
};

export default Header;