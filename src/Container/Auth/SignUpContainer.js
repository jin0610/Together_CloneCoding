import axios from "axios"
import { useEffect, useState } from "react";
import CreateAccountForm from "../../Component/Auth/SignUpForm"

const CreateAccountContainer = () =>{
    const [form, setForm] = useState({
        email:'',
        password: '',
        password2: '',
        nickname:''
    })

    const onChagne =e =>{
        const {value, name} = e.target;
        setForm({
            ...form,
            [name] : value
        })
    }

    const onSubmit = e =>{
        e.preventDefault();
        const {email, password, password2,nickname}= form;
        if([email, password, password2,nickname].includes('')){
            alert('빈칸을 모두 입력하세요.')
            return
        }
        if(password !== password2){
            alert('비밀번호가 일치하지 않습니다')
            setForm({
                ...form,
                password:'',
                password2:''
            })
            return
        }
        const data = {email, password,nickname}
        axios.post('/',data).then(res=>{
            console.log(res)
            if(res.status===200){
                console.log("회원가입 성공")
                alert('회원가입 성공')
                document.location.href='/'
            }
        })
    }

    useEffect(()=>{
        setForm({
            email:'',
            password:'',
            password2:'',
            nickname:''
        })
    },[])
    return(
        <div>
            <CreateAccountForm 
                form={form}
                onChange={onChagne}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default CreateAccountContainer