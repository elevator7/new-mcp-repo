import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from '@mui/material';

const projects = [
  {
    title: 'MCP Platform',
    description: 'A Model Context Protocol platform for AI-powered developer tools.',
    link: 'https://github.com/elevator7',
  },
  {
    title: 'Jira MCP Server',
    description: 'A local MCP server for Jira integration and automation.',
    link: 'https://github.com/elevator7',
  },
  {
    title: 'Portfolio',
    description: 'This portfolio site, built with React, TypeScript, and MUI.',
    link: '#',
  },
];

const Projects = () => (
  <Box py={8}>
    <Typography variant="h4" fontWeight={600} mb={4} textAlign="center">
      Projects
    </Typography>
    <Grid container spacing={4}>
      {projects.map((project) => (
        <Grid item xs={12} md={4} key={project.title}>
          <Card elevation={3} sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" fontWeight={700} gutterBottom>
                {project.title}
              </Typography>
              <Typography color="text.secondary">{project.description}</Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={project.link} target="_blank">
                View
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects;
