import { Box, Typography, Button, Avatar, Stack } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

const avatarUrl = 'https://avatars.githubusercontent.com/u/145609677?v=4';

const Hero = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
      justifyContent: 'space-between',
      py: 8,
      gap: 4,
    }}
  >
    <Stack spacing={2} alignItems="center">
      <Avatar src={avatarUrl} sx={{ width: 120, height: 120 }} />
      <Typography variant="h3" fontWeight={700} textAlign="center">
        Dhruv Patel
      </Typography>
      <Typography variant="h5" color="text.secondary" textAlign="center">
        Senior Software Architect & Full Stack Engineer
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          href="https://github.com/elevator7"
          startIcon={<GitHub />}
          target="_blank"
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="https://linkedin.com/in/dhruvpatel7"
          startIcon={<LinkedIn />}
          target="_blank"
        >
          LinkedIn
        </Button>
      </Stack>
    </Stack>
  </Box>
);

export default Hero;
