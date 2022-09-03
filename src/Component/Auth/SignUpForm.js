import { Link } from "react-router-dom"

const CreateAccountForm = (props) =>{
    const {form, onChange, onSubmit}= props
    return(
        <div className="block">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <input autoComplete="email" type="email"name="email" className="login_box" placeholder="이메일" onChange={onChange} value={form.email}/>

                    <input autoComplete="new-password" type="password" name="password" className="login_box" placeholder="비밀번호"onChange={onChange} value={form.password} minLength="8"/>
                    {form.password.length > 0 && form.password.length < 8  && <div style={{color : 'red'}}>영어, 숫자를 포함한 8자 이상 입력해주세요.</div>}

                    <input autoComplete="new-password" type="password" name="password2" className="login_box" placeholder="비밀번호 확인" onChange={onChange} value={form.password2} minLength="8"/>
                    {form.password !== form.password2 && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}

                    <input autoComplete="nickname" name="nickname" className="registerbox" placeholder ="닉네임" onChange={onChange} value={form.nickname} minLength="3"/>

                    <button>회원가입</button>

                </form>
                <Link to ="/"><button>취소</button></Link>
                
            </div>
        </div>
    )
}

export default CreateAccountForm