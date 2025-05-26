import { Box, Container, Typography } from '@mui/material';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Box>
      <Hero />
      <Container maxWidth="lg">
        <Projects />
        <Skills />
        <Contact />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
