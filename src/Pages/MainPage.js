import Footer from "../Component/Common/Footer";
import Header from "../Container/Header/HeaderContainer";
import MainPageForm from "../Component/MainPage/MainPageForm";
import PageBlock from "../Component/PageBlock";

const MainPage = () =>{
    return(
        <PageBlock>
            <Header/>
            <MainPageForm/>
            <Footer/>
        </PageBlock>
    )
}

export default MainPage;