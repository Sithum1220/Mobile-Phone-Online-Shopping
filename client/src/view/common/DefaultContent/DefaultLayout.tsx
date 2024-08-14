import {NavBar} from "../Navbar/NavBar";
import {Header} from "../Header/Header";
import {Home} from "../../pages/Home/Home";
import {Footer} from "../Footer/Footer";
import {MainContent} from "../MainContent/MainContent";

export function DefaultLayout() {
    return (
        <>
            <NavBar/>
            <Header/>
            <MainContent/>
            <Footer/>
        </>
    );
}