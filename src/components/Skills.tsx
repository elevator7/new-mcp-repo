import React from 'react';
import { Box, Typography, Chip, Grid, Container, Paper, Divider } from '@mui/material';
import { Code, Storage, Cloud, Architecture, BuildCircle } from '@mui/icons-material';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Code />,
    skills: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Redux', 'HTML5', 'CSS3', 'SCSS', 'Material UI', 'Responsive Design'],
  },
  {
    title: 'Backend',
    icon: <Storage />,
    skills: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL', 'WebSockets', 'Microservices'],
  },
  {
    title: 'Database',
    icon: <Storage />,
    skills: ['SQL', 'PostgreSQL', 'MongoDB', 'Redis', 'NoSQL', 'Database Design', 'ORM', 'Data Modeling'],
  },
  {
    title: 'DevOps & Cloud',
    icon: <Cloud />,
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Jenkins', 'Terraform', 'Infrastructure as Code'],
  },
  {
    title: 'Architecture & Tools',
    icon: <Architecture />,
    skills: ['System Design', 'Architecture', 'Agile', 'Scrum', 'Jira', 'Git', 'Testing', 'Monitoring', 'Performance Optimization'],
  },
];

const Skills: React.FC = () => (
  <Container maxWidth="lg" component="section" id="skills" sx={{ py: 8 }}>
    <Typography variant="h3" fontWeight={600} mb={2} textAlign="center">
      Skills & Expertise
    </Typography>
    <Typography variant="body1" color="text.secondary" mb={6} textAlign="center">
      A comprehensive set of skills acquired through years of experience in software development
    </Typography>

    <Grid container spacing={4}>
      {skillCategories.map((category) => (
        <Grid item xs={12} md={6} lg={4} key={category.title}>
          <Paper 
            elevation={3}
            sx={{
              p: 3,
              height: '100%',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box sx={{ mr: 1, color: 'primary.main' }}>{category.icon}</Box>
              <Typography variant="h6" fontWeight={600}>{category.title}</Typography>
            </Box>
            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {category.skills.map((skill) => (
                <Chip 
                  key={skill} 
                  label={skill} 
                  size="small"
                  color="primary" 
                  variant="outlined" 
                  sx={{ mb: 1 }} 
                />
              ))}
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Skills;