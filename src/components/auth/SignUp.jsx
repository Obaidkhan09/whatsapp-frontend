import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button"

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { loadUser, signUp } from '../../features/authSlice';
import axios from '../../utils/axios';
import { toast } from "react-toastify";

export default function SignUp() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const handleSubmit = async () => {
    try {
      const token = await axios.post('/api/signup', user);
      dispatch(signUp(token.data))
      //Loading user from local storage if any
      dispatch(loadUser());
      console.log(token);
      setUser({
        name: "",
        email: "",
        password: ""
      })
    } catch (error) {
      toast.error(`${error.response.data}`, {
        position: "bottom-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      });
    }
  }
  if (auth?._id) { return <Navigate to="/home" /> }
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', marginBottom: 30 }}>
      <div style={{ width: '60%' }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography align='left' mt={3}>
              Enter Name
            </Typography>
            <TextField
              hiddenLabel
              id="name"
              variant="filled"
              size="small"
              placeholder='Name'
              fullWidth
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography align='left' mt={2}>
              Enter Email
            </Typography>
            <TextField
              hiddenLabel
              id="email"
              variant="filled"
              size="small"
              placeholder='Email'
              fullWidth
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography align='left' mt={2}>
              Enter Password
            </Typography>
            <TextField
              hiddenLabel
              id="password"
              variant="filled"
              size="small"
              placeholder='Password'
              type="password"
              fullWidth
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              style={{
                color: '#25D366',
                fontWeight: 600,
                marginTop: 20,
                border: "1px solid #25D366"
              }}
              onClick={() => handleSubmit()}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}