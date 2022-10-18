import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './HeaderComponent.css'

function HeaderComponent({mode, setMode}) {
    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            My First react app
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={setMode}
                            color='primary'
                        >
                            {mode ? 'Light Mode' : 'Dark Mode'}
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default HeaderComponent