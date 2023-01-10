import React from "react";
// import Jumbotron from "./jumbotron.jsx";
// import Card from "./card.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	console.log(props);
	return (
		<div style={{width: "75%"}} className="align-items-center justify-content-center mx-auto text-center bg-black text-white p-3 d-flex">

			{/* Se crean las cards y le pongo características*/}
			<div className="card bg-dark mx-1" style={{width: "5rem", height: "100px"}}>
       			<div className="card-body position-absolute top-50 start-50 translate-middle">
				   <i className="far fa-clock"></i>
        		</div>
      		</div>

			<div className="card bg-dark mx-1" style={{width: "5rem", height: "100px"}}>
       			<div className="card-body position-absolute top-50 start-50 translate-middle">
          			<h5 className="card-title text-white">{props.numero6}</h5>
        		</div>
      		</div>

			  <div className="card bg-dark mx-1" style={{width: "5rem", height: "100px"}}>
       			<div className="card-body position-absolute top-50 start-50 translate-middle">
          			<h5 className="card-title text-white">{props.numero5}</h5>
        		</div>
      		</div>
			
			  <div className="card bg-dark mx-1" style={{width: "5rem", height: "100px"}}>
       			<div className="card-body position-absolute top-50 start-50 translate-middle">
          			<h5 className="card-title text-white">{props.numero4}</h5>
        		</div>
      		</div>

			  <div className="card bg-dark mx-1" style={{width: "5rem", height: "100px"}}>
       			<div className="card-body position-absolute top-50 start-50 translate-middle">
          			<h5 className="card-title text-white">{props.numero3}</h5>
        		</div>
      		</div>

			  <div className="card bg-dark mx-1" style={{width: "5rem", height: "100px"}}>
       			<div className="card-body position-absolute top-50 start-50 translate-middle">
          			<h5 className="card-title text-white">{props.numero2}</h5>
        		</div>
      		</div>

			  <div className="card bg-dark mx-1" style={{width: "5rem", height: "100px"}}>
       			<div className="card-body position-absolute top-50 start-50 translate-middle">
          			<h5 className="card-title text-white">{props.numero1}</h5>
        		</div>
      		</div>
		</div>
	);
};

export default Home;
