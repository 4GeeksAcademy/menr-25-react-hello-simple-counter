import React from "react";
import SecondsCounter from "./secondsCounter";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({ digitOne, digitTwo, digitThree, digitFour, digitFive, digitSix }) => {
	return (
	  <div className="d-flex flex-row mb-3 justify-content-center bg-black ms-3 me-3 mt-3">
		<SecondsCounter text={<i className="fa-regular fa-clock"></i>} />
		<SecondsCounter text={digitSix % 10} />
		<SecondsCounter text={digitFive % 10} />
		<SecondsCounter text={digitFour % 10} />
		<SecondsCounter text={digitThree % 10} />
		<SecondsCounter text={digitTwo % 10} />
		<SecondsCounter text={digitOne % 10} />
	  </div>
	);
  };
  
  export default Home;