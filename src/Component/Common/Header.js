import "./Header.css"

const Header = () =>{
    return(
        <div id="head">
            <div className="head_logo">
                <h1>
                    <a className="link_service" href="/">카카오같이가치</a>
                </h1>
                <div>
                    <a>같이기부</a>
                    <a>모두의행동</a>
                    <a>마음날씨</a>
                </div>
                <div>
                    <button>제안하기</button>
                    <button>로그인</button>
                    <button type="button">
                        <span className="ico_together ico_search">검색</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;