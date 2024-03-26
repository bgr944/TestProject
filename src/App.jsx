import React, { useState } from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import Home from './components/Home';
import './App.css';


function App() {
  const [tabValue, setTabValue] = useState('home');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Router>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container maxWidth="xl">
          <CssBaseline />

              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Todo Application here!
              </Typography>
              <Tabs value={tabValue} onChange={handleTabChange}>
                <Tab label="Home" value="home" to="/" component={Link} />
                <Tab label="Todos" value="todos" to="/todos" component={Link} />
              </Tabs>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<TodoList />} />
          </Routes>
        </Container>
      </LocalizationProvider>
    </Router>
  );
}

export default App;