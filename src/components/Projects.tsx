import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  CardMedia,
  Button, 
  Container, 
  Chip, 
  Stack 
} from '@mui/material';
import { GitHub, Language, Code } from '@mui/icons-material';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  demoLink: string;
  repoLink: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: 'MCP Platform',
    description: 'A Model Context Protocol platform for AI-powered developer tools. Integrates with various AI models to provide context-aware assistance for software development.',
    imageUrl: 'https://images.unsplash.com/photo-1677442135146-8b02ba0d1631?q=80&w=1932&auto=format&fit=crop',
    demoLink: 'https://github.com/elevator7',
    repoLink: 'https://github.com/elevator7',
    technologies: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'AI Integration']
  },
  {
    title: 'Jira MCP Server',
    description: 'A local MCP server for Jira integration and automation. Enables seamless workflow between development tasks and issue tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1661956602139-ec64991b8b16?q=80&w=1665&auto=format&fit=crop',
    demoLink: 'https://github.com/elevator7',
    repoLink: 'https://github.com/elevator7',
    technologies: ['TypeScript', 'Express', 'Jira API', 'Docker', 'REST']
  },
  {
    title: 'Portfolio Website',
    description: 'This modern portfolio site, built with React, TypeScript, and Material UI. Features responsive design and GitHub Pages integration.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1770&auto=format&fit=crop',
    demoLink: 'https://elevator7.github.io/new-mcp-repo/',
    repoLink: 'https://github.com/elevator7/new-mcp-repo',
    technologies: ['React', 'TypeScript', 'Material UI', 'GitHub Pages', 'Responsive Design']
  },
  {
    title: 'Enterprise Dashboard',
    description: 'A comprehensive dashboard for enterprise metrics and analytics, featuring real-time data visualization and reporting.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1770&auto=format&fit=crop',
    demoLink: '#',
    repoLink: '#',
    technologies: ['React', 'D3.js', 'Redux', 'Node.js', 'MongoDB']
  },
];

const Projects: React.FC = () => (
  <Container maxWidth="lg" component="section" id="projects" sx={{ py: 8 }}>
    <Typography variant="h3" fontWeight={600} mb={2} textAlign="center">
      Projects
    </Typography>
    <Typography variant="body1" color="text.secondary" mb={6} textAlign="center">
      Showcasing my recent work and technical capabilities
    </Typography>

    <Grid container spacing={4}>
      {projects.map((project) => (
        <Grid item xs={12} md={6} key={project.title}>
          <Card 
            elevation={3} 
            sx={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-10px)',
                boxShadow: '0 20px 30px rgba(0,0,0,0.2)',
              }
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={project.imageUrl}
              alt={project.title}
              sx={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h5" fontWeight={700} gutterBottom>
                {project.title}
              </Typography>
              <Typography color="text.secondary" paragraph>
                {project.description}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                  Technologies:
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {project.technologies.map((tech) => (
                    <Chip 
                      key={tech} 
                      label={tech} 
                      size="small" 
                      color="primary" 
                      variant="outlined" 
                    />
                  ))}
                </Stack>
              </Box>
            </CardContent>
            <CardActions sx={{ mt: 'auto', padding: 2, justifyContent: 'space-between' }}>
              <Button 
                variant="contained" 
                startIcon={<Language />}
                href={project.demoLink} 
                target="_blank"
                disabled={project.demoLink === '#'}
              >
                Live Demo
              </Button>
              <Button 
                variant="outlined"
                startIcon={<GitHub />}
                href={project.repoLink} 
                target="_blank"
                disabled={project.repoLink === '#'}
              >
                Repository
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Projects;