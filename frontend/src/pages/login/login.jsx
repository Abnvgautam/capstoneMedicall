import { Container, Card, Button} from "react-bootstrap";
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {NavLink,useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import { login} from "../../features/auth/authSlice";
import './login.css'
import medicall from './MEDICALL.svg'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Spinner from '../../components/spinner'


const Login = () =>{
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { isLoading
    } = useSelector(
        (state) => state.auth
    )

    // useEffect(()=>{
    //     if(isError){
    //         toast.error(message)
    //     }
    //     if(isSuccess || user) {
    //         if(user && user.role === 'doctor'){
    //             navigate('/doctors')
    //         }else if (user && user.role === 'patient'){
    //             navigate('/patients')
    //             console.log('Patient Route')
    //         }
            
    //     }

    //     dispatch(reset())
         
    // },[user, user?.role, isError, isSuccess, message, navigate, dispatch])

    if(isLoading){
        return <Spinner />
    }


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit =async (e) => {
        e.preventDefault()

        const userData = {
            email,
            password
        }

        const result = await dispatch(login(userData))
        console.log(result)
        if(!result.payload._id){
                toast.error(result.payload)
                return
        }
        const { role } = result.payload; 

            if (role === 'doctor') {
                navigate('/doctors');
            } else if (role === 'patient') {
                navigate('/patients');
            }

    }

    return(
        <>
        <Container fluid className="login-container">
                <Card className="login-card">
                    <NavLink to='/' className="login-logo">
                    <img 
                        src={medicall}
                        width="159"
                        height="42"
                        alt="medicallLogo"
                        className="login-logo"
                    />
                    </NavLink>
                   
                
                    
                    <p className="login-text">Login</p>
                    <Box
                        component="form"
                        className="form-email"
                        onSubmit={onSubmit}
                        sx={{
                          '& > :not(style)': { m: 1, width: '36ch', marginLeft: '13rem' },
                        }}
                    >
                        <TextField id="email" name="email" value={email} className="emailForm" label="Email" variant="standard" onChange={onChange} />
                        <TextField id="password" name="password" value={password} type="password" className="PasswordForm" label="Password" variant="standard" onChange={onChange} /> 
                        <Button type="submit" variant="primary" className="btn-login">Login</Button>
                    </Box>
                    
                    
                    <p className="forgot-password">Forgot Password?</p>
                    <Button variant="outline-dark" className="btn-login-dark">Login with Google</Button>
                    <p className="signUp-here">Don't have an account? <NavLink to="/signup">Sign up Here</NavLink></p>
                </Card>
            
        </Container>
        </>
    );
};

export default Login;