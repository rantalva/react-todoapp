import Container from '@mui/material/Container'
import { CssBaseline, AppBar, Toolbar, Typography } from '@mui/material'

export default function HeaderComponent() {
    return(
        <>
        <Container maxWidth='x1'>
        <CssBaseline />
          <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6'>My todos</Typography>
          </Toolbar>
        </AppBar>
        </Container>
        </>
    );
}