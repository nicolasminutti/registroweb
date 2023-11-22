import React from 'react'
import { useState } from 'react'
import { Container, Box, Grid, Typography, TextField, InputAdornment, Button, Avatar, Link } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import LoginIcon from '@mui/icons-material/Login'
import { Footer } from './Footer'

export const Registro = () => {

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)

    const [telefono, setTelefono] = useState('')
    const [telefonoError, setTelefonoError] = useState(false)

    const [showPassword, setShowPassword] = useState(false)

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!emailRegex.test(email)) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const validateTelefono = () => {
        const telefonoRegex = /^\d{10}$/

        if (!telefonoRegex.test(telefono)) {
            setTelefonoError(true)
        } else {
            setTelefonoError(false)
        }
    }

    const handleTelefonoChange = (event) => {
        setTelefono(event.target.value)
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    return (

        <Container component='main'>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',  // Ajusta según sea necesario
                    maxWidth: '400px', // Ajusta según sea necesario
                    margin: 'auto', // Centra horizontalmente
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LoginIcon />
                </Avatar>
                <Typography component='h1' variant='h5'>
                    Registro
                </Typography>
                <Box component='form' noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name='personaNombre'
                                fullWidth
                                id='personaNombre'
                                label='Nombre'
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name='personaApellido'
                                fullWidth
                                id='personaApellido'
                                label='Apellido'
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name='email'
                                fullWidth
                                id='email'
                                label='Correo Electrónico'
                                type='email'
                                required
                                value={email}
                                onChange={handleEmailChange}
                                onBlur={validateEmail}
                                error={emailError}
                                helperText={emailError && 'Formato de correo electrónico incorrecto'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name='telefono'
                                fullWidth
                                id='telefono'
                                label='Teléfono'
                                type='tel'
                                required
                                value={telefono}
                                onChange={handleTelefonoChange}
                                onBlur={validateTelefono}
                                error={telefonoError}
                                helperText={telefonoError && 'Formato de teléfono incorrecto'}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name='password'
                                fullWidth
                                id='password'
                                label='Contraseña'
                                type={showPassword ? 'text' : 'password'}
                                required
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton
                                                aria-label='toggle password visibility'
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name='passwordRetry'
                                fullWidth
                                id='passwordRetry'
                                label='Repita Contraseña'
                                type={showPassword ? 'text' : 'password'}
                                required
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton
                                                aria-label='toggle password visibility'
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Registrar
                    </Button>
                </Box>
            </Box>
            <Footer />
        </Container>
    )
}