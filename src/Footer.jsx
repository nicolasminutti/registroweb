import React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Copyright from '@mui/icons-material/Copyright'

export const Footer = () => {
    return (
        <Typography variant='body2' color='text.secondary' align='center' sx={{ mt: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Copyright sx={{ marginRight: 1 }} />
            <Link color='inherit' href='https://github.com/nicolasminutti' underline='hover'>
                Nicolás Minutti
            </Link>
            <span style={{ marginLeft: '8px' }}>
                {new Date().getFullYear()}
            </span>
            {'.'}
        </Typography>
    )
}