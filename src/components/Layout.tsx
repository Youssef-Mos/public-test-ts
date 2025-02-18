import { Box, AppBar, Toolbar, Button, Container, Typography, IconButton } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DescriptionIcon from '@mui/icons-material/Description';


export default function Layout() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My App
                    </Typography>
                    <Button
                        component={Link}
                        to="/form"
                        color="inherit"
                        startIcon={<DescriptionIcon />}
                        sx={{ mr: 2 }}
                    >
                        Form
                    </Button>
                    <Button
                        component={Link}
                        to="/calendar"
                        color="inherit"
                        startIcon={<CalendarTodayIcon />}
                    >
                        Calendar
                    </Button>
                </Toolbar>
            </AppBar>
            <Container component="main" sx={{ mt: 4, mb: 4 }}>
                <Outlet />
            </Container>
        </Box>
    );
}