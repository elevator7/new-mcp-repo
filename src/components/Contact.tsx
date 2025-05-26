import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box py={8}>
      <Typography variant="h4" fontWeight={600} mb={4} textAlign="center">
        Contact
      </Typography>
      <Box maxWidth={500} mx="auto">
        {submitted ? (
          <Typography color="primary" textAlign="center">
            Thank you for reaching out! I will get back to you soon.
          </Typography>
        ) : (
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                fullWidth
              />
              <TextField
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                fullWidth
                multiline
                minRows={4}
              />
              <Button type="submit" variant="contained" color="primary" size="large">
                Send
              </Button>
            </Stack>
          </form>
        )}
      </Box>
    </Box>
  );
};

export default Contact;
