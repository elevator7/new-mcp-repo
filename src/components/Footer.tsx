import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box py={4} textAlign="center" bgcolor="background.paper">
    <Typography variant="body2" color="text.secondary">
      &copy; {new Date().getFullYear()} Dhruv Patel. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
