import React from "react";

const SoftwareEngineering = () => {
	return (
		<div className="py-10 px-10 border border-cyan-800">
			<div>
				<div>
					<h2>Software Engineering</h2>
					<p>
						From analyzing requirements to testing before deployment, I ensure
						the software runs effectively and meets the desired objectives
					</p>
                    <p>
                        Tech Stack: ReactJS, Odoo, Django
                        <br />
                        Testing: Manual, Seleinum (Python, IDE), Cypress
                    </p>
				</div>
				<div></div>
			</div>
			<div>
				<div>
					<h2>Data Engineering</h2>
					<p>
						Extract, transform, and load data for analysis and reporting. Also
						design databases to efficiently store, organize, and manage data.
					</p>
                    <p>
                        Tools: Pentaho Data Integration
                    </p>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default SoftwareEngineering;
