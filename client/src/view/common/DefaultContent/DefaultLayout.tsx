import {NavBar} from "../navbar/NavBar";
import {Header} from "../header/Header";
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