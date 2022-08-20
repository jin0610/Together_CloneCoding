import client from "../../client";
import "./Header.css"

const Header = (props) =>{
    const {logout}=props
    return(
        <div id="head">
            <div className="head_logo">
                <h1>
                    <a className="link_service" href="/"><img className="headerlink"/></a>
                </h1>
                <div>
                    <a href="/donation">같이기부</a>
                    <a href="/active">모두의행동</a>
                    <a href="/mood">마음날씨</a>
                </div>
                <div>
                    <a href="#" className="link_btn">제안하기</a>
                    { client.defaults.headers.common["Authorization"]=== undefined ?
                    <a href="/login" className="link_btn">로그인</a> :
                    <a href="/" className="link_btn" 
                    onClick={logout}>로그아웃</a>}
                    
                        
                    <button type="button" className="btn_search">
                        <span className="ico_together ico_search">검색</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;