import {Component} from "react";

export class Header extends Component {
    render() {
        return (
            <div>
                <div className="
                bg-[#F2F2F2]
                w-full
                h-10
                flex
                justify-center
                ">

                    <div className="
                    flex
                    items-center
                    justify-between
                    container
                    ps-20
                    pe-20
                    ">
                        <div className="flex gap-8">
                            <h3 className="inline-block text-sm opacity-60">Welcome to Devicer</h3>
                            <div className="inline-block" >
                                <span className="text-sm opacity-60">Customer Care</span>
                                <a className="text-sm opacity-60" href="tel:1-800-123-4567"> 1-800-123-4567</a>
                            </div>
                        </div>

                        <div>
                            <ul className="list-none flex gap-8">
                                <li className="text-sm cursor-pointer opacity-60">Sign Up</li>
                                <li className="text-sm cursor-pointer opacity-60">Sign In</li>
                                <li className="text-sm cursor-pointer opacity-60">My List</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}