import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {About} from "../../pages/About/About";
import {Contact} from "../../pages/Contact/Contact";
import {Cart} from "../../pages/Cart/Cart";
import {BuyProduct} from "../../pages/BuyProduct/BuyProduct";

export class MainContent extends Component {
    render() {
        return (
            <div>
                {/*<h1 className="text-tertiary*/}
                {/*              text-center">*/}
                {/*    This is Main Content*/}
                {/*</h1>*/}
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                    <Route path="/cart" Component={Cart}></Route>
                    <Route path="/buy/:id" Component={BuyProduct}></Route>
                    {/*<Route path="/about" Component={About}></Route>*/}
                    {/*<Route path="/contact" Component={Contact}></Route>*/}
                </Routes>
            </div>
        );
    }
}