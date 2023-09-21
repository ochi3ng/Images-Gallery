import React, { useState } from "react";
import SearchIcon from "../assets/svgs/search-icon.svg";
import LogoutButton from "./LogoutButton";

function NavBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        onSearch(searchTerm);
    };

    return (
        <nav className="w-[100%] h-[80px] bg-gray-400 flex justify-center items-center ">
            <div className="w-[80%] h-full flex justify-center items-center ">
                <div className="w-[293px] h-[31px] flex justify-center items-center bg-gray-500 opacity-50 ">
                    <input
                        type="text"
                        placeholder="Search by tag"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-[250px] h-[30px] rounded-[5px] pl-[5px] bg-none "
                    />{" "}
                    <div className="w-[40px] h-[30px] flex justify-center items-center ">
                        <img className=" " onClick={handleSearch} src={SearchIcon} alt="" />
                    </div>
                </div>{" "}
            </div>
            <div className="w-[20%] h-full flex justify-center items-center ">
                <LogoutButton />
            </div>{" "}
        </nav>
    );
}

export default NavBar;