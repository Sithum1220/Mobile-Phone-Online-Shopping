import {NavBar} from "../Navbar/NavBar";
import {Header} from "../Header/Header";
import {Home} from "../../pages/Home/Home";

export function DefaultLayout() {
    return (
        <>
            <NavBar/>
            <Header/>
            <Home />
        </>
    );
}