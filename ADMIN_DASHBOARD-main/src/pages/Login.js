/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="min-h-screen w-screen flex items-center justify-center bg-[#4070f4]">
			<div className="w-[450px] bg-white rounded-[6%] p-[30px] flex flex-col">
                <span className="text-3xl font-semibold">Login</span>
                <span className="h-1 w-8 bg-[#4070f4]"></span>
                <input type={"text"}
                    className="outline-none border-b-2  px-8 py-4 mt-10 focus:border-[#4070f4]" placeholder="Enter your Phone number"
                />

                <input type={"password"}
                    className="outline-none border-b-2 px-8 py-4 mt-10 focus:border-[#4070f4]" placeholder="Enter your password"
                />

                <div className="mt-6 flex text-md items-center justify-between">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input type={"checkbox"} />
                        <p>Remember me </p>
                    </label>

                    <p className="text-sky-500 cursor-pointer hover:underline">Forgot Password?</p>
                </div>

                <Link to={"users"}>
                <button className="w-full mt-6 rounded-md py-3 bg-[#4070f4] hover:bg-[#265df2] cursor-pointer text-white font-medium">
                    Login
                </button>
                </Link>
            </div>
		</div>
	);
};

export default Login;
