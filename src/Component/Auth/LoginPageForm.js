import { useState } from "react"
import { Link } from "react-router-dom"
import client from "../../client"
import "./LoginPageForm.css"

const LoginPageForm = (props) =>{
    const {form, onChange, onSubmit} = props


    return(
        <div className="loginblock">
            <div className="loginform">
                <form onSubmit={onSubmit}>
                    <input autoComplete="email" name="email" className="login_box" placeholder="이메일" onChange={onChange} value={form.email}/>

                    <input autoComplete="new-password" name="password"  className="login_box" placeholder="비밀번호" type ="password" onChange={onChange} value={form.password} minLength="8"/>
                    {form.password.length > 0 && form.password.length < 8  && <div style={{color : 'red'}}>영어, 숫자를 포함한 8자 이상 입력해주세요.</div>}
                    <button>로그인</button>
                </form>
                <Link to ="/create_account"><button>회원가입</button></Link>

            </div>
        </div>
    )
}

export default LoginPageForm