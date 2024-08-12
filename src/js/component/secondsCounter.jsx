import React from "react";

const SecondsCounter = (props) => {
	return	<div className="card position-relative bg-black" style={{width: "150px", height: "300px"}}>
				<div className="card-body">
					<h1 className="card-title position-absolute top-50 start-50 translate-middle text-white" style={{fontSize: "100px"}}>{props.text}</h1>
				</div>
			</div>
};

export default SecondsCounter;
