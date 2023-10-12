import React from "react";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
	return <div className="px-2 py-5 border border-cyan-800 flex justify-between">
        <span>2023 © TF. All Rights Reserved</span>
        <a
				href="http://linkedin.com/in/msholikhintofa"
				className="flex justify-center items-center rounded w-auto"
			>
				<FaLinkedinIn className="mr-2" />
			</a>
    </div>;
};

export default Footer;
