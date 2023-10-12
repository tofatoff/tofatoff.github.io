import React from "react";
import TFLogo from "../../assets/tf logo.svg";

const Navbar = () => {
	return (
		<div className="p-2 border border-cyan-800 flex justify-between items-center fixed top-0 w-full bg-white">
			<div className="flex items-center">
				<img src={TFLogo} width={50} height={50} />
				<span>The Foundation</span>
			</div>
            <div>
                <ul className="flex">
                    <li className="ml-4">lorem</li>
                    <li className="ml-4">lorem</li>
                    <li className="ml-4">lorem</li>
                    <li className="ml-4">lorem</li>
                </ul>
            </div>
		</div>
	);
};

export default Navbar;
