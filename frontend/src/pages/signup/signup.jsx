import { Container, Card, Button} from "react-bootstrap";
import { MenuItem } from "@mui/material";
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { register } from "../../features/auth/authSlice";
import './signup.css'
import medicall from './MEDICALL.svg'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Spinner from '../../components/spinner'

const Signup =() =>{

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        role:''
    })

    const {name, email, password, role} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {isLoading} = useSelector((state) => state.auth)

    // useEffect(()=>{
    //     if(isError){
    //         console.log("Error occurred:", message);
    //         toast.error(message)
    //     }
    //     if(isSuccess || user) {
    //         console.log("Successful registration. Navigating to /login");
    //         navigate('/login')
    //     }

    //     dispatch(reset())
         
    // },[user, isError, isSuccess, message, navigate, dispatch])


    const onChange =(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = async (e) =>{
        e.preventDefault()

        const userData = {
            name,email,password,role,
        }

        const result = await dispatch(register(userData))
        if(!result.payload._id){
            toast.error(result.payload)
            return
        }
        navigate('/login')
    }

    if(isLoading){
        return <Spinner />
    }

    return(
        <>
            <Container fluid className="signup-container" >
                <Card className="signup-card">
                    <a href="/" className="signup-logo">
                    <img 
                        src={medicall}
                        width="159"
                        height="42"
                        alt="medicallLogo"
                        className="signup-logo"
                    />
                    </a>
                    <p className="signup-text">Sign Up</p>
                    <Box
                        component="form"
                        className="form-email-signup"
                        onSubmit={onSubmit} // Attach onSubmit here
                        sx={{
                            '& > :not(style)': { m: 1, width: '36ch', marginLeft: '16rem' },
                        }}
                    >
                        <TextField id="name" name='name' value={name} className="emailForm" label="Full Name" variant="standard" onChange={onChange} />
                        <TextField id="email" name='email' value={email} className="emailForm" label="Email" variant="standard" onChange={onChange} />
                        <TextField
                            id="role"
                            name='role'
                            select
                            label="Role"
                            value={role}
                            className="emailForm"
                            variant="standard"
                            onChange={onChange}
                        >
                            <MenuItem value="doctor">Doctor</MenuItem>
                            <MenuItem value="nurse">Patient</MenuItem>
                            {/* <MenuItem value="admin">Admin</MenuItem> */}
                        </TextField><TextField id="password" name='password' type="password" value={password} className="PasswordForm" label="Password" variant="standard" onChange={onChange} />
                        <Button type="submit" variant="primary" className="btn-signup">Signup</Button>
                    </Box>
                    
                    
                    <Button variant="outline-dark" className="btn-signup-dark">Signup with Google</Button>
                    <p className="login-here">Already have an account?<NavLink to="/login">Login Here</NavLink></p>
                </Card>
            
        </Container>
        </>
    );
};

export default Signup;