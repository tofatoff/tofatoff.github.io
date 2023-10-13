import React from "react";
import softeng from "../../assets/softeng.png";
import dateng from "../../assets/dateng.png";
import reactlogo from "../../assets/react.svg";
import pentaho from "../../assets/pentaho.png";
import odoo from "../../assets/odoo.png";
import cypress from "../../assets/cypress.png";

const SoftwareEngineering = () => {
	return (
		<div className="py-10 px-10 border border-cyan-800">
			<div className="flex">
				<div className="w-1/2 flex flex-col justify-evenly">
					<div>
						<h2 className="font-semibold text-2xl">Software Engineering</h2>
						<p>
							From analyzing requirements to testing before deployment, I ensure
							the software runs effectively and meets the desired objectives
						</p>
					</div>
					<div>
						<p>
							Tech Stack: ReactJS, Odoo, Django
							<br />
							Testing: Manual, Seleinum (Python, IDE), Cypress
						</p>
						<div className="h-9 flex">
							<img src={reactlogo} className="mx-1" />
							<img src={odoo} className="mx-1" />
							<img src={cypress} className="mx-1" />
						</div>
					</div>
				</div>
				<div className="w-1/2 flex justify-center">
					<img src={softeng} height="50%" />
				</div>
			</div>
			<div className="flex flex-row-reverse">
				<div className="w-1/2 flex flex-col justify-evenly">
					<div>
						<h2 className="font-semibold text-2xl">Data Engineering</h2>
						<p>
							Extract, transform, and load data for analysis and reporting. Also
							design databases to efficiently store, organize, and manage data.
						</p>
					</div>
					<div>
						<p>Tools: Pentaho Data Integration</p>
						<div className="h-9 flex">
							<img src={pentaho} />
						</div>
					</div>
				</div>
				<div className="w-1/2 flex justify-center">
					<img src={dateng} />
				</div>
			</div>
		</div>
	);
};

export default SoftwareEngineering;
