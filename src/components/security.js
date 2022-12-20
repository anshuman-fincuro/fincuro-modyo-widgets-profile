import * as React from 'react';

import {
    Card,
    CardContent,
    TextField,
    Typography,
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    Link,
    CircularProgress,
    InputAdornment,
    IconButton,
    FormControl,
    OutlinedInput
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from "axios";
import { Visibility, VisibilityOff } from '@mui/icons-material';



const Security = ({ userId }) => {

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [otp, setOtp] = React.useState("");
    const [error, setError] = React.useState("");
    const [enable, setEnable] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [data, setData] = React.useState({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: ""
    })
    const [showPassword, setShowPassword] = React.useState(false);
    const [showPassword2, setShowPassword2] = React.useState(false);
    const [showPassword3, setShowPassword3] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
    const handleClickShowPassword3 = () => setShowPassword3((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };
    const handleMouseDownPassword3 = (event) => {
        event.preventDefault();
    };

    const timer = React.useRef();
    const matches = useMediaQuery('(min-width:1100px)');
    const match = useMediaQuery('(min-width:540px)');




    const handleDailog = () => {
        setOpen(true);
    }
    const handleValidate = () => {
        if (otp.match(/^[0-9]{4}$/)) {
            setError("");
            setOtp("");
            setOpen2(true)
        }

        else { setError("Invalid OTP") }

    }

    const handleClose = () => {
        setOpen(false);
        setOpen2(false);
        setEnable(false)

    }
    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current)
        }
    }, []);
    const handleClickResend = () => {
        if (!loading) {
            setLoading(true);
            timer.current = window.setTimeout(() => {
                setLoading(false);
            }, 1000);
            setTimeout(() => {
                alert("New OTP has been sent")
            }, 1200)
        }

    }

    const handleOnChange = (key, value) => {
        setData({
            ...data,
            [key]: value
        })
    }

    const handleUpdate = () => {

        axios({
            method: "put",
            url: "https://apis.fincuro.com:8088/contact/user-profile/change-password",
            data: {
                userId: userId,
                oldPassword: data["oldPassword"],
                newPassword: data["newPassword"]
            }

        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    console.log(data)
    return (
        <>
            <Card>
                <CardContent sx={{ backgroundColor: `black !important` }}>
                    <Typography variant='h6' sx={{ color: "#84888C !important" }} textAlign='left'>Change Password</Typography>
                    <Typography variant='h6' className="typography" textAlign='left' style={{ marginTop: 30 }}>Old Password</Typography>
                    <FormControl fullWidth variant="outlined" >
                        <OutlinedInput
                            placeholder='Old Password'
                            sx={{
                                backgroundColor: `#26272E !important`,
                                color: `white !important`,
                                border: `1px solid #393E44 !important`,
                                height: 50,
                                borderRadius: "0.5rem"
                            }}
                            value={data.oldPassword}
                            className='textfield'
                            onChange={(e) => { handleOnChange("oldPassword", e.target.value) }}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position='end' >
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="start"
                                        size='small'
                                        sx={{ backgroundColor: `#BCA568 !important` }}
                                    >
                                        {showPassword ? <VisibilityOff /> 
                                        : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Typography variant='subtitle1' className="typography" textAlign='right'>Forgot Password?</Typography>
                    <div>
                        <Typography variant='h6' className="typography" textAlign='left'>New Password</Typography>
                        <FormControl fullWidth variant="outlined" >
                        <OutlinedInput
                            placeholder='New Password'
                            sx={{
                                backgroundColor: `#26272E !important`,
                                color: `white !important`,
                                border: `1px solid #393E44 !important`,
                                height: 50,
                                borderRadius: "0.5rem"
                            }}
                            value={data.newPassword}
                            className='textfield'
                            onChange={(e) => { handleOnChange("newPassword", e.target.value) }}
                            id="outlined-adornment-password"
                            type={showPassword2 ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position='end' >
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword2}
                                        onMouseDown={handleMouseDownPassword2}
                                        edge="start"
                                        size='small'
                                        sx={{ backgroundColor: `#BCA568 !important` }}
                                    >
                                        {showPassword2 ? <VisibilityOff /> 
                                        : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    </div>
                    <div>
                        <Typography variant='h6' textAlign='left' className="typography" style={{ marginTop: 20 }} >Confirm New Password</Typography>
                        <FormControl fullWidth variant="outlined" >
                        <OutlinedInput
                            placeholder='Confirm New Password'
                            sx={{
                                backgroundColor: `#26272E !important`,
                                color: `white !important`,
                                border: `1px solid #393E44 !important`,
                                height: 50,
                                borderRadius: "0.5rem"
                            }}
                            value={data.confirmNewPassword}
                            className='textfield'
                            onChange={(e) => { handleOnChange("confirmNewPassword", e.target.value) }}
                            id="outlined-adornment-password"
                            type={showPassword3 ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position='end' >
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword3}
                                        onMouseDown={handleMouseDownPassword3}
                                        edge="start"
                                        size='small'
                                        sx={{ backgroundColor: `#BCA568 !important` }}
                                    >
                                        {showPassword3 ? <VisibilityOff /> 
                                        : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: matches ? "end" : "space-around", marginTop: '20px' }}>
                        <Button variant='outlined'
                            style={{
                                marginRight: '20px',
                                marginTop: match ? "" : "10px",
                                width: match ? "28%" : ""
                            }}
                            sx={{ color: `#84888C !important`, border: `1px solid grey !important` }}
                        >Cancel</Button>
                        <Button style={{ marginRight: '20px', marginTop: match ? "" : "10px", width: match ? "28%" : "" }}
                            sx={{ color: `black !important`, backgroundColor: `#BCA568 !important` }}
                            variant='contained' color='success' onClick={handleDailog}>Send OTP</Button>
                        <Button
                            disabled={enable}
                            style={{ marginTop: match ? "" : "10px", width: match ? "28%" : "" }}
                            sx={{
                                color: enable ? `#84888C !important` : `black !important`,
                                backgroundColor: enable ? `#26272E !important` : `#BCA568 !important`,
                            }}
                            onClick={handleUpdate}
                        >Update Password</Button>
                    </div>
                </CardContent>
                <Dialog open={open} sx={{ marginRight: match ? "45%" : "" }}>
                    <DialogContent sx={{ backgroundColor: "black !important" }}>
                        <TextField
                            sx={{
                                input: {
                                    background: `#26272E !important`,
                                    color: `white !important`,
                                    border: `1px solid #393E44 !important`,
                                    height: 15,
                                    borderRadius: "0.5rem"
                                }
                            }}
                            className='textfield'
                            type='text'
                            value={otp}
                            variant='outlined'
                            placeholder='Enter OTP Here'
                            onChange={(e) => setOtp(e.target.value)}
                            helperText={error}
                        />
                    </DialogContent>
                    <DialogActions sx={{ backgroundColor: "black !important" }}>
                        <Button
                            sx={{ marginRight: '20px', backgroundColor: "#BCA568 !important", color: "black" }}
                            variant='contained'
                            color='success'
                            onClick={handleValidate}
                        >
                            Verify OTP
                        </Button>
                        <Link onClick={handleClickResend}
                            style={{ marginRight: 20, cursor: "pointer" }}
                            sx={{ color: "#BCA568 !important" }}
                        >Resend OTP</Link>
                        {
                            loading &&
                            <CircularProgress size={20} sx={{ color: "#BCA568 !important" }} />
                        }
                    </DialogActions>
                </Dialog>

                <Dialog open={open2} sx={{ marginRight: match ? "45%" : "" }}>
                    <DialogContent sx={{ backgroundColor: "black !important" }}>
                        <Typography className="typography">OTP Verified Successfully</Typography>
                    </DialogContent>
                    <DialogActions sx={{ backgroundColor: "black !important" }}>
                        <Button variant='contained'
                            sx={{ backgroundColor: "#BCA568 !important", color: "black" }}
                            onClick={handleClose}>ok</Button>

                    </DialogActions>
                </Dialog>
            </Card>
        </>
    )
}

export default Security;