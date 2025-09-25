import { CssBaseline, AppBar, Toolbar, Typography, Button} from '@mui/material'
import {NavLink} from 'react-router'

const routes = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/nasa", label: "Nasa" },
  { path: "/users", label: "Users" },
];

export default function HeaderComponent() {
    return(
        <>
        <CssBaseline />
          <AppBar position='static' >
          <Toolbar>
            <Typography variant='h6'>My todos</Typography>
            {routes.map(({path, label}) =>
            <Button
              key={path}
              variant='text'
              component={NavLink}
              to={path}
              sx={{ color: "white", mx: 1 }}
            >
              {label}
            </Button> )}
          </Toolbar>
        </AppBar>
        </>
    );
}