import { Box, Typography, Chip, Stack } from '@mui/material';

const skills = [
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'AWS',
  'Docker',
  'Kubernetes',
  'Jira',
  'CI/CD',
  'Microservices',
  'SQL',
  'NoSQL',
  'System Design',
  'Architecture',
];

const Skills = () => (
  <Box py={8}>
    <Typography variant="h4" fontWeight={600} mb={4} textAlign="center">
      Skills
    </Typography>
    <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="center">
      {skills.map((skill) => (
        <Chip key={skill} label={skill} color="primary" variant="outlined" sx={{ fontSize: 16 }} />
      ))}
    </Stack>
  </Box>
);

export default Skills;
