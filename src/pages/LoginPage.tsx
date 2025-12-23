import "./login.css"
import LoginLogo from "../assets/logo-1.png"
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material"
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className="login-container">
        <div className="login-logo">
            <img src={LoginLogo} alt="Logo" />
        </div>

        <div className="form">  
            <h2>Login</h2>

            <div className="input-group">
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <TextField id="email" label="Email" variant="outlined" />
                </FormControl>

                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label={
                                showPassword ? 'hide the password' : 'display the password'
                            }
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            onMouseUp={handleMouseUpPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                 <Button variant="contained">Login</Button>
                </FormControl>
            </div>
        </div>
    </div>
  )
}

export default LoginPage