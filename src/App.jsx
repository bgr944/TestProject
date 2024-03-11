import TodoList from './components/TodoList'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers';
import './App.css'

function App() {

  return (
      <>
      <h3>My todos</h3>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth="xl">
        <CssBaseline />
        <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
                My Todos
          <DatePicker label="Select date"/>
          </Typography>
        </Toolbar>
      </AppBar>
      <TodoList />
      </Container>
      </LocalizationProvider>
      </>
  )
}

export default App
