import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import Profile from "../../assets/profile.png"

const Hero = () => {
	return (
		<div className="mt-16 flex justify-center items-center flex-col px-10 border border-cyan-800 w-full">
			<h1 className="text-4xl font-bold font-sans mb-3 text-center">
				Versatile <br />
				Computer Scientist
			</h1>
			<p className="mb-3">
				Experienced in software engineering and data engineering
			</p>
			<a
				href="http://linkedin.com/in/msholikhintofa"
				className="flex justify-center items-center border border-gray-950 rounded w-auto px-3 py-2 bg-zinc-900 mb-3"
			>
				<FaLinkedinIn color="white" className="mr-2" />
				<span className="ml-2 text-white font-medium">
					Connect with me in LinkedIn
				</span>
			</a>
            <img src={Profile} width={300} />
		</div>
	);
};

export default Hero;
