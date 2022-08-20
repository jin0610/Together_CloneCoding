import { useEffect } from "react"
import { useState } from "react"
import Cookies from "universal-cookie"
import client from "../../client"
import LoginPageForm from "../../Component/Auth/LoginPageForm"
const queryString = require('query-string');

const LoginContainer = () =>{
    const cookies =new Cookies();

    const [form, setForm] = useState({
        email:'',
        password:''
    })

    const onChange = e =>{
        const { value, name } = e.target
        setForm({
            ...form,
            [name] : value
        })
    }

    const onSubmit = e =>{
        e.preventDefault();
        const {email, password} = form;
        const data = {
            email, password
        }
        client.post('/auth/login',queryString.stringify(data)).then(res => {
            localStorage.setItem("token", res.data.token );
            console.log(localStorage.getItem("token"))
            
            if(res.status === 200){
                window.location.href = '/'
                cookies.set('refresh_token', res.data.token, { sameSite: 'strict' });
                client.defaults.headers.common['x-access-token'] = `Bearer+${res.data.token}`
            }
        }) 
    }

    useEffect(()=>{
        setForm({
            email: '',
            password: '',
        })
    },[])

    return(
        <LoginPageForm
            form={form}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    )
}

export default LoginContainer