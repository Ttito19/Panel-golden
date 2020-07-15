import React from "react";
import "./index.scss";
import { FaAlignJustify } from "react-icons/fa";

//Components
import Item from "./subcomponents/Item";
import config from "./config";

function SideBar() {
	return (
		<>
		<input type="checkbox" id ="open-panel"></input>
		<label htmlFor="open-panel" className="open-panel"><FaAlignJustify /></label>
		
		<div className="sidebar">
			
			<header className="header-sidebar">
				<h1 className="title-header">Golden Express</h1>
			</header>
			
			<section className="body-sidebar">
				<ul className="container-items-list">{config.map((v, i) => <Item key={i} list={v} />)}</ul>
			</section>
		</div>
		</>
	);
}

export default SideBar;
